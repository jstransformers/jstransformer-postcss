/**
 * jstransformer-postcss <https://github.com/jstransformers/jstransformer-postcss>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var postcss = require('postcss');

exports.name = 'postcss';
exports.outputFormat = 'json';

exports.render = function (str, opts) {
  return JSON.stringify(postcss.parse(str, opts));
};
