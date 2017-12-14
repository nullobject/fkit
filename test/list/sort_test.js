import {assert} from 'chai'
import * as sort from '../../src/list/sort'

describe('list.sort', () => {
  describe('#sort', () => {
    it('handles an array of numbers', () => {
      assert.deepEqual(sort.sort([2, 3, 1]), [1, 2, 3])
    })

    it('handles a string', () => {
      assert.equal(sort.sort('bca'), 'abc')
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
      assert.deepEqual(sort.sortBy(c)([2, 3, 1]), [3, 2, 1])
    })

    it('handles a string', () => {
      assert.equal(sort.sortBy(c)('bca'), 'cba')
    })
  })
})
