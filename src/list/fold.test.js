import compare from '../compare'
import * as fold from '../../src/list/fold'

describe('list.fold', () => {
  describe('#maximum', () => {
    it('handles an array of numbers', () => {
      expect(fold.maximum([1, 2, 3])).toBe(3)
    })

    it('handles a string', () => {
      expect(fold.maximum('foo')).toBe('o')
    })
  })

  describe('#minimum', () => {
    it('handles an array of numbers', () => {
      expect(fold.minimum([1, 2, 3])).toBe(1)
    })

    it('handles a string', () => {
      expect(fold.minimum('foo')).toBe('f')
    })
  })

  describe('#minimumBy', () => {
    it('handles an array of numbers', () => {
      expect(fold.minimumBy(compare)([1, 2, 3])).toBe(1)
    })

    it('handles a string', () => {
      expect(fold.minimumBy(compare)('foo')).toBe('f')
    })
  })

  describe('#sum', () => {
    it('handles an array of numbers', () => {
      expect(fold.sum([1, 2, 3])).toBe(6)
    })
  })

  describe('#product', () => {
    it('handles an array of numbers', () => {
      expect(fold.product([2, 3, 4])).toBe(24)
    })
  })
})
