'use strict';

var fn = require('../src/function');

function div2(a) { return a / 2; }
function add2(a) { return a + 2; }
function join(s, a) { return s + ' ' + a; }

describe('function', function() {
  describe('#compose', function() {
    it('should compose the given functions', function () {
      var f = fn.compose(add2, div2);
      expect(f(2)).to.equal(3);
    });
  });

  describe('#constant', function() {
    it('should return a function which returns a constant value', function () {
      var f = fn.constant(1);
      expect(f(1)).to.equal(1);
    });
  });

  describe('#curry', function() {
    it('should curry the given function', function() {
      var f = fn.curry(join);
      expect(f('hello')('world')).to.equal('hello world');
      expect(f('hello', 'world')).to.equal('hello world');
    });
  });

  describe('#add', function() {
    it('should add the given values', function () {
      expect(fn.add(1)(2)).to.equal(3);
    });
  });

  describe('#inc', function() {
    it('should increment the given value', function () {
      expect(fn.inc(1)).to.equal(2);
    });
  });

  describe('#dec', function() {
    it('should decrement the given value', function () {
      expect(fn.dec(1)).to.equal(0);
    });
  });
});
