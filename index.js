/**
 * jstransformer-postcss <https://github.com/tunnckoCore/jstransformer-postcss>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var postcss = require('postcss');

exports.name = 'postcss';
exports.inputFormats = ['css', 'postcss'];
exports.outputFormat = 'css';

exports.render = function _render(str, options) {
  options = typeof options === 'object' ? options : {};
  options.plugins = arrayify(options.plugins);

  var result = postcss(options.plugins).process(str, options);

  return JSON.stringify({
    root: result.root,
    opts: result.opts,
    css: result.css
  });
};

/**
 * arrayify value
 *
 * @param  {*} `val`
 * @return {Array}
 * @api private
 */
function arrayify(val) {
  return !Array.isArray(val)
    ? [val]
    : val;
}
