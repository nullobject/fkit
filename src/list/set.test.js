import * as set from '../../src/list/set'

describe('list.set', () => {
  describe('#cartesian', () => {
    it('handles an empty array', () => {
      expect(set.cartesian([1, 2, 3])([])).toEqual([])
      expect(set.cartesian([])([4, 5, 6])).toEqual([])
    })

    it('handles an empty string', () => {
      expect(set.cartesian('foo')('')).toEqual([])
      expect(set.cartesian('')('bar')).toEqual([])
    })

    it('handles an array', () => {
      expect(set.cartesian([1, 2, 3])([4, 5, 6])).toEqual(
        [
          [1, 4], [1, 5], [1, 6],
          [2, 4], [2, 5], [2, 6],
          [3, 4], [3, 5], [3, 6]
        ]
      )
    })

    it('handles a string', () => {
      expect(set.cartesian('foo')('bar')).toEqual(
        [
          ['f', 'b'], ['f', 'a'], ['f', 'r'],
          ['o', 'b'], ['o', 'a'], ['o', 'r'],
          ['o', 'b'], ['o', 'a'], ['o', 'r']
        ]
      )
    })
  })

  describe('#subsequences', () => {
    it('handles an empty array', () => {
      expect(set.subsequences([])).toEqual([[]])
    })

    it('handles an empty string', () => {
      expect(set.subsequences('')).toEqual([''])
    })

    it('handles an array', () => {
      expect(set.subsequences([1, 2, 3])).toEqual([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]])
    })

    it('handles a string', () => {
      expect(set.subsequences('abc')).toEqual(['', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc'])
    })
  })

  describe('#permutations', () => {
    it('handles an empty array', () => {
      expect(set.permutations([])).toEqual([[]])
    })

    it('handles an empty string', () => {
      expect(set.permutations('')).toEqual([''])
    })

    it('handles an array', () => {
      expect(set.permutations([1, 2, 3])).toEqual([[1, 2, 3], [2, 1, 3], [3, 2, 1], [2, 3, 1], [3, 1, 2], [1, 3, 2]])
    })

    it('handles a string', () => {
      expect(set.permutations('abc')).toEqual(['abc', 'bac', 'cba', 'bca', 'cab', 'acb'])
    })
  })
})
