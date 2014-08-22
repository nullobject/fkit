'use strict';

var fn = require('../src/function');

function div(a)     { return a / 2; }
function add(a)     { return a + 2; }
function join(s, a) { return s + ' ' + a; }

describe('function', function() {
  describe('utility', function() {
    describe('#compose', function() {
      it('should compose the given functions', function () {
        var f = fn.compose(add, div);
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

    describe('#identity', function() {
      it('should return a function which returns its argument', function () {
        expect(fn.identity(1)).to.equal(1);
      });
    });

    describe('arithmetic', function() {
      describe('#add', function() {
        it('should add the given values', function () {
          expect(fn.add(1)(2)).to.equal(3);
        });
      });

      describe('#sub', function() {
        it('should subtract the given values', function () {
          expect(fn.sub(1)(2)).to.equal(-1);
        });
      });

      describe('#mul', function() {
        it('should multiply the given values', function () {
          expect(fn.mul(1)(2)).to.equal(2);
        });
      });

      describe('#div', function() {
        it('should divide the given values', function () {
          expect(fn.div(1)(2)).to.equal(0.5);
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
  });

  describe('logical', function() {
    describe('#not', function() {
      it('should negate the given value', function () {
        expect(fn.not(true)).to.be.false;
        expect(fn.not(false)).to.be.true;
      });
    });

    describe('#and', function() {
      it('should AND the given values', function () {
        expect(fn.and(false)(false)).to.be.false;
        expect(fn.and(false)(true)).to.be.false;
        expect(fn.and(true)(false)).to.be.false;
        expect(fn.and(true)(true)).to.be.true;
      });
    });

    describe('#or', function() {
      it('should OR the given values', function () {
        expect(fn.or(false)(false)).to.be.false;
        expect(fn.or(false)(true)).to.be.true;
        expect(fn.or(true)(false)).to.be.true;
        expect(fn.or(true)(true)).to.be.true;
      });
    });

    describe('#eql', function() {
      it('should compare the given values', function () {
        var a = {}, b = {};

        expect(fn.eql(1)(2)).to.be.false;
        expect(fn.eql(2)(2)).to.be.true;

        expect(fn.eql('lorem')('ipsum')).to.be.false;
        expect(fn.eql('lorem')('lorem')).to.be.true;

        expect(fn.eql(a)(b)).to.be.false;
        expect(fn.eql(a)(a)).to.be.true;
      });
    });

    describe('#gt', function() {
      it('should compare the given values', function () {
        expect(fn.gt(1)(2)).to.be.false;
        expect(fn.gt(2)(1)).to.be.true;
        expect(fn.gt(2)(2)).to.be.false;
      });
    });

    describe('#gte', function() {
      it('should compare the given values', function () {
        expect(fn.gte(1)(2)).to.be.false;
        expect(fn.gte(2)(1)).to.be.true;
        expect(fn.gte(2)(2)).to.be.true;
      });
    });

    describe('#lt', function() {
      it('should compare the given values', function () {
        expect(fn.lt(1)(2)).to.be.true;
        expect(fn.lt(2)(1)).to.be.false;
        expect(fn.lt(2)(2)).to.be.false;
      });
    });

    describe('#lte', function() {
      it('should compare the given values', function () {
        expect(fn.lte(1)(2)).to.be.true;
        expect(fn.lte(2)(1)).to.be.false;
        expect(fn.lte(2)(2)).to.be.true;
      });
    });
  });
});
