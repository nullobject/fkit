const assert = require('chai').assert
const build = require('../../src/list/build')

describe('list.build', function () {
  describe('#array', function () {
    it('returns a new array', function () {
      assert.deepEqual(build.array(0), [])
      assert.deepEqual(build.array(3), [undefined, undefined, undefined])
    })
  })

  describe('#string', function () {
    it('returns a new string', function () {
      assert.equal(build.string(0), '')
      assert.equal(build.string(3), '   ')
    })
  })

  describe('#pair', function () {
    it('returns a pair of values', function () {
      assert.deepEqual(build.pair(1)(2), [1, 2])
    })
  })

  describe('#range', function () {
    it('returns an array of numbers', function () {
      assert.deepEqual(build.range(1)(3), [1, 2, 3])
      assert.deepEqual(build.range(1)(1), [1])
    })
  })

  describe('#replicate', function () {
    it('handles a number', function () {
      assert.deepEqual(build.replicate(0)(1), [])
      assert.deepEqual(build.replicate(3)(1), [1, 1, 1])
    })

    it('handles an array of numbers', function () {
      assert.deepEqual(build.replicate(0)([1]), [])
      assert.deepEqual(build.replicate(3)([1]), [[1], [1], [1]])
    })

    it('handles an array of strings', function () {
      assert.deepEqual(build.replicate(0)(['a']), [])
      assert.deepEqual(build.replicate(3)(['a']), ['a', 'a', 'a'])
    })

    it('handles a string', function () {
      assert.equal(build.replicate(0)('a'), '')
      assert.equal(build.replicate(3)('a'), 'aaa')
    })
  })

  describe('#sample', function () {
    it('handles an empty array', function () {
      assert.deepEqual(build.sample(2)([]), [])
    })

    it('handles an empty string', function () {
      assert.equal(build.sample(2)(''), '')
    })

    it('handles an array of numbers', function () {
      const result = build.sample(2)([1, 2, 3])
      assert.isArray(result)
      assert.equal(result.length, 2)
      assert.includeMembers([1, 2, 3], result)
    })

    it('handles an array of strings', function () {
      const result = build.sample(2)(['a', 'b', 'c'])
      assert.isArray(result)
      assert.equal(result.length, 2)
      assert.includeMembers(['a', 'b', 'c'], result)
    })

    it('handles a string', function () {
      const result = build.sample(2)('abc')
      assert.isString(result)
      assert.equal(result.length, 2)
      assert.includeMembers(['a', 'b', 'c'], result.split(''))
    })
  })

  describe('#shuffle', function () {
    it('handles an empty array', function () {
      assert.deepEqual(build.shuffle([]), [])
    })

    it('handles an empty string', function () {
      assert.equal(build.shuffle(''), '')
    })

    it('handles an array of numbers', function () {
      const result = build.shuffle([1, 2, 3])
      assert.isArray(result)
      assert.equal(result.length, 3)
      assert.includeMembers([1, 2, 3], result)
    })

    it('handles an array of strings', function () {
      const result = build.shuffle(['a', 'b', 'c'])
      assert.isArray(result)
      assert.equal(result.length, 3)
      assert.includeMembers(['a', 'b', 'c'], result)
    })

    it('handles a string', function () {
      const result = build.shuffle('abc')
      assert.isString(result)
      assert.equal(result.length, 3)
      assert.includeMembers(['a', 'b', 'c'], result.split(''))
    })
  })
})
