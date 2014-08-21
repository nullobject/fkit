/* global describe, it, expect */

'use strict';

var fn = require('../src/function');

function add(a, b) { return a + b; }
function inc(a) { return a + 1; }
function dec(a) { return a - 1; }

describe('function', function() {
  describe('#curry', function() {
    it('should curry the given function', function() {
      var result = fn.curry(add);
      expect(result(1)(2)).to.equal(3);
      expect(result(1, 2)).to.equal(3);
    });
  });

  describe('#compose', function() {
    it('should compose the given functions', function () {
      var result = fn.compose(inc, dec);
      expect(result(1)).to.equal(1);
    });
  });
});
