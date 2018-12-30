import * as fn from '../src/fn'

describe('fn', () => {
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
