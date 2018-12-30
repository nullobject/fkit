import * as math from '../src/math'

describe('math', () => {
  describe('#eq', () => {
    it('compares the values', () => {
      const a = {}
      const b = {}

      expect(math.eq(1)(2)).toBe(false)
      expect(math.eq(2)(2)).toBe(true)

      expect(math.eq('lorem')('ipsum')).toBe(false)
      expect(math.eq('lorem')('lorem')).toBe(true)

      expect(math.eq(a)(b)).toBe(false)
      expect(math.eq(a)(a)).toBe(true)
    })
  })

  describe('#neq', () => {
    it('compares the values', () => {
      const a = {}
      const b = {}

      expect(math.neq(1)(2)).toBe(true)
      expect(math.neq(2)(2)).toBe(false)

      expect(math.neq('lorem')('ipsum')).toBe(true)
      expect(math.neq('lorem')('lorem')).toBe(false)

      expect(math.neq(a)(b)).toBe(true)
      expect(math.neq(a)(a)).toBe(false)
    })
  })

  describe('#gt', () => {
    it('compares the values', () => {
      expect(math.gt(1)(2)).toBe(true)
      expect(math.gt(2)(1)).toBe(false)
      expect(math.gt(2)(2)).toBe(false)
    })
  })

  describe('#gte', () => {
    it('compares the values', () => {
      expect(math.gte(1)(2)).toBe(true)
      expect(math.gte(2)(1)).toBe(false)
      expect(math.gte(2)(2)).toBe(true)
    })
  })

  describe('#lt', () => {
    it('compares the values', () => {
      expect(math.lt(1)(2)).toBe(false)
      expect(math.lt(2)(1)).toBe(true)
      expect(math.lt(2)(2)).toBe(false)
    })
  })

  describe('#lte', () => {
    it('compares the values', () => {
      expect(math.lte(1)(2)).toBe(false)
      expect(math.lte(2)(1)).toBe(true)
      expect(math.lte(2)(2)).toBe(true)
    })
  })

  describe('#even', () => {
    it('tests whether a value is even', () => {
      expect(math.even(1)).toBe(false)
      expect(math.even(2)).toBe(true)
      expect(math.even(3)).toBe(false)
    })
  })

  describe('#odd', () => {
    it('tests whether a value is odd', () => {
      expect(math.odd(1)).toBe(true)
      expect(math.odd(2)).toBe(false)
      expect(math.odd(3)).toBe(true)
    })
  })

  describe('#inc', () => {
    it('increments the value', () => {
      expect(math.inc(1)).toEqual(2)
      expect(math.inc(2)).toEqual(3)
    })
  })

  describe('#dec', () => {
    it('decrements the value', () => {
      expect(math.dec(3)).toEqual(2)
      expect(math.dec(2)).toEqual(1)
    })
  })

  describe('#randomInt', () => {
    it('returns a random integer', () => {
      const n = math.randomInt(1)(3)
      expect(n).toBeGreaterThanOrEqual(1)
      expect(n).toBeLessThanOrEqual(3)
    })
  })

  describe('#randomFloat', () => {
    it('returns a random float', () => {
      const n = math.randomFloat(1)(3)
      expect(n).toBeGreaterThanOrEqual(1)
      expect(n).toBeLessThanOrEqual(3)
    })
  })
})
