/* global describe, it, expect */

'use strict';

var fkit = require('../src/fkit');

function add(a, b) { return a + b; }

describe('curry', function() {
  it('should curry the given function', function() {
    var result = fkit.curry(add);
    expect(result(1)(2)).to.eql(3);
    expect(result(1, 2)).to.eql(3);
  });
});
