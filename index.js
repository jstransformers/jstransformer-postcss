'use strict';

var postcss = require('postcss');

exports.name = 'postcss';
exports.inputFormats = ['postcss', 'css'];
exports.outputFormat = 'css';

exports.render = function (str, opts) {
  opts = opts && typeof opts === 'object' ? opts : {};
  opts.plugins = opts.plugins && opts.plugins.length
    ? (!Array.isArray(opts.plugins) ? [opts.plugins] : opts.plugins)
    : []

  return postcss(opts.plugins).process(str, opts).css
};
