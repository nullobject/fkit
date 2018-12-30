import compare from '../compare'
import * as fold from '../../src/list/fold'

describe('list.fold', () => {
  describe('#product', () => {
    it('handles an array of numbers', () => {
      expect(fold.product([2, 3, 4])).toBe(24)
    })
  })
})
