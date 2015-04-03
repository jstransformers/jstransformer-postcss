/**
 * jstransformer-postcss <https://github.com/jstransformers/jstransformer-postcss>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var fs = require('fs');
var postcss = require('postcss');

exports.name = 'postcss';
exports.outputFormat = 'json';

exports.render = function _render(str, opts) {
  return JSON.stringify(postcss.parse(str, opts));
};
exports.renderFile = function _renderFile(filepath, opts) {
  var input = fs.readFileSync(filepath, 'utf8');
  return exports.render(input, opts);
};
