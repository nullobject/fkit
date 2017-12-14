import {assert} from 'chai'
import * as fn from '../src/fn'
import sinon from 'sinon'

describe('fn', () => {
  describe('#id', () => {
    it('returns a function that returns its argument', () => {
      const a = {}
      assert.equal(fn.id(a), a)
    })
  })

  describe('#apply', () => {
    function f () {}
    let spy

    beforeEach(() => {
      spy = sinon.spy(f)
    })

    it('applies a nullary function', () => {
      fn.apply(spy)()
      assert.isTrue(spy.calledWithExactly(undefined))
    })

    it('applies a unary function', () => {
      fn.apply(spy)(1)
      assert.isTrue(spy.calledWithExactly(1))
    })
  })

  describe('#apply2', () => {
    function f () {}
    let spy

    beforeEach(() => {
      spy = sinon.spy(f)
    })

    it('applies a nullary function', () => {
      fn.apply2(spy)()()
      assert.isTrue(spy.calledWithExactly(undefined, undefined))
    })

    it('applies a unary function', () => {
      fn.apply2(spy)(1)()
      assert.isTrue(spy.calledWithExactly(1, undefined))
    })

    it('applies a binary function', () => {
      fn.apply2(spy)(1)(2)
      assert.isTrue(spy.calledWithExactly(1, 2))
    })
  })

  describe('#apply3', () => {
    function f () {}
    let spy

    beforeEach(() => {
      spy = sinon.spy(f)
    })

    it('applies a nullary function', () => {
      fn.apply3(spy)()()()
      assert.isTrue(spy.calledWithExactly(undefined, undefined, undefined))
    })

    it('applies a unary function', () => {
      fn.apply3(spy)(1)()()
      assert.isTrue(spy.calledWithExactly(1, undefined, undefined))
    })

    it('applies a binary function', () => {
      fn.apply3(spy)(1)(2)()
      assert.isTrue(spy.calledWithExactly(1, 2, undefined))
    })

    it('applies a ternary function', () => {
      fn.apply3(spy)(1)(2)(3)
      assert.isTrue(spy.calledWithExactly(1, 2, 3))
    })
  })

  describe('#applyRight', () => {
    it('applies a nullary function', () => {
      function f () {}
      const spy = sinon.spy(f)
      fn.applyRight()(spy)
      assert.isTrue(spy.calledWithExactly(undefined))
    })

    it('applies a unary function', () => {
      function f (a) {}
      const spy = sinon.spy(f)
      fn.applyRight(1)(spy)
      assert.isTrue(spy.calledWithExactly(1))
    })
  })

  describe('#compose', () => {
    it('composes two functions', () => {
      function f (a) { return a / 2 }
      function g (a) { return a + 2 }
      const h = fn.compose(f, g)
      assert.equal(h(1), f(g(1)))
    })

    it('composes any number of functions', () => {
      function f (a) { return a / 2 }
      function g (a) { return a + 2 }
      function h (a) { return a * 2 }
      const i = fn.compose(f, g, h)
      assert.equal(i(1), f(g(h(1))))
    })
  })

  describe('#flip', () => {
    it('flips the arguments for the given function', () => {
      function f (a, b) {}
      const spy = sinon.spy(f)
      fn.flip(spy)('hello')('world')
      assert.isTrue(spy.calledWithExactly('world', 'hello'))
    })
  })

  describe('#always', () => {
    it('returns a function that returns a constant value', () => {
      const f = fn.always(1)
      assert.equal(f(), 1)
    })
  })

  describe('#curry', () => {
    it('ignores a nullary function', () => {
      const f = () => {}
      const g = fn.curry(f)
      assert.equal(f, g)
    })

    it('ignores a unary function', () => {
      const f = (a) => {}
      const g = fn.curry(f)
      assert.equal(f, g)
    })

    it('curries a binary function', () => {
      const f = (a, b) => {}
      const spy = sinon.spy(f)
      const g = fn.curry(spy)

      assert.notEqual(f, g)

      g('hello')('world')
      g('hello', 'world')

      assert.isTrue(spy.calledTwice)
      assert.isTrue(spy.calledWithExactly('hello', 'world'))
    })
  })

  describe('#uncurry', () => {
    it('uncurries a binary function', () => {
      function f (a, b) {}
      const spy = sinon.spy(f)
      const g = fn.uncurry(spy)

      assert.notEqual(f, g)
      g(['hello', 'world'])
      assert.isTrue(spy.calledWithExactly('hello', 'world'))
    })
  })

  describe('#unary', () => {
    it('returns a unary function', () => {
      const spy = sinon.spy()
      fn.unary(spy)(1, 2, 3)
      assert.isTrue(spy.calledWithExactly(1))
    })
  })

  describe('#binary', () => {
    it('returns a binary function', () => {
      const spy = sinon.spy()
      fn.binary(spy)(1, 2, 3)
      assert.isTrue(spy.calledWithExactly(1, 2))
    })
  })

  describe('#variadic', () => {
    context('with a unary function', () => {
      function f (a) {}
      let spy

      beforeEach(() => {
        spy = sinon.spy(f)
      })

      it('handles an argument', () => {
        fn.variadic(spy)(1)
        assert.isTrue(spy.calledWithExactly([1]))
      })

      it('handles a list of arguments', () => {
        fn.variadic(spy)(1, [2, 3])
        assert.isTrue(spy.calledWithExactly([1, [2, 3]]))
      })

      it('handles an array of arguments', () => {
        fn.variadic(spy)([1, [2, 3]])
        assert.isTrue(spy.calledWithExactly([1, [2, 3]]))
      })
    })

    context('with a binary function', () => {
      function f (a, b) {}
      let spy

      beforeEach(() => {
        spy = sinon.spy(f)
      })

      it('handles an argument', () => {
        fn.variadic(spy)(1)
        assert.isTrue(spy.calledWithExactly(1, []))
      })

      it('handles a list of arguments', () => {
        fn.variadic(spy)(1, 2, 3)
        assert.isTrue(spy.calledWithExactly(1, [2, 3]))
      })

      it('handles an array of arguments', () => {
        fn.variadic(spy)([1, [2, 3]])
        assert.isTrue(spy.calledWith([1, [2, 3]], []))
      })
    })
  })

  describe('#tap', () => {
    it('returns apply the given function to a value and return the value', () => {
      function f (a) {}
      const spy = sinon.spy(f)
      assert.equal(fn.tap(spy)(1), 1)
      assert.isTrue(spy.calledWithExactly(1))
    })
  })

  describe('#compare', () => {
    it('compares two numbers', () => {
      assert.equal(fn.compare(1)(2), -1)
      assert.equal(fn.compare(2)(1), 1)
      assert.equal(fn.compare(2)(2), 0)
    })

    it('compares two strings', () => {
      assert.equal(fn.compare('bar')('foo'), -1)
      assert.equal(fn.compare('foo')('bar'), 1)
      assert.equal(fn.compare('bar')('bar'), 0)
    })
  })
})
