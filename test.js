/**
 * jstransformer-postcss <https://github.com/jstransformers/jstransformer-postcss>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var fs = require('fs');
var test = require('testit');
var assert = require('assert');
var transform = require('./index');

test('should support sourcemaps', function(done) {
  var code = 'body {\n  font-size: 12px;\n}';
  var ast = transform.render(code, {from: 'body.css'});
  var data = JSON.parse(ast);

  assert.strictEqual(typeof data, 'object');
  assert.strictEqual(data.source.input.from[0], '/');
  assert.strictEqual(data.source.input.from.indexOf('body.css') !== -1, true);
  done();
});

test('should have .renderFile method', function(done) {
  var actual = transform.renderFile('./fixture.css');
  var expected = fs.readFileSync('./expected.json', 'utf8');

  // fs.writeFileSync('expected.json', actual)
  assert.strictEqual(actual, expected);
  done();
});
