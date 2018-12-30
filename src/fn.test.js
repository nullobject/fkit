import * as fn from '../src/fn'

describe('fn', () => {
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
