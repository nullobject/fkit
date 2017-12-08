var assert = require('chai').assert
var sublist = require('../../src/list/sublist')

describe('list.sublist', function () {
  describe('#take', function () {
    it('should handle an empty array', function () {
      assert.deepEqual(sublist.take(2)([]), [])
    })

    it('should handle an empty string', function () {
      assert.equal(sublist.take(2)(''), '')
    })

    it('should handle an array', function () {
      assert.deepEqual(sublist.take(2)([1, 2, 3]), [1, 2])
    })

    it('should handle an array of strings', function () {
      assert.deepEqual(sublist.take(2)(['f', 'o', 'o']), ['f', 'o'])
    })

    it('should handle a string', function () {
      assert.equal(sublist.take(2)('foo'), 'fo')
    })
  })

  describe('#drop', function () {
    it('should handle an empty array', function () {
      assert.deepEqual(sublist.drop(2)([]), [])
    })

    it('should handle an empty string', function () {
      assert.equal(sublist.drop(2)(''), '')
    })

    it('should handle an array', function () {
      assert.deepEqual(sublist.drop(2)([1, 2, 3]), [3])
    })

    it('should handle an array of strings', function () {
      assert.deepEqual(sublist.drop(2)(['f', 'o', 'o']), ['o'])
    })

    it('should handle a string', function () {
      assert.equal(sublist.drop(2)('foo'), 'o')
    })
  })

  describe('#takeWhile', function () {
    function p (a) { return a < 3 }
    function q (a) { return a !== 'o' }

    it('should handle an empty array', function () {
      assert.deepEqual(sublist.takeWhile(p)([]), [])
    })

    it('should handle an empty string', function () {
      assert.equal(sublist.takeWhile(q)(''), '')
    })

    it('should handle an array', function () {
      assert.deepEqual(sublist.takeWhile(p)([1, 2, 3]), [1, 2])
    })

    it('should handle an array of strings', function () {
      assert.deepEqual(sublist.takeWhile(q)(['f', 'o', 'o']), ['f'])
    })

    it('should handle a string', function () {
      assert.equal(sublist.takeWhile(q)('foo'), 'f')
    })
  })

  describe('#dropWhile', function () {
    function p (a) { return a < 3 }
    function q (a) { return a !== 'o' }

    it('should handle an empty array', function () {
      assert.deepEqual(sublist.dropWhile(p)([]), [])
    })

    it('should handle an empty string', function () {
      assert.equal(sublist.dropWhile(q)(''), '')
    })

    it('should handle an array', function () {
      assert.deepEqual(sublist.dropWhile(p)([1, 2, 3]), [3])
    })

    it('should handle an array of strings', function () {
      assert.deepEqual(sublist.dropWhile(q)(['f', 'o', 'o']), ['o', 'o'])
    })

    it('should handle a string', function () {
      assert.equal(sublist.dropWhile(q)('foo'), 'oo')
    })
  })

  describe('#splitAt', function () {
    it('should handle an empty array', function () {
      assert.deepEqual(sublist.splitAt(1)([]), [[], []])
    })

    it('should handle an empty string', function () {
      assert.deepEqual(sublist.splitAt(1)(''), ['', ''])
    })

    it('should handle an array', function () {
      assert.deepEqual(sublist.splitAt(1)([1, 2, 3]), [[1], [2, 3]])
    })

    it('should handle a string', function () {
      assert.deepEqual(sublist.splitAt(1)('foo'), ['f', 'oo'])
    })
  })

  describe('#span', function () {
    function p (a) { return a < 3 }
    function q (a) { return a !== 'o' }

    it('should handle an empty array', function () {
      assert.deepEqual(sublist.span(p)([]), [[], []])
    })

    it('should handle an empty string', function () {
      assert.deepEqual(sublist.span(q)(''), ['', ''])
    })

    it('should handle an array', function () {
      assert.deepEqual(sublist.span(p)([1, 2, 3]), [[1, 2], [3]])
    })

    it('should handle a string', function () {
      assert.deepEqual(sublist.span(q)('foo'), ['f', 'oo'])
    })
  })

  describe('#group', function () {
    it('should handle an empty array', function () {
      assert.deepEqual(sublist.group([]), [])
    })

    it('should handle an empty string', function () {
      assert.deepEqual(sublist.group(''), [])
    })

    it('should handle an array', function () {
      assert.deepEqual(sublist.group([1, 2, 2, 3, 3, 3]), [[1], [2, 2], [3, 3, 3]])
    })

    it('should handle a string', function () {
      assert.deepEqual(sublist.group('Mississippi'), ['M', 'i', 'ss', 'i', 'ss', 'i', 'pp', 'i'])
    })
  })
})
