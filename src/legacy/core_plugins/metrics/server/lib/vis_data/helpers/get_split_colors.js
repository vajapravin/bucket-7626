'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSplitColors;

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSplitColors(inputColor, size = 10, style = 'gradient') {
  const color = new _color2.default(inputColor);
  const colors = [];
  let workingColor = _color2.default.hsl(color.hsl().object());

  if (style === 'rainbow') {
    return ['#68BC00', '#009CE0', '#B0BC00', '#16A5A5', '#D33115', '#E27300', '#FCC400', '#7B64FF', '#FA28FF', '#333333', '#808080', '#194D33', '#0062B1', '#808900', '#0C797D', '#9F0500', '#C45100', '#FB9E00', '#653294', '#AB149E', '#0F1419', '#666666'];
  } else {
    colors.push(color.string());
    const rotateBy = color.luminosity() / (size - 1);
    for (let i = 0; i < size - 1; i++) {
      const hsl = workingColor.hsl().object();
      hsl.l -= rotateBy * 100;
      workingColor = _color2.default.hsl(hsl);
      colors.push(workingColor.rgb().toString());
    }
  }

  return colors;
} /*
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

module.exports = exports['default'];