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

test('should transform modern CSS with PostCSS (.render)', function(done) {
  var fixture = fs.readFileSync('./test/fixture.css', 'utf8');
  var data = transform.render(fixture, {}, [require('postcss-nested')]);
  var actual = JSON.parse(data).css;
  var expected = fs.readFileSync('./test/expected.css', 'utf8');

  test.equal(actual, expected);
  done();
});
