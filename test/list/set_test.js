import {assert} from 'chai'
import * as set from '../../src/list/set'

describe('list.set', () => {
  describe('#nubBy', () => {
    const f = (a, b) => a === b

    it('handles an empty array', () => {
      assert.deepEqual(set.nubBy(f, []), [])
    })

    it('handles an empty string', () => {
      assert.equal(set.nubBy(f, ''), '')
    })

    it('handles an array', () => {
      assert.deepEqual(set.nubBy(f, [1, 2, 2, 3, 3, 3]), [1, 2, 3])
    })

    it('handles a string', () => {
      assert.equal(set.nubBy(f, 'abbccc'), 'abc')
    })
  })

  describe('#nub', () => {
    it('handles an empty array', () => {
      assert.deepEqual(set.nub([]), [])
    })

    it('handles an empty string', () => {
      assert.equal(set.nub(''), '')
    })

    it('handles an array', () => {
      assert.deepEqual(set.nub([1, 2, 2, 3, 3, 3]), [1, 2, 3])
    })

    it('handles a string', () => {
      assert.equal(set.nub('abbccc'), 'abc')
    })
  })

  describe('#unionBy', () => {
    const f = (a, b) => a === b

    it('handles an empty array', () => {
      assert.deepEqual(set.unionBy(f)([1, 2, 3])([]), [1, 2, 3])
      assert.deepEqual(set.unionBy(f)([])([1, 2, 3]), [1, 2, 3])
    })

    it('handles an empty string', () => {
      assert.equal(set.unionBy(f)('abc')(''), 'abc')
      assert.equal(set.unionBy(f)('')('abc'), 'abc')
    })

    it('handles an array', () => {
      assert.deepEqual(set.unionBy(f)([1, 2, 3])([1, 2, 3]), [1, 2, 3])
      assert.deepEqual(set.unionBy(f)([1, 2, 3])([2, 3, 4]), [1, 2, 3, 4])
      assert.deepEqual(set.unionBy(f)([1, 2, 3])([4, 5, 6]), [1, 2, 3, 4, 5, 6])
      assert.deepEqual(set.unionBy(f)([1, 1])([1]), [1, 1])
    })

    it('handles a string', () => {
      assert.equal(set.unionBy(f)('abc')('abc'), 'abc')
      assert.equal(set.unionBy(f)('abc')('bcd'), 'abcd')
      assert.equal(set.unionBy(f)('abc')('def'), 'abcdef')
      assert.equal(set.unionBy(f)('aa')('a'), 'aa')
    })
  })

  describe('#union', () => {
    it('handles an empty array', () => {
      assert.deepEqual(set.union([1, 2, 3])([]), [1, 2, 3])
      assert.deepEqual(set.union([])([1, 2, 3]), [1, 2, 3])
    })

    it('handles an empty string', () => {
      assert.equal(set.union('abc')(''), 'abc')
      assert.equal(set.union('')('abc'), 'abc')
    })

    it('handles an array', () => {
      assert.deepEqual(set.union([1, 2, 3])([1, 2, 3]), [1, 2, 3])
      assert.deepEqual(set.union([1, 2, 3])([2, 3, 4]), [1, 2, 3, 4])
      assert.deepEqual(set.union([1, 2, 3])([4, 5, 6]), [1, 2, 3, 4, 5, 6])
      assert.deepEqual(set.union([1, 1])([1]), [1, 1])
    })

    it('handles a string', () => {
      assert.equal(set.union('abc')('abc'), 'abc')
      assert.equal(set.union('abc')('bcd'), 'abcd')
      assert.equal(set.union('abc')('def'), 'abcdef')
      assert.equal(set.union('aa')('a'), 'aa')
    })
  })

  describe('#intersectBy', () => {
    const f = (a, b) => a === b

    it('handles an empty array', () => {
      assert.deepEqual(set.intersectBy(f)([1, 2, 3])([]), [])
      assert.deepEqual(set.intersectBy(f)([])([1, 2, 3]), [])
    })

    it('handles an empty string', () => {
      assert.equal(set.intersectBy(f)('abc')(''), '')
      assert.equal(set.intersectBy(f)('')('abc'), '')
    })

    it('handles an array', () => {
      assert.deepEqual(set.intersectBy(f)([1, 2, 3])([1, 2, 3]), [1, 2, 3])
      assert.deepEqual(set.intersectBy(f)([1, 2, 3])([2, 3, 4]), [2, 3])
      assert.deepEqual(set.intersectBy(f)([1, 2, 3])([4, 5, 6]), [])
      assert.deepEqual(set.intersectBy(f)([1, 1])([1]), [1, 1])
    })

    it('handles a string', () => {
      assert.equal(set.intersectBy(f)('abc')('abc'), 'abc')
      assert.equal(set.intersectBy(f)('abc')('bcd'), 'bc')
      assert.equal(set.intersectBy(f)('abc')('def'), '')
      assert.equal(set.intersectBy(f)('aa')('a'), 'aa')
    })
  })

  describe('#intersect', () => {
    it('handles an empty array', () => {
      assert.deepEqual(set.intersect([1, 2, 3])([]), [])
      assert.deepEqual(set.intersect([])([1, 2, 3]), [])
    })

    it('handles an empty string', () => {
      assert.equal(set.intersect('abc')(''), '')
      assert.equal(set.intersect('')('abc'), '')
    })

    it('handles an array', () => {
      assert.deepEqual(set.intersect([1, 2, 3])([1, 2, 3]), [1, 2, 3])
      assert.deepEqual(set.intersect([1, 2, 3])([2, 3, 4]), [2, 3])
      assert.deepEqual(set.intersect([1, 2, 3])([4, 5, 6]), [])
      assert.deepEqual(set.intersect([1, 1])([1]), [1, 1])
    })

    it('handles a string', () => {
      assert.equal(set.intersect('abc')('abc'), 'abc')
      assert.equal(set.intersect('abc')('bcd'), 'bc')
      assert.equal(set.intersect('abc')('def'), '')
      assert.equal(set.intersect('aa')('a'), 'aa')
    })
  })

  describe('#differenceBy', () => {
    const f = (a, b) => a === b

    it('handles an empty array', () => {
      assert.deepEqual(set.differenceBy(f)([1, 2, 3])([]), [1, 2, 3])
      assert.deepEqual(set.differenceBy(f)([])([1, 2, 3]), [])
    })

    it('handles an empty string', () => {
      assert.equal(set.differenceBy(f)('abc')(''), 'abc')
      assert.equal(set.differenceBy(f)('')('abc'), '')
    })

    it('handles an array', () => {
      assert.deepEqual(set.differenceBy(f)([1, 2, 3])([1, 2, 3]), [])
      assert.deepEqual(set.differenceBy(f)([1, 2, 3])([2, 3, 4]), [1])
      assert.deepEqual(set.differenceBy(f)([1, 2, 3])([4, 5, 6]), [1, 2, 3])
      assert.deepEqual(set.differenceBy(f)([1, 1])([1]), [1])
    })

    it('handles a string', () => {
      assert.equal(set.differenceBy(f)('abc')('abc'), '')
      assert.equal(set.differenceBy(f)('abc')('bcd'), 'a')
      assert.equal(set.differenceBy(f)('abc')('def'), 'abc')
      assert.equal(set.differenceBy(f)('aa')('a'), 'a')
    })
  })

  describe('#difference', () => {
    it('handles an empty array', () => {
      assert.deepEqual(set.difference([1, 2, 3])([]), [1, 2, 3])
      assert.deepEqual(set.difference([])([1, 2, 3]), [])
    })

    it('handles an empty string', () => {
      assert.equal(set.difference('abc')(''), 'abc')
      assert.equal(set.difference('')('abc'), '')
    })

    it('handles an array', () => {
      assert.deepEqual(set.difference([1, 2, 3])([1, 2, 3]), [])
      assert.deepEqual(set.difference([1, 2, 3])([2, 3, 4]), [1])
      assert.deepEqual(set.difference([1, 2, 3])([4, 5, 6]), [1, 2, 3])
      assert.deepEqual(set.difference([1, 1])([1]), [1])
    })

    it('handles a string', () => {
      assert.equal(set.difference('abc')('abc'), '')
      assert.equal(set.difference('abc')('bcd'), 'a')
      assert.equal(set.difference('abc')('def'), 'abc')
      assert.equal(set.difference('aa')('a'), 'a')
    })
  })

  describe('#removeBy', () => {
    const f = (a, b) => a === b

    it('handles an empty array', () => {
      assert.deepEqual(set.removeBy(f, 1)([]), [])
    })

    it('handles an empty string', () => {
      assert.equal(set.removeBy(f, 'a')(''), '')
    })

    it('handles an array', () => {
      assert.deepEqual(set.removeBy(f, 1)([1, 2, 3]), [2, 3])
      assert.deepEqual(set.removeBy(f, 2)([1, 2, 3]), [1, 3])
      assert.deepEqual(set.removeBy(f, 3)([1, 2, 3]), [1, 2])
      assert.deepEqual(set.removeBy(f, 1)([1, 1]), [1])
    })

    it('handles a string', () => {
      assert.equal(set.removeBy(f, 'a')('abc'), 'bc')
      assert.equal(set.removeBy(f, 'b')('abc'), 'ac')
      assert.equal(set.removeBy(f, 'c')('abc'), 'ab')
      assert.equal(set.removeBy(f, 'a')('aa'), 'a')
    })
  })

  describe('#remove', () => {
    it('handles an empty array', () => {
      assert.deepEqual(set.remove(1)([]), [])
    })

    it('handles an empty string', () => {
      assert.equal(set.remove('a')(''), '')
    })

    it('handles an array', () => {
      assert.deepEqual(set.remove(1)([1, 2, 3]), [2, 3])
      assert.deepEqual(set.remove(2)([1, 2, 3]), [1, 3])
      assert.deepEqual(set.remove(3)([1, 2, 3]), [1, 2])
      assert.deepEqual(set.remove(1)([1, 1]), [1])
    })

    it('handles a string', () => {
      assert.equal(set.remove('a')('abc'), 'bc')
      assert.equal(set.remove('b')('abc'), 'ac')
      assert.equal(set.remove('c')('abc'), 'ab')
      assert.equal(set.remove('a')('aa'), 'a')
    })
  })

  describe('#cartesian', () => {
    it('handles an empty array', () => {
      assert.deepEqual(set.cartesian([1, 2, 3])([]), [])
      assert.deepEqual(set.cartesian([])([4, 5, 6]), [])
    })

    it('handles an empty string', () => {
      assert.deepEqual(set.cartesian('foo')(''), [])
      assert.deepEqual(set.cartesian('')('bar'), [])
    })

    it('handles an array', () => {
      assert.deepEqual(
        set.cartesian([1, 2, 3])([4, 5, 6]),
        [
          [1, 4], [1, 5], [1, 6],
          [2, 4], [2, 5], [2, 6],
          [3, 4], [3, 5], [3, 6]
        ]
      )
    })

    it('handles a string', () => {
      assert.deepEqual(
        set.cartesian('foo')('bar'),
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
      assert.deepEqual(set.subsequences([]), [[]])
    })

    it('handles an empty string', () => {
      assert.deepEqual(set.subsequences(''), [''])
    })

    it('handles an array', () => {
      assert.deepEqual(set.subsequences([1, 2, 3]), [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]])
    })

    it('handles a string', () => {
      assert.deepEqual(set.subsequences('abc'), ['', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc'])
    })
  })

  describe('#permutations', () => {
    it('handles an empty array', () => {
      assert.deepEqual(set.permutations([]), [[]])
    })

    it('handles an empty string', () => {
      assert.deepEqual(set.permutations(''), [''])
    })

    it('handles an array', () => {
      assert.deepEqual(set.permutations([1, 2, 3]), [[1, 2, 3], [2, 1, 3], [3, 2, 1], [2, 3, 1], [3, 1, 2], [1, 3, 2]])
    })

    it('handles a string', () => {
      assert.deepEqual(set.permutations('abc'), ['abc', 'bac', 'cba', 'bca', 'cab', 'acb'])
    })
  })
})
