/**
 * jstransformer-postcss <https://github.com/tunnckoCore/jstransformer-postcss>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var postcss = require('postcss');

exports.name = 'postcss';
exports.outputFormat = 'css';

exports.render = function _render(str, opts, plugins) {
  plugins = plugins || [];
  plugins = Array.isArray(plugins) ? plugins : [plugins];

  var result = postcss(plugins).process(str, opts);

  return JSON.stringify({
    root: result.root,
    opts: result.opts,
    css: result.css
  });
};
