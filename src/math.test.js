import * as math from '../src/math'

describe('math', () => {
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
