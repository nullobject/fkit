import * as logic from '../src/logic'

describe('logic', () => {
  describe('#not', () => {
    it('NOTs the value', () => {
      expect(logic.not(false)).toBe(true)
      expect(logic.not(true)).toBe(false)
    })
  })

  describe('#branch', () => {
    const f = jest.fn()
    const g = jest.fn()
    const a = {}

    it('returns f(a) if p(a) is true', () => {
      const p = jest.fn(() => true)
      logic.branch(p, f, g, a)
      expect(p).toHaveBeenCalledWith(a)
      expect(f).toHaveBeenCalledWith(a)
    })

    it('returns g(a) if p(a) is false', () => {
      const p = jest.fn(() => false)
      logic.branch(p, f, g, a)
      expect(p).toHaveBeenCalledWith(a)
      expect(g).toHaveBeenCalledWith(a)
    })
  })

  describe('#whereAll', () => {
    it('applies the list of predicate functions', () => {
      function f (a) { return a >= 1 }
      function g (a) { return a >= 2 }
      function h (a) { return a >= 3 }
      expect(logic.whereAll([f, g, h])(0)).toBe(false)
      expect(logic.whereAll([f, g, h])(1)).toBe(false)
      expect(logic.whereAll([f, g, h])(2)).toBe(false)
      expect(logic.whereAll([f, g, h])(3)).toBe(true)
      expect(logic.whereAll([f, g, h])(4)).toBe(true)
    })
  })

  describe('#whereAny', () => {
    it('applies the list of predicate functions', () => {
      function f (a) { return a >= 1 }
      function g (a) { return a >= 2 }
      function h (a) { return a >= 3 }
      expect(logic.whereAny([f, g, h])(0)).toBe(false)
      expect(logic.whereAny([f, g, h])(1)).toBe(true)
      expect(logic.whereAny([f, g, h])(2)).toBe(true)
      expect(logic.whereAny([f, g, h])(3)).toBe(true)
      expect(logic.whereAny([f, g, h])(4)).toBe(true)
    })
  })
})
