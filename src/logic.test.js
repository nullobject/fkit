import * as logic from '../src/logic'

describe('logic', () => {
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
