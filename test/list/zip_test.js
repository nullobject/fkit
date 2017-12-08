var assert = require('chai').assert
var zip = require('../../src/list/zip')

describe('list.zip', function () {
  describe('#zipWith', function () {
    function f (a, b) { return a + b }

    it('should handle an empty array', function () {
      assert.deepEqual(zip.zipWith(f)([1, 2, 3])([]), [])
      assert.deepEqual(zip.zipWith(f)([])([3, 4, 5]), [])
    })

    it('should handle an empty string', function () {
      assert.deepEqual(zip.zipWith(f)('foo')(''), [])
      assert.deepEqual(zip.zipWith(f)('')('bar'), [])
    })

    it('should handle an array', function () {
      assert.deepEqual(zip.zipWith(f)([1, 2, 3])([4, 5, 6]), [5, 7, 9])
      assert.deepEqual(zip.zipWith(f)([1, 2, 3])([4, 5]), [5, 7])
      assert.deepEqual(zip.zipWith(f)([1, 2])([3, 4, 5]), [4, 6])
    })

    it('should handle a string', function () {
      assert.deepEqual(zip.zipWith(f)('foo')('bar'), ['fb', 'oa', 'or'])
      assert.deepEqual(zip.zipWith(f)('foo')('ba'), ['fb', 'oa'])
      assert.deepEqual(zip.zipWith(f)('fo')('bar'), ['fb', 'oa'])
    })
  })

  describe('#zip', function () {
    it('should handle an empty array', function () {
      assert.deepEqual(zip.zip([1, 2, 3])([]), [])
      assert.deepEqual(zip.zip([])([3, 4, 5]), [])
    })

    it('should handle an empty string', function () {
      assert.deepEqual(zip.zip('foo')(''), [])
      assert.deepEqual(zip.zip('')('bar'), [])
    })

    it('should handle an array', function () {
      assert.deepEqual(zip.zip([1, 2, 3])([4, 5, 6]), [[1, 4], [2, 5], [3, 6]])
      assert.deepEqual(zip.zip([1, 2, 3])([4, 5]), [[1, 4], [2, 5]])
      assert.deepEqual(zip.zip([1, 2])([4, 5, 6]), [[1, 4], [2, 5]])
    })

    it('should handle a string', function () {
      assert.deepEqual(zip.zip('foo')('bar'), [['f', 'b'], ['o', 'a'], ['o', 'r']])
      assert.deepEqual(zip.zip('foo')('ba'), [['f', 'b'], ['o', 'a']])
      assert.deepEqual(zip.zip('fo')('bar'), [['f', 'b'], ['o', 'a']])
    })
  })

  describe('#unzip', function () {
    it('should handle an empty array', function () {
      assert.deepEqual(zip.unzip([]), [[], []])
    })

    it('should handle an array of numbers', function () {
      assert.deepEqual(zip.unzip([[1, 4], [2, 5], [3, 6]]), [[1, 2, 3], [4, 5, 6]])
    })

    it('should handle an array of string', function () {
      assert.deepEqual(zip.unzip([['f', 'b'], ['o', 'a'], ['o', 'r']]), ['foo', 'bar'])
    })
  })
})
