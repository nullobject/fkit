import * as base from '../../src/list/base'

describe('list.base', () => {
  describe('#tails', () => {
    it('handles an empty array', () => {
      expect(base.tails([])).toEqual([[]])
    })

    it('handles an empty string', () => {
      expect(base.tails('')).toEqual([''])
    })

    it('handles an array', () => {
      expect(base.tails([1, 2, 3])).toEqual([[1, 2, 3], [2, 3], [3], []])
    })

    it('handles a string', () => {
      expect(base.tails('foo')).toEqual(['foo', 'oo', 'o', ''])
    })
  })
})
