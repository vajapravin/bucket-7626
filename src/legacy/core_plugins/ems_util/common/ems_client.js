'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EMSClientV66 = undefined;

var _markdownIt = require('markdown-it');

var _markdownIt2 = _interopRequireDefault(_markdownIt);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = require('../../../../core/public/utils');

var _tms_service = require('./tms_service');

var _file_layer = require('./file_layer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const extendUrl = (url, props) => (0, _utils.modifyUrl)(url, parsed => _lodash2.default.merge(parsed, props)); /*
                                                                                                                * Licensed to Elasticsearch B.V. under one or more contributor
                                                                                                                * license agreements. See the NOTICE file distributed with
                                                                                                                * this work for additional information regarding copyright
                                                                                                                * ownership. Elasticsearch B.V. licenses this file to you under
                                                                                                                * the Apache License, Version 2.0 (the "License"); you may
                                                                                                                * not use this file except in compliance with the License.
                                                                                                                * You may obtain a copy of the License at
                                                                                                                *
                                                                                                                *    http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                *
                                                                                                                * Unless required by applicable law or agreed to in writing,
                                                                                                                * software distributed under the License is distributed on an
                                                                                                                * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
                                                                                                                * KIND, either express or implied.  See the License for the
                                                                                                                * specific language governing permissions and limitations
                                                                                                                * under the License.
                                                                                                                */

const markdownIt = new _markdownIt2.default({
  html: false,
  linkify: true
});

/**
 *  Unescape a url template that was escaped by encodeURI() so leaflet
 *  will be able to correctly locate the variables in the template
 *  @param  {String} url
 *  @return {String}
 */
const unescapeTemplateVars = url => {
  const ENCODED_TEMPLATE_VARS_RE = /%7B(\w+?)%7D/g;
  return url.replace(ENCODED_TEMPLATE_VARS_RE, (total, varName) => `{${varName}}`);
};

const DEFAULT_LANGUAGE = 'en';

class EMSClientV66 {

  constructor({ kbnVersion, manifestServiceUrl, htmlSanitizer, language, landingPageUrl }) {
    this.EMS_LOAD_TIMEOUT = 32000;


    this._queryParams = {
      my_app_version: kbnVersion
    };

    this._sanitizer = htmlSanitizer ? htmlSanitizer : x => x;
    this._manifestServiceUrl = manifestServiceUrl;
    this._loadFileLayers = null;
    this._loadTMSServices = null;
    this._emsLandingPageUrl = landingPageUrl;
    this._language = typeof language === 'string' ? language : DEFAULT_LANGUAGE;

    this._invalidateSettings();
  }

  getValueInLanguage(i18nObject) {
    if (!i18nObject) {
      return '';
    }
    return i18nObject[this._language] ? i18nObject[this._language] : i18nObject[DEFAULT_LANGUAGE];
  }

  /**
   * this internal method is overridden by the tests to simulate custom manifest.
   */
  async _getManifest(manifestUrl) {
    let result;
    try {
      const url = extendUrl(manifestUrl, { query: this._queryParams });
      result = await this._fetchWithTimeout(url);
    } catch (e) {
      if (!e) {
        e = new Error('Unknown error');
      }
      if (!(e instanceof Error)) {
        e = new Error(e.data || `status ${e.statusText || e.status}`);
      }
      throw new Error(`Unable to retrieve manifest from ${manifestUrl}: ${e.message}`);
    } finally {
      return result ? await result.json() : null;
    }
  }

  _fetchWithTimeout(url) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error(`Request to ${url} timed out`)), this.EMS_LOAD_TIMEOUT);
      fetch(url).then(response => {
        clearTimeout(timer);
        resolve(response);
      }, err => {
        clearTimeout(timer);
        reject(err);
      });
    });
  }

  /**
   * Add optional query-parameters to all requests
   *
   * @param additionalQueryParams
   */
  addQueryParams(additionalQueryParams) {
    for (const key in additionalQueryParams) {
      if (additionalQueryParams.hasOwnProperty(key)) {
        if (additionalQueryParams[key] !== this._queryParams[key]) {
          //changes detected.
          this._queryParams = _lodash2.default.assign({}, this._queryParams, additionalQueryParams);
          this._invalidateSettings();
          break;
        }
      }
    }
  }

  _invalidateSettings() {

    this._getManifestWithParams = _lodash2.default.once(async url => this._getManifest(this.extendUrlWithParams(url)));

    this._getCatalogueService = async serviceType => {
      const catalogueManifest = await this._getManifestWithParams(this._manifestServiceUrl);
      let service;
      if (_lodash2.default.has(catalogueManifest, 'services')) {
        service = catalogueManifest.services.find(s => s.type === serviceType);
      }
      return service || {};
    };

    this._wrapServiceAttribute = async (manifestUrl, attr, WrapperClass) => {
      const manifest = await this._getManifest(manifestUrl);
      if (_lodash2.default.has(manifest, attr)) {
        return manifest[attr].map(config => {
          return new WrapperClass(config, this);
        });
      }
      return [];
    };

    this._loadFileLayers = _lodash2.default.once(async () => {
      const fileService = await this._getCatalogueService('file');
      return _lodash2.default.isEmpty(fileService) ? [] : this._wrapServiceAttribute(fileService.manifest, 'layers', _file_layer.FileLayer);
    });

    this._loadTMSServices = _lodash2.default.once(async () => {
      const tmsService = await this._getCatalogueService('tms');
      return _lodash2.default.isEmpty(tmsService) ? [] : await this._wrapServiceAttribute(tmsService.manifest, 'services', _tms_service.TMSService);
    });
  }

  getLandingPageUrl() {
    return this._emsLandingPageUrl;
  }

  sanitizeMarkdown(markdown) {
    return this._sanitizer(markdownIt.render(markdown));
  }

  sanitizeHtml(html) {
    return this._sanitizer(html);
  }

  extendUrlWithParams(url) {
    return unescapeTemplateVars(extendUrl(url, {
      query: this._queryParams
    }));
  }

  async getFileLayers() {
    return await this._loadFileLayers();
  }

  async getTMSServices() {
    return await this._loadTMSServices();
  }

  async findFileLayerById(id) {
    const fileLayers = await this.getFileLayers();
    for (let i = 0; i < fileLayers.length; i++) {
      if (fileLayers[i].hasId(id)) {
        return fileLayers[i];
      }
    }
  }

  async findTMSServiceById(id) {
    const tmsServices = await this.getTMSServices();
    for (let i = 0; i < tmsServices.length; i++) {
      if (tmsServices[i].hasId(id)) {
        return tmsServices[i];
      }
    }
  }

}
exports.EMSClientV66 = EMSClientV66;