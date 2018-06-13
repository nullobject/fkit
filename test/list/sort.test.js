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

  describe('#sortBy', () => {
    const c = (a, b) => {
      if (a < b) {
        return 1
      } else if (a > b) {
        return -1
      } else {
        return 0
      }
    }

    it('handles an array of numbers', () => {
      expect(sort.sortBy(c)([2, 3, 1])).toEqual([3, 2, 1])
    })

    it('handles a string', () => {
      expect(sort.sortBy(c)('bca')).toBe('cba')
    })
  })
})
