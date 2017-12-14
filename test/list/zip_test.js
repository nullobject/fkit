import {assert} from 'chai'
import * as zip from '../../src/list/zip'

describe('list.zip', () => {
  describe('#zipWith', () => {
    const f = (a, b) => a + b

    it('handles an empty array', () => {
      assert.deepEqual(zip.zipWith(f)([1, 2, 3])([]), [])
      assert.deepEqual(zip.zipWith(f)([])([3, 4, 5]), [])
    })

    it('handles an empty string', () => {
      assert.deepEqual(zip.zipWith(f)('foo')(''), [])
      assert.deepEqual(zip.zipWith(f)('')('bar'), [])
    })

    it('handles an array', () => {
      assert.deepEqual(zip.zipWith(f)([1, 2, 3])([4, 5, 6]), [5, 7, 9])
      assert.deepEqual(zip.zipWith(f)([1, 2, 3])([4, 5]), [5, 7])
      assert.deepEqual(zip.zipWith(f)([1, 2])([3, 4, 5]), [4, 6])
    })

    it('handles a string', () => {
      assert.deepEqual(zip.zipWith(f)('foo')('bar'), ['fb', 'oa', 'or'])
      assert.deepEqual(zip.zipWith(f)('foo')('ba'), ['fb', 'oa'])
      assert.deepEqual(zip.zipWith(f)('fo')('bar'), ['fb', 'oa'])
    })
  })

  describe('#zip', () => {
    it('handles an empty array', () => {
      assert.deepEqual(zip.zip([1, 2, 3])([]), [])
      assert.deepEqual(zip.zip([])([3, 4, 5]), [])
    })

    it('handles an empty string', () => {
      assert.deepEqual(zip.zip('foo')(''), [])
      assert.deepEqual(zip.zip('')('bar'), [])
    })

    it('handles an array', () => {
      assert.deepEqual(zip.zip([1, 2, 3])([4, 5, 6]), [[1, 4], [2, 5], [3, 6]])
      assert.deepEqual(zip.zip([1, 2, 3])([4, 5]), [[1, 4], [2, 5]])
      assert.deepEqual(zip.zip([1, 2])([4, 5, 6]), [[1, 4], [2, 5]])
    })

    it('handles a string', () => {
      assert.deepEqual(zip.zip('foo')('bar'), [['f', 'b'], ['o', 'a'], ['o', 'r']])
      assert.deepEqual(zip.zip('foo')('ba'), [['f', 'b'], ['o', 'a']])
      assert.deepEqual(zip.zip('fo')('bar'), [['f', 'b'], ['o', 'a']])
    })
  })

  describe('#unzip', () => {
    it('handles an empty array', () => {
      assert.deepEqual(zip.unzip([]), [[], []])
    })

    it('handles an array of numbers', () => {
      assert.deepEqual(zip.unzip([[1, 4], [2, 5], [3, 6]]), [[1, 2, 3], [4, 5, 6]])
    })

    it('handles an array of string', () => {
      assert.deepEqual(zip.unzip([['f', 'b'], ['o', 'a'], ['o', 'r']]), ['foo', 'bar'])
    })
  })
})
