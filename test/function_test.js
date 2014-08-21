'use strict';

var fn = require('../src/function');

describe('function', function() {
  describe('#compose', function() {
    it('should compose the given functions', function () {
      var result = fn.compose(fn.inc, fn.dec);
      expect(result(1)).to.equal(1);
    });
  });

  describe('#constant', function() {
    it('should return a function which returns a constant value', function () {
      var result = fn.constant(1);
      expect(result(1)).to.equal(1);
    });
  });

  describe('#curry', function() {
    it('should curry the given function', function() {
      var result = fn.curry(fn.add);
      expect(result(1)(2)).to.equal(3);
      expect(result(1, 2)).to.equal(3);
    });
  });
});
