import * as set from '../../src/list/set'

describe('list.set', () => {
  describe('#intersectBy', () => {
    const f = (a, b) => a === b

    it('handles an empty array', () => {
      expect(set.intersectBy(f)([1, 2, 3])([])).toEqual([])
      expect(set.intersectBy(f)([])([1, 2, 3])).toEqual([])
    })

    it('handles an empty string', () => {
      expect(set.intersectBy(f)('abc')('')).toBe('')
      expect(set.intersectBy(f)('')('abc')).toBe('')
    })

    it('handles an array', () => {
      expect(set.intersectBy(f)([1, 2, 3])([1, 2, 3])).toEqual([1, 2, 3])
      expect(set.intersectBy(f)([1, 2, 3])([2, 3, 4])).toEqual([2, 3])
      expect(set.intersectBy(f)([1, 2, 3])([4, 5, 6])).toEqual([])
      expect(set.intersectBy(f)([1, 1])([1])).toEqual([1, 1])
    })

    it('handles a string', () => {
      expect(set.intersectBy(f)('abc')('abc')).toBe('abc')
      expect(set.intersectBy(f)('abc')('bcd')).toBe('bc')
      expect(set.intersectBy(f)('abc')('def')).toBe('')
      expect(set.intersectBy(f)('aa')('a')).toBe('aa')
    })
  })

  describe('#intersect', () => {
    it('handles an empty array', () => {
      expect(set.intersect([1, 2, 3])([])).toEqual([])
      expect(set.intersect([])([1, 2, 3])).toEqual([])
    })

    it('handles an empty string', () => {
      expect(set.intersect('abc')('')).toBe('')
      expect(set.intersect('')('abc')).toBe('')
    })

    it('handles an array', () => {
      expect(set.intersect([1, 2, 3])([1, 2, 3])).toEqual([1, 2, 3])
      expect(set.intersect([1, 2, 3])([2, 3, 4])).toEqual([2, 3])
      expect(set.intersect([1, 2, 3])([4, 5, 6])).toEqual([])
      expect(set.intersect([1, 1])([1])).toEqual([1, 1])
    })

    it('handles a string', () => {
      expect(set.intersect('abc')('abc')).toBe('abc')
      expect(set.intersect('abc')('bcd')).toBe('bc')
      expect(set.intersect('abc')('def')).toBe('')
      expect(set.intersect('aa')('a')).toBe('aa')
    })
  })

  describe('#differenceBy', () => {
    const f = (a, b) => a === b

    it('handles an empty array', () => {
      expect(set.differenceBy(f)([1, 2, 3])([])).toEqual([1, 2, 3])
      expect(set.differenceBy(f)([])([1, 2, 3])).toEqual([])
    })

    it('handles an empty string', () => {
      expect(set.differenceBy(f)('abc')('')).toBe('abc')
      expect(set.differenceBy(f)('')('abc')).toBe('')
    })

    it('handles an array', () => {
      expect(set.differenceBy(f)([1, 2, 3])([1, 2, 3])).toEqual([])
      expect(set.differenceBy(f)([1, 2, 3])([2, 3, 4])).toEqual([1])
      expect(set.differenceBy(f)([1, 2, 3])([4, 5, 6])).toEqual([1, 2, 3])
      expect(set.differenceBy(f)([1, 1])([1])).toEqual([1])
    })

    it('handles a string', () => {
      expect(set.differenceBy(f)('abc')('abc')).toBe('')
      expect(set.differenceBy(f)('abc')('bcd')).toBe('a')
      expect(set.differenceBy(f)('abc')('def')).toBe('abc')
      expect(set.differenceBy(f)('aa')('a')).toBe('a')
    })
  })

  describe('#difference', () => {
    it('handles an empty array', () => {
      expect(set.difference([1, 2, 3])([])).toEqual([1, 2, 3])
      expect(set.difference([])([1, 2, 3])).toEqual([])
    })

    it('handles an empty string', () => {
      expect(set.difference('abc')('')).toBe('abc')
      expect(set.difference('')('abc')).toBe('')
    })

    it('handles an array', () => {
      expect(set.difference([1, 2, 3])([1, 2, 3])).toEqual([])
      expect(set.difference([1, 2, 3])([2, 3, 4])).toEqual([1])
      expect(set.difference([1, 2, 3])([4, 5, 6])).toEqual([1, 2, 3])
      expect(set.difference([1, 1])([1])).toEqual([1])
    })

    it('handles a string', () => {
      expect(set.difference('abc')('abc')).toBe('')
      expect(set.difference('abc')('bcd')).toBe('a')
      expect(set.difference('abc')('def')).toBe('abc')
      expect(set.difference('aa')('a')).toBe('a')
    })
  })

  describe('#removeBy', () => {
    const f = (a, b) => a === b

    it('handles an empty array', () => {
      expect(set.removeBy(f, 1)([])).toEqual([])
    })

    it('handles an empty string', () => {
      expect(set.removeBy(f, 'a')('')).toBe('')
    })

    it('handles an array', () => {
      expect(set.removeBy(f, 1)([1, 2, 3])).toEqual([2, 3])
      expect(set.removeBy(f, 2)([1, 2, 3])).toEqual([1, 3])
      expect(set.removeBy(f, 3)([1, 2, 3])).toEqual([1, 2])
      expect(set.removeBy(f, 1)([1, 1])).toEqual([1])
    })

    it('handles a string', () => {
      expect(set.removeBy(f, 'a')('abc')).toBe('bc')
      expect(set.removeBy(f, 'b')('abc')).toBe('ac')
      expect(set.removeBy(f, 'c')('abc')).toBe('ab')
      expect(set.removeBy(f, 'a')('aa')).toBe('a')
    })
  })

  describe('#remove', () => {
    it('handles an empty array', () => {
      expect(set.remove(1)([])).toEqual([])
    })

    it('handles an empty string', () => {
      expect(set.remove('a')('')).toBe('')
    })

    it('handles an array', () => {
      expect(set.remove(1)([1, 2, 3])).toEqual([2, 3])
      expect(set.remove(2)([1, 2, 3])).toEqual([1, 3])
      expect(set.remove(3)([1, 2, 3])).toEqual([1, 2])
      expect(set.remove(1)([1, 1])).toEqual([1])
    })

    it('handles a string', () => {
      expect(set.remove('a')('abc')).toBe('bc')
      expect(set.remove('b')('abc')).toBe('ac')
      expect(set.remove('c')('abc')).toBe('ab')
      expect(set.remove('a')('aa')).toBe('a')
    })
  })

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
