import * as sort from '../../src/list/sort'

describe('list.sort', () => {
  describe('#sort', () => {
    it('handles an array of numbers', () => {
      expect(sort.sort([2, 3, 1])).toEqual([1, 2, 3])
    })

    it('handles a string', () => {
      expect(sort.sort('bca')).toBe('abc')
    })
  })
})
