const assert = require('chai').assert
const fn = require('../src/fn')
const sinon = require('sinon')

describe('fn', function () {
  describe('#id', function () {
    it('returns a function that returns its argument', function () {
      const a = {}
      assert.equal(fn.id(a), a)
    })
  })

  describe('#apply', function () {
    function f () {}
    let spy

    beforeEach(function () {
      spy = sinon.spy(f)
    })

    it('applys a nullary function', function () {
      fn.apply(spy)()
      assert.isTrue(spy.calledWithExactly(undefined))
    })

    it('applys a unary function', function () {
      fn.apply(spy)(1)
      assert.isTrue(spy.calledWithExactly(1))
    })
  })

  describe('#apply2', function () {
    function f () {}
    let spy

    beforeEach(function () {
      spy = sinon.spy(f)
    })

    it('applys a nullary function', function () {
      fn.apply2(spy)()()
      assert.isTrue(spy.calledWithExactly(undefined, undefined))
    })

    it('applys a unary function', function () {
      fn.apply2(spy)(1)()
      assert.isTrue(spy.calledWithExactly(1, undefined))
    })

    it('applys a binary function', function () {
      fn.apply2(spy)(1)(2)
      assert.isTrue(spy.calledWithExactly(1, 2))
    })
  })

  describe('#apply3', function () {
    function f () {}
    let spy

    beforeEach(function () {
      spy = sinon.spy(f)
    })

    it('applys a nullary function', function () {
      fn.apply3(spy)()()()
      assert.isTrue(spy.calledWithExactly(undefined, undefined, undefined))
    })

    it('applys a unary function', function () {
      fn.apply3(spy)(1)()()
      assert.isTrue(spy.calledWithExactly(1, undefined, undefined))
    })

    it('applys a binary function', function () {
      fn.apply3(spy)(1)(2)()
      assert.isTrue(spy.calledWithExactly(1, 2, undefined))
    })

    it('applys a ternary function', function () {
      fn.apply3(spy)(1)(2)(3)
      assert.isTrue(spy.calledWithExactly(1, 2, 3))
    })
  })

  describe('#applyRight', function () {
    it('applys a nullary function', function () {
      function f () {}
      const spy = sinon.spy(f)
      fn.applyRight()(spy)
      assert.isTrue(spy.calledWithExactly(undefined))
    })

    it('applys a unary function', function () {
      function f (a) {}
      const spy = sinon.spy(f)
      fn.applyRight(1)(spy)
      assert.isTrue(spy.calledWithExactly(1))
    })
  })

  describe('#compose', function () {
    it('composes two functions', function () {
      function f (a) { return a / 2 }
      function g (a) { return a + 2 }
      const h = fn.compose(f, g)
      assert.equal(h(1), f(g(1)))
    })

    it('composes any number of functions', function () {
      function f (a) { return a / 2 }
      function g (a) { return a + 2 }
      function h (a) { return a * 2 }
      const i = fn.compose(f, g, h)
      assert.equal(i(1), f(g(h(1))))
    })
  })

  describe('#flip', function () {
    it('flips the arguments for the given function', function () {
      function f (a, b) {}
      const spy = sinon.spy(f)
      fn.flip(spy)('hello')('world')
      assert.isTrue(spy.calledWithExactly('world', 'hello'))
    })
  })

  describe('#const', function () {
    it('returns a function that returns a constant value', function () {
      const f = fn.const(1)
      assert.equal(f(), 1)
    })
  })

  describe('#curry', function () {
    it('nots curry a nullary function', function () {
      function f () {}
      const g = fn.curry(f)
      assert.equal(f, g)
    })

    it('nots curry a unary function', function () {
      function f (a) {}
      const g = fn.curry(f)
      assert.equal(f, g)
    })

    it('currys a binary function', function () {
      function f (a, b) {}
      const spy = sinon.spy(f)
      const g = fn.curry(spy)

      assert.notEqual(f, g)
      g('hello')('world')
      assert.isTrue(spy.calledWithExactly('hello', 'world'))
    })
  })

  describe('#uncurry', function () {
    it('uncurrys a binary function', function () {
      function f (a, b) {}
      const spy = sinon.spy(f)
      const g = fn.uncurry(spy)

      assert.notEqual(f, g)
      g(['hello', 'world'])
      assert.isTrue(spy.calledWithExactly('hello', 'world'))
    })
  })

  describe('#unary', function () {
    it('returns a unary function', function () {
      const spy = sinon.spy()
      fn.unary(spy)(1, 2, 3)
      assert.isTrue(spy.calledWithExactly(1))
    })
  })

  describe('#binary', function () {
    it('returns a binary function', function () {
      const spy = sinon.spy()
      fn.binary(spy)(1, 2, 3)
      assert.isTrue(spy.calledWithExactly(1, 2))
    })
  })

  describe('#variadic', function () {
    context('with a unary function', function () {
      function f (a) {}
      let spy

      beforeEach(function () {
        spy = sinon.spy(f)
      })

      it('handles an argument', function () {
        fn.variadic(spy)(1)
        assert.isTrue(spy.calledWithExactly([1]))
      })

      it('handles a list of arguments', function () {
        fn.variadic(spy)(1, [2, 3])
        assert.isTrue(spy.calledWithExactly([1, [2, 3]]))
      })

      it('handles an array of arguments', function () {
        fn.variadic(spy)([1, [2, 3]])
        assert.isTrue(spy.calledWithExactly([1, [2, 3]]))
      })
    })

    context('with a binary function', function () {
      function f (a, b) {}
      let spy

      beforeEach(function () {
        spy = sinon.spy(f)
      })

      it('handles an argument', function () {
        fn.variadic(spy)(1)
        assert.isTrue(spy.calledWithExactly(1, []))
      })

      it('handles a list of arguments', function () {
        fn.variadic(spy)(1, 2, 3)
        assert.isTrue(spy.calledWithExactly(1, [2, 3]))
      })

      it('handles an array of arguments', function () {
        fn.variadic(spy)([1, [2, 3]])
        assert.isTrue(spy.calledWith([1, [2, 3]], []))
      })
    })
  })

  describe('#tap', function () {
    it('returns apply the given function to a value and return the value', function () {
      function f (a) {}
      const spy = sinon.spy(f)
      assert.equal(fn.tap(spy)(1), 1)
      assert.isTrue(spy.calledWithExactly(1))
    })
  })

  describe('#compare', function () {
    it('compares two numbers', function () {
      assert.equal(fn.compare(1)(2), -1)
      assert.equal(fn.compare(2)(1), 1)
      assert.equal(fn.compare(2)(2), 0)
    })

    it('compares two strings', function () {
      assert.equal(fn.compare('bar')('foo'), -1)
      assert.equal(fn.compare('foo')('bar'), 1)
      assert.equal(fn.compare('bar')('bar'), 0)
    })
  })
})
