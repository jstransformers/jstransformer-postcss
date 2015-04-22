/**
 * jstransformer-postcss <https://github.com/tunnckoCore/jstransformer-postcss>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var fs = require('fs');
var test = require('assertit');
var transform = require('../index');

// plugins
var lost = require('lost')
var nested = require('postcss-nested');

test('should transform nested CSS with PostCSS (.render)', function(done) {
  var fixture = fs.readFileSync('./test/fixture.css', 'utf8');
  var data = transform.render(fixture, {plugins: nested});
  var actual = JSON.parse(data).css;
  var expected = fs.readFileSync('./test/expected.css', 'utf8');

  test.equal(actual, expected);
  done();
});

test('should transform future CSS (LostGrid) with PostCSS (.render)', function(done) {
  var fixture = fs.readFileSync('./test/fixture.lost', 'utf8');
  var data = transform.render(fixture, {plugins: [lost()]});
  var actual = JSON.parse(data).css;
  var expected = fs.readFileSync('./test/expected.lost', 'utf8');

  test.equal(actual, expected);
  done();
});
