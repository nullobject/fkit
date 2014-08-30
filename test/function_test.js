'use strict';

var fn = require('../src/function');

describe('function', function() {
  describe('#identity', function() {
    it('should return a function that returns its argument', function() {
      expect(fn.identity(1)).to.equal(1);
    });
  });

  describe('#apply', function() {
    it('should apply the given function', function() {
      function f(a) { return a + 1; }
      expect(fn.apply(f)(1)).to.equal(f(1));
    });
  });

  describe('#applyRight', function() {
    it('should apply the given function', function() {
      function f(a) { return a + 1; }
      expect(fn.applyRight(1)(f)).to.equal(f(1));
    });
  });

  describe('#compose', function() {
    it('should compose the given functions', function() {
      function f(a) { return a / 2; }
      function g(a) { return a + 2; }
      var h = fn.compose(f)(g);
      expect(h(1)).to.equal(f(g(1)));
    });
  });

  describe('#flip', function() {
    it('should flip the arguments to the given function', function() {
      function f(a, b) {}
      var spy = sinon.spy(f);
      fn.flip(spy)('hello', 'world');
      expect(spy.calledWithExactly('world', 'hello')).to.be.true;
    });
  });

  describe('#const', function() {
    it('should return a function that returns a constant value', function() {
      var f = fn.const(1);
      expect(f()).to.equal(1);
    });
  });

  describe('#curry', function() {
    it('should curry the given function', function() {
      function f(a, b) {}
      var spy = sinon.spy(f);
      fn.curry(spy)('hello')('world');
      expect(spy.calledWithExactly('hello', 'world')).to.be.true;
    });
  });

  describe('#unary', function() {
    it('should return a function that accepts only one argument', function() {
      var spy = sinon.spy();
      fn.unary(spy)(1, 2, 3);
      expect(spy.calledWithExactly(1)).to.be.true;
    });
  });

  describe('#binary', function() {
    it('should return a function that accepts only two arguments', function() {
      var spy = sinon.spy();
      fn.binary(spy)(1, 2, 3);
      expect(spy.calledWithExactly(1, 2)).to.be.true;
    });
  });

  describe('#variadic', function() {
    it('should return a function that accepts any number of arguments', function() {
      function f(a, b) {}
      var spy = sinon.spy(f);
      fn.variadic(spy)(1, 2, 3);
      expect(spy.calledWithExactly(1, [2, 3])).to.be.true;
    });
  });

  describe('#add', function() {
    it('should add the given values', function() {
      expect(fn.add(1)(2)).to.equal(3);
    });
  });

  describe('#sub', function() {
    it('should subtract the given values', function() {
      expect(fn.sub(1)(2)).to.equal(-1);
    });
  });

  describe('#mul', function() {
    it('should multiply the given values', function() {
      expect(fn.mul(1)(2)).to.equal(2);
    });
  });

  describe('#div', function() {
    it('should divide the given values', function() {
      expect(fn.div(1)(2)).to.equal(0.5);
    });
  });

  describe('#max', function() {
    it('should compare the given values', function() {
      expect(fn.max(1)(2)).to.equal(2);
      expect(fn.max(2)(1)).to.equal(2);
    });
  });

  describe('#min', function() {
    it('should compare the given values', function() {
      expect(fn.min(1)(2)).to.equal(1);
      expect(fn.min(2)(1)).to.equal(1);
    });
  });

  describe('#and', function() {
    it('should AND the given values', function() {
      expect(fn.and(false)(false)).to.be.false;
      expect(fn.and(false)(true)).to.be.false;
      expect(fn.and(true)(false)).to.be.false;
      expect(fn.and(true)(true)).to.be.true;
    });
  });

  describe('#or', function() {
    it('should OR the given values', function() {
      expect(fn.or(false)(false)).to.be.false;
      expect(fn.or(false)(true)).to.be.true;
      expect(fn.or(true)(false)).to.be.true;
      expect(fn.or(true)(true)).to.be.true;
    });
  });

  describe('#eql', function() {
    it('should compare the given values', function() {
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
    it('should compare the given values', function() {
      expect(fn.gt(1)(2)).to.be.false;
      expect(fn.gt(2)(1)).to.be.true;
      expect(fn.gt(2)(2)).to.be.false;
    });
  });

  describe('#gte', function() {
    it('should compare the given values', function() {
      expect(fn.gte(1)(2)).to.be.false;
      expect(fn.gte(2)(1)).to.be.true;
      expect(fn.gte(2)(2)).to.be.true;
    });
  });

  describe('#lt', function() {
    it('should compare the given values', function() {
      expect(fn.lt(1)(2)).to.be.true;
      expect(fn.lt(2)(1)).to.be.false;
      expect(fn.lt(2)(2)).to.be.false;
    });
  });

  describe('#lte', function() {
    it('should compare the given values', function() {
      expect(fn.lte(1)(2)).to.be.true;
      expect(fn.lte(2)(1)).to.be.false;
      expect(fn.lte(2)(2)).to.be.true;
    });
  });

  describe('#inc', function() {
    it('should increment the given value', function() {
      expect(fn.inc(1)).to.equal(2);
      expect(fn.inc(2)).to.equal(3);
    });
  });

  describe('#dec', function() {
    it('should decrement the given value', function() {
      expect(fn.dec(3)).to.equal(2);
      expect(fn.dec(2)).to.equal(1);
    });
  });

  describe('#range', function() {
    it('should return an array of numbers', function() {
      expect(fn.range(1)(3)).to.eql([1, 2, 3]);
      expect(fn.range(3)(1)).to.eql([3, 2, 1]);
      expect(fn.range(1)(1)).to.eql([1]);
    });
  });
});
