'use strict';

var fn = require('../src/fn');

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
});

