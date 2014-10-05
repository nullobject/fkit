'use strict';

var fn = require('../src/fn');

describe('fn', function() {
  describe('#id', function() {
    it('should return a function that returns its argument', function() {
      expect(fn.id(1)).to.equal(1);
    });
  });

  describe('#apply', function() {
    function f() {}
    var spy;

    beforeEach(function() {
      spy = sinon.spy(f);
    });

    it('should apply a nullary function', function() {
      fn.apply(spy)();
      expect(spy.calledWithExactly(undefined)).to.be.true;
    });

    it('should apply a unary function', function() {
      fn.apply(spy)(1);
      expect(spy.calledWithExactly(1)).to.be.true;
    });
  });

  describe('#apply2', function() {
    function f() {}
    var spy;

    beforeEach(function() {
      spy = sinon.spy(f);
    });

    it('should apply a nullary function', function() {
      fn.apply2(spy)()();
      expect(spy.calledWithExactly(undefined, undefined)).to.be.true;
    });

    it('should apply a unary function', function() {
      fn.apply2(spy)(1)();
      expect(spy.calledWithExactly(1, undefined)).to.be.true;
    });

    it('should apply a binary function', function() {
      fn.apply2(spy)(1)(2);
      expect(spy.calledWithExactly(1, 2)).to.be.true;
    });
  });

  describe('#apply3', function() {
    function f() {}
    var spy;

    beforeEach(function() {
      spy = sinon.spy(f);
    });

    it('should apply a nullary function', function() {
      fn.apply3(spy)()()();
      expect(spy.calledWithExactly(undefined, undefined, undefined)).to.be.true;
    });

    it('should apply a unary function', function() {
      fn.apply3(spy)(1)()();
      expect(spy.calledWithExactly(1, undefined, undefined)).to.be.true;
    });

    it('should apply a binary function', function() {
      fn.apply3(spy)(1)(2)();
      expect(spy.calledWithExactly(1, 2, undefined)).to.be.true;
    });

    it('should apply a ternary function', function() {
      fn.apply3(spy)(1)(2)(3);
      expect(spy.calledWithExactly(1, 2, 3)).to.be.true;
    });
  });

  describe('#applyRight', function() {
    it('should apply a nullary function', function() {
      function f() {}
      var spy = sinon.spy(f);
      fn.applyRight()(spy);
      expect(spy.calledWithExactly(undefined)).to.be.true;
    });

    it('should apply a unary function', function() {
      function f(a) {}
      var spy = sinon.spy(f);
      fn.applyRight(1)(spy);
      expect(spy.calledWithExactly(1)).to.be.true;
    });
  });

  describe('#compose', function() {
    it('should compose two functions', function() {
      function f(a) { return a / 2; }
      function g(a) { return a + 2; }
      var h = fn.compose(f, g);
      expect(h(1)).to.equal(f(g(1)));
    });

    it('should compose any number of functions', function() {
      function f(a) { return a / 2; }
      function g(a) { return a + 2; }
      function h(a) { return a * 2; }
      var i = fn.compose(f, g, h);
      expect(i(1)).to.equal(f(g(h(1))));
    });
  });

  describe('#flip', function() {
    it('should flip the arguments for the given function', function() {
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
    it('should not curry a nullary function', function() {
      function f() {}
      var g = fn.curry(f);
      expect(f).to.equal(g);
    });

    it('should not curry a unary function', function() {
      function f(a) {}
      var g = fn.curry(f);
      expect(f).to.equal(g);
    });

    it('should curry a binary function', function() {
      function f(a, b) {}
      var spy = sinon.spy(f);
      var g = fn.curry(spy);

      expect(f).to.not.equal(g);
      g('hello')('world');
      expect(spy.calledWithExactly('hello', 'world')).to.be.true;
    });
  });

  describe('#uncurry', function() {
    it('should uncurry a binary function', function() {
      function f(a, b) {}
      var spy = sinon.spy(f);
      var g = fn.uncurry(spy);

      expect(f).to.not.equal(g);
      g(['hello', 'world']);
      expect(spy.calledWithExactly('hello', 'world')).to.be.true;
    });
  });

  describe('#unary', function() {
    it('should return a unary function', function() {
      var spy = sinon.spy();
      fn.unary(spy)(1, 2, 3);
      expect(spy.calledWithExactly(1)).to.be.true;
    });
  });

  describe('#binary', function() {
    it('should return a binary function', function() {
      var spy = sinon.spy();
      fn.binary(spy)(1, 2, 3);
      expect(spy.calledWithExactly(1, 2)).to.be.true;
    });
  });

  describe('#variadic', function() {
    context('with a unary function', function() {
      function f(a) {}
      var spy;

      beforeEach(function() {
        spy = sinon.spy(f);
      });

      it('should handle an argument', function() {
        fn.variadic(spy)(1);
        expect(spy.calledWithExactly([1])).to.be.true;
      });

      it('should handle a list of arguments', function() {
        fn.variadic(spy)(1, [2, 3]);
        expect(spy.calledWithExactly([1, [2, 3]])).to.be.true;
      });

      it('should handle an array of arguments', function() {
        fn.variadic(spy)([1, [2, 3]]);
        expect(spy.calledWithExactly([1, [2, 3]])).to.be.true;
      });
    });

    context('with a binary function', function() {
      function f(a, b) {}
      var spy;

      beforeEach(function() {
        spy = sinon.spy(f);
      });

      it('should handle an argument', function() {
        fn.variadic(spy)(1);
        expect(spy.calledWithExactly(1, [])).to.be.true;
      });

      it('should handle a list of arguments', function() {
        fn.variadic(spy)(1, 2, 3);
        expect(spy.calledWithExactly(1, [2, 3])).to.be.true;
      });

      it('should handle an array of arguments', function() {
        fn.variadic(spy)([1, [2, 3]]);
        expect(spy.calledWith([1, [2, 3]], [])).to.be.true;
      });
    });
  });

  describe('#tap', function() {
    it('should return apply the given function to a value and return the value', function() {
      function f(a) {}
      var spy = sinon.spy(f);
      expect(fn.tap(spy)(1)).to.be.equal(1);
      expect(spy.calledWithExactly(1)).to.be.true;
    });
  });

  describe('#compare', function() {
    it('should compare two numbers', function() {
      expect(fn.compare(1)(2)).to.be.equal(-1);
      expect(fn.compare(2)(1)).to.be.equal(1);
      expect(fn.compare(2)(2)).to.be.equal(0);
    });

    it('should compare two strings', function() {
      expect(fn.compare('bar')('foo')).to.be.equal(-1);
      expect(fn.compare('foo')('bar')).to.be.equal(1);
      expect(fn.compare('bar')('bar')).to.be.equal(0);
    });
  });
});
