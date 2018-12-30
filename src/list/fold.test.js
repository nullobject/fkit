import compare from '../compare'
import * as fold from '../../src/list/fold'

describe('list.fold', () => {
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
