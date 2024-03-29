'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plugin = undefined;

var _lodash = require('lodash');

/**
 * The server plugin class, used to extend the server
 * and add custom behavior. A "scoped" plugin class is
 * created by the PluginApi class and provided to plugin
 * providers that automatically binds all but the `opts`
 * arguments.
 *
 * @class Plugin
 * @param {KbnServer} kbnServer - the KbnServer this plugin
 *                              belongs to.
 * @param {PluginDefinition} def
 * @param {PluginSpec} spec
 */
class Plugin {
  constructor(kbnServer, spec) {
    this.kbnServer = kbnServer;
    this.spec = spec;
    this.pkg = spec.getPkg();
    this.path = spec.getPath();
    this.id = spec.getId();
    this.version = spec.getVersion();
    this.requiredIds = spec.getRequiredPluginIds() || [];
    this.externalPreInit = spec.getPreInitHandler();
    this.externalInit = spec.getInitHandler();
    this.enabled = spec.isEnabled(kbnServer.config);
    this.configPrefix = spec.getConfigPrefix();
    this.publicDir = spec.getPublicDir();

    this.preInit = (0, _lodash.once)(this.preInit);
    this.init = (0, _lodash.once)(this.init);
  }

  async preInit() {
    if (this.externalPreInit) {
      return await this.externalPreInit(this.kbnServer.server);
    }
  }

  async init() {
    const { id, version, kbnServer, configPrefix } = this;
    const { config } = kbnServer;

    // setup the hapi register function and get on with it
    const register = async (server, options) => {
      this._server = server;
      this._options = options;

      server.log(['plugins', 'debug'], {
        tmpl: 'Initializing plugin <%= plugin.toString() %>',
        plugin: this
      });

      if (this.publicDir) {
        server.exposeStaticDir(`/plugins/${id}/{path*}`, this.publicDir);
      }

      // Many of the plugins are simply adding static assets to the server and we don't need
      // to track their "status". Since plugins must have an init() function to even set its status
      // we shouldn't even create a status unless the plugin can use it.
      if (this.externalInit) {
        this.status = kbnServer.status.createForPlugin(this);
        server.expose('status', this.status);
        await this.externalInit(server, options);
      }
    };

    await kbnServer.server.register({
      plugin: { register, name: id, version },
      options: config.has(configPrefix) ? config.get(configPrefix) : null
    });

    // Only change the plugin status to green if the
    // initial status has not been changed
    if (this.status && this.status.state === 'uninitialized') {
      this.status.green('Ready');
    }
  }

  getServer() {
    return this._server;
  }

  getOptions() {
    return this._options;
  }

  toJSON() {
    return this.pkg;
  }

  toString() {
    return `${this.id}@${this.version}`;
  }
}
exports.Plugin = Plugin; /*
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