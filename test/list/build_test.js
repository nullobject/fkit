import {assert} from 'chai'
import * as build from '../../src/list/build'

describe('list.build', () => {
  describe('#array', () => {
    it('returns a new array', () => {
      assert.deepEqual(build.array(0), [])
      assert.deepEqual(build.array(3), [undefined, undefined, undefined])
    })
  })

  describe('#string', () => {
    it('returns a new string', () => {
      assert.equal(build.string(0), '')
      assert.equal(build.string(3), '   ')
    })
  })

  describe('#pair', () => {
    it('returns a pair of values', () => {
      assert.deepEqual(build.pair(1)(2), [1, 2])
    })
  })

  describe('#range', () => {
    it('returns an array of numbers', () => {
      assert.deepEqual(build.range(1)(3), [1, 2, 3])
      assert.deepEqual(build.range(1)(1), [1])
    })
  })

  describe('#replicate', () => {
    it('handles a number', () => {
      assert.deepEqual(build.replicate(0)(1), [])
      assert.deepEqual(build.replicate(3)(1), [1, 1, 1])
    })

    it('handles an array of numbers', () => {
      assert.deepEqual(build.replicate(0)([1]), [])
      assert.deepEqual(build.replicate(3)([1]), [[1], [1], [1]])
    })

    it('handles an array of strings', () => {
      assert.deepEqual(build.replicate(0)(['a']), [])
      assert.deepEqual(build.replicate(3)(['a']), ['a', 'a', 'a'])
    })

    it('handles a string', () => {
      assert.equal(build.replicate(0)('a'), '')
      assert.equal(build.replicate(3)('a'), 'aaa')
    })
  })

  describe('#sample', () => {
    it('handles an empty array', () => {
      assert.deepEqual(build.sample(2)([]), [])
    })

    it('handles an empty string', () => {
      assert.equal(build.sample(2)(''), '')
    })

    it('handles an array of numbers', () => {
      const result = build.sample(2)([1, 2, 3])
      assert.isArray(result)
      assert.equal(result.length, 2)
      assert.includeMembers([1, 2, 3], result)
    })

    it('handles an array of strings', () => {
      const result = build.sample(2)(['a', 'b', 'c'])
      assert.isArray(result)
      assert.equal(result.length, 2)
      assert.includeMembers(['a', 'b', 'c'], result)
    })

    it('handles a string', () => {
      const result = build.sample(2)('abc')
      assert.isString(result)
      assert.equal(result.length, 2)
      assert.includeMembers(['a', 'b', 'c'], result.split(''))
    })
  })

  describe('#shuffle', () => {
    it('handles an empty array', () => {
      assert.deepEqual(build.shuffle([]), [])
    })

    it('handles an empty string', () => {
      assert.equal(build.shuffle(''), '')
    })

    it('handles an array of numbers', () => {
      const result = build.shuffle([1, 2, 3])
      assert.isArray(result)
      assert.equal(result.length, 3)
      assert.includeMembers([1, 2, 3], result)
    })

    it('handles an array of strings', () => {
      const result = build.shuffle(['a', 'b', 'c'])
      assert.isArray(result)
      assert.equal(result.length, 3)
      assert.includeMembers(['a', 'b', 'c'], result)
    })

    it('handles a string', () => {
      const result = build.shuffle('abc')
      assert.isString(result)
      assert.equal(result.length, 3)
      assert.includeMembers(['a', 'b', 'c'], result.split(''))
    })
  })
})
