'use strict';

var postcss = require('postcss');

exports.name = 'postcss';
exports.inputFormats = ['postcss', 'css'];
exports.outputFormat = 'css';

exports.render = function (str, opts) {
  opts = opts && typeof opts === 'object' ? opts : {};
  opts.plugins = opts.plugins && opts.plugins.length ? arrayify(opts.plugins) : []

  return postcss(opts.plugins).process(str, opts).css
};

function arrayify (val) {
  return !Array.isArray(val) ? [val] : val;
}
