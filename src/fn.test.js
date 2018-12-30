import * as fn from '../src/fn'

describe('fn', () => {
  describe('#apply', () => {
    function f () {}
    let spy

    beforeEach(() => {
      spy = jest.fn(f)
    })

    it('applies a nullary function', () => {
      fn.apply(spy)()
      expect(spy).toHaveBeenCalledWith(undefined)
    })

    it('applies a unary function', () => {
      fn.apply(spy)(1)
      expect(spy).toHaveBeenCalledWith(1)
    })
  })

  describe('#apply2', () => {
    function f () {}
    let spy

    beforeEach(() => {
      spy = jest.fn(f)
    })

    it('applies a nullary function', () => {
      fn.apply2(spy)()()
      expect(spy).toHaveBeenCalledWith(undefined, undefined)
    })

    it('applies a unary function', () => {
      fn.apply2(spy)(1)()
      expect(spy).toHaveBeenCalledWith(1, undefined)
    })

    it('applies a binary function', () => {
      fn.apply2(spy)(1)(2)
      expect(spy).toHaveBeenCalledWith(1, 2)
    })
  })

  describe('#apply3', () => {
    function f () {}
    let spy

    beforeEach(() => {
      spy = jest.fn(f)
    })

    it('applies a nullary function', () => {
      fn.apply3(spy)()()()
      expect(spy).toHaveBeenCalledWith(undefined, undefined, undefined)
    })

    it('applies a unary function', () => {
      fn.apply3(spy)(1)()()
      expect(spy).toHaveBeenCalledWith(1, undefined, undefined)
    })

    it('applies a binary function', () => {
      fn.apply3(spy)(1)(2)()
      expect(spy).toHaveBeenCalledWith(1, 2, undefined)
    })

    it('applies a ternary function', () => {
      fn.apply3(spy)(1)(2)(3)
      expect(spy).toHaveBeenCalledWith(1, 2, 3)
    })
  })

  describe('#applyRight', () => {
    it('applies a nullary function', () => {
      function f () {}
      const spy = jest.fn(f)
      fn.applyRight()(spy)
      expect(spy).toHaveBeenCalledWith(undefined)
    })

    it('applies a unary function', () => {
      function f (a) {}
      const spy = jest.fn(f)
      fn.applyRight(1)(spy)
      expect(spy).toHaveBeenCalledWith(1)
    })
  })

  describe('#compose', () => {
    it('composes two functions', () => {
      function f (a) { return a / 2 }
      function g (a) { return a + 2 }
      const h = fn.compose(f, g)
      expect(h(1)).toEqual(f(g(1)))
    })

    it('composes any number of functions', () => {
      function f (a) { return a / 2 }
      function g (a) { return a + 2 }
      function h (a) { return a * 2 }
      const i = fn.compose(f, g, h)
      expect(i(1)).toEqual(f(g(h(1))))
    })
  })

  describe('#flip', () => {
    it('flips the arguments for the given function', () => {
      function f (a, b) {}
      const spy = jest.fn(f)
      fn.flip(spy)('hello')('world')
      expect(spy).toHaveBeenCalledWith('world', 'hello')
    })
  })

  describe('#always', () => {
    it('returns a function that returns a constant value', () => {
      const f = fn.always(1)
      expect(f()).toBe(1)
    })
  })

  describe('#uncurry', () => {
    it('uncurries a binary function', () => {
      function f (a, b) {}
      const spy = jest.fn(f)
      const g = fn.uncurry(spy)

      expect(f).not.toEqual(g)
      g(['hello', 'world'])
      expect(spy).toHaveBeenCalledWith('hello', 'world')
    })
  })

  describe('#unary', () => {
    it('returns a unary function', () => {
      const spy = jest.fn()
      fn.unary(spy)(1, 2, 3)
      expect(spy).toHaveBeenCalledWith(1)
    })
  })

  describe('#binary', () => {
    it('returns a binary function', () => {
      const spy = jest.fn()
      fn.binary(spy)(1, 2, 3)
      expect(spy).toHaveBeenCalledWith(1, 2)
    })
  })

  describe('#variadic', () => {
    describe('with a unary function', () => {
      function f (a) {}
      let spy

      beforeEach(() => {
        spy = jest.fn(f)
      })

      it('handles an argument', () => {
        fn.variadic(spy)(1)
        expect(spy).toHaveBeenCalledWith([1])
      })

      it('handles a list of arguments', () => {
        fn.variadic(spy)(1, [2, 3])
        expect(spy).toHaveBeenCalledWith([1, [2, 3]])
      })

      it('handles an array of arguments', () => {
        fn.variadic(spy)([1, [2, 3]])
        expect(spy).toHaveBeenCalledWith([1, [2, 3]])
      })
    })

    describe('with a binary function', () => {
      function f (a, b) {}
      let spy

      beforeEach(() => {
        spy = jest.fn(f)
      })

      it('handles an argument', () => {
        fn.variadic(spy)(1)
        expect(spy).toHaveBeenCalledWith(1, [])
      })

      it('handles a list of arguments', () => {
        fn.variadic(spy)(1, 2, 3)
        expect(spy).toHaveBeenCalledWith(1, [2, 3])
      })

      it('handles an array of arguments', () => {
        fn.variadic(spy)([1, [2, 3]])
        expect(spy).toHaveBeenCalledWith([1, [2, 3]], [])
      })
    })
  })

  describe('#tap', () => {
    it('returns apply the given function to a value and return the value', () => {
      function f (a) {}
      const spy = jest.fn(f)
      expect(fn.tap(spy)(1)).toBe(1)
      expect(spy).toHaveBeenCalledWith(1)
    })
  })

  describe('#compare', () => {
    it('compares two numbers', () => {
      expect(fn.compare(1)(2)).toBe(-1)
      expect(fn.compare(2)(1)).toBe(1)
      expect(fn.compare(2)(2)).toBe(0)
    })

    it('compares two strings', () => {
      expect(fn.compare('bar')('foo')).toBe(-1)
      expect(fn.compare('foo')('bar')).toBe(1)
      expect(fn.compare('bar')('bar')).toBe(0)
    })
  })
})
