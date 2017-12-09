const assert = require('chai').assert
const set = require('../../src/list/set')

describe('list.set', function () {
  describe('#nub', function () {
    it('handles an empty array', function () {
      assert.deepEqual(set.nub([]), [])
    })

    it('handles an empty string', function () {
      assert.equal(set.nub(''), '')
    })

    it('handles an array', function () {
      assert.deepEqual(set.nub([1, 2, 2, 3, 3, 3]), [1, 2, 3])
    })

    it('handles a string', function () {
      assert.equal(set.nub('abbccc'), 'abc')
    })
  })

  describe('#union', function () {
    it('handles an empty array', function () {
      assert.deepEqual(set.union([1, 2, 3])([]), [1, 2, 3])
      assert.deepEqual(set.union([])([1, 2, 3]), [1, 2, 3])
    })

    it('handles an empty string', function () {
      assert.equal(set.union('abc')(''), 'abc')
      assert.equal(set.union('')('abc'), 'abc')
    })

    it('handles an array', function () {
      assert.deepEqual(set.union([1, 2, 3])([1, 2, 3]), [1, 2, 3])
      assert.deepEqual(set.union([1, 2, 3])([2, 3, 4]), [1, 2, 3, 4])
      assert.deepEqual(set.union([1, 2, 3])([4, 5, 6]), [1, 2, 3, 4, 5, 6])
      assert.deepEqual(set.union([1, 1])([1]), [1, 1])
    })

    it('handles a string', function () {
      assert.equal(set.union('abc')('abc'), 'abc')
      assert.equal(set.union('abc')('bcd'), 'abcd')
      assert.equal(set.union('abc')('def'), 'abcdef')
      assert.equal(set.union('aa')('a'), 'aa')
    })
  })

  describe('#intersect', function () {
    it('handles an empty array', function () {
      assert.deepEqual(set.intersect([1, 2, 3])([]), [])
      assert.deepEqual(set.intersect([])([1, 2, 3]), [])
    })

    it('handles an empty string', function () {
      assert.equal(set.intersect('abc')(''), '')
      assert.equal(set.intersect('')('abc'), '')
    })

    it('handles an array', function () {
      assert.deepEqual(set.intersect([1, 2, 3])([1, 2, 3]), [1, 2, 3])
      assert.deepEqual(set.intersect([1, 2, 3])([2, 3, 4]), [2, 3])
      assert.deepEqual(set.intersect([1, 2, 3])([4, 5, 6]), [])
      assert.deepEqual(set.intersect([1, 1])([1]), [1, 1])
    })

    it('handles a string', function () {
      assert.equal(set.intersect('abc')('abc'), 'abc')
      assert.equal(set.intersect('abc')('bcd'), 'bc')
      assert.equal(set.intersect('abc')('def'), '')
      assert.equal(set.intersect('aa')('a'), 'aa')
    })
  })

  describe('#difference', function () {
    it('handles an empty array', function () {
      assert.deepEqual(set.difference([1, 2, 3])([]), [1, 2, 3])
      assert.deepEqual(set.difference([])([1, 2, 3]), [])
    })

    it('handles an empty string', function () {
      assert.equal(set.difference('abc')(''), 'abc')
      assert.equal(set.difference('')('abc'), '')
    })

    it('handles an array', function () {
      assert.deepEqual(set.difference([1, 2, 3])([1, 2, 3]), [])
      assert.deepEqual(set.difference([1, 2, 3])([2, 3, 4]), [1])
      assert.deepEqual(set.difference([1, 2, 3])([4, 5, 6]), [1, 2, 3])
      assert.deepEqual(set.difference([1, 1])([1]), [1])
    })

    it('handles a string', function () {
      assert.equal(set.difference('abc')('abc'), '')
      assert.equal(set.difference('abc')('bcd'), 'a')
      assert.equal(set.difference('abc')('def'), 'abc')
      assert.equal(set.difference('aa')('a'), 'a')
    })
  })

  describe('#remove', function () {
    it('handles an empty array', function () {
      assert.deepEqual(set.remove(1)([]), [])
    })

    it('handles an empty string', function () {
      assert.equal(set.remove('a')(''), '')
    })

    it('handles an array', function () {
      assert.deepEqual(set.remove(1)([1, 2, 3]), [2, 3])
      assert.deepEqual(set.remove(2)([1, 2, 3]), [1, 3])
      assert.deepEqual(set.remove(3)([1, 2, 3]), [1, 2])
      assert.deepEqual(set.remove(1)([1, 1]), [1])
    })

    it('handles a string', function () {
      assert.equal(set.remove('a')('abc'), 'bc')
      assert.equal(set.remove('b')('abc'), 'ac')
      assert.equal(set.remove('c')('abc'), 'ab')
      assert.equal(set.remove('a')('aa'), 'a')
    })
  })

  describe('#cartesian', function () {
    it('handles an empty array', function () {
      assert.deepEqual(set.cartesian([1, 2, 3])([]), [])
      assert.deepEqual(set.cartesian([])([4, 5, 6]), [])
    })

    it('handles an empty string', function () {
      assert.deepEqual(set.cartesian('foo')(''), [])
      assert.deepEqual(set.cartesian('')('bar'), [])
    })

    it('handles an array', function () {
      assert.deepEqual(
        set.cartesian([1, 2, 3])([4, 5, 6]),
        [
          [1, 4], [1, 5], [1, 6],
          [2, 4], [2, 5], [2, 6],
          [3, 4], [3, 5], [3, 6]
        ]
      )
    })

    it('handles a string', function () {
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

  describe('#subsequences', function () {
    it('handles an empty array', function () {
      assert.deepEqual(set.subsequences([]), [[]])
    })

    it('handles an empty string', function () {
      assert.deepEqual(set.subsequences(''), [''])
    })

    it('handles an array', function () {
      assert.deepEqual(set.subsequences([1, 2, 3]), [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]])
    })

    it('handles a string', function () {
      assert.deepEqual(set.subsequences('abc'), ['', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc'])
    })
  })

  describe('#permutations', function () {
    it('handles an empty array', function () {
      assert.deepEqual(set.permutations([]), [[]])
    })

    it('handles an empty string', function () {
      assert.deepEqual(set.permutations(''), [''])
    })

    it('handles an array', function () {
      assert.deepEqual(set.permutations([1, 2, 3]), [[1, 2, 3], [2, 1, 3], [3, 2, 1], [2, 3, 1], [3, 1, 2], [1, 3, 2]])
    })

    it('handles a string', function () {
      assert.deepEqual(set.permutations('abc'), ['abc', 'bac', 'cba', 'bca', 'cab', 'acb'])
    })
  })
})
