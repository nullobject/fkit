var assert = require('chai').assert
var map = require('../../src/list/map')

describe('list.map', function () {
  describe('#map', function () {
    it('should handle an array', function () {
      function f (a) { return [a + 1] }
      assert.deepEqual(map.map(f)([1, 2, 3]), [[2], [3], [4]])
    })

    it('should handle a string', function () {
      function f (a) { return a.toUpperCase() }
      assert.deepEqual(map.map(f)('foo'), ['F', 'O', 'O'])
    })
  })

  describe('#reverse', function () {
    it('should handle an array', function () {
      assert.deepEqual(map.reverse([1, 2, 3]), [3, 2, 1])
    })

    it('should handle a string', function () {
      assert.equal(map.reverse('foo'), 'oof')
    })
  })

  describe('#intersperse', function () {
    it('should handle an array', function () {
      assert.deepEqual(map.intersperse(4)([]), [])
      assert.deepEqual(map.intersperse(4)([1, 2, 3]), [1, 4, 2, 4, 3])
      assert.deepEqual(map.intersperse(null)([1, 2, 3]), [1, null, 2, null, 3])
    })

    it('should handle a string', function () {
      assert.equal(map.intersperse('-')(''), '')
      assert.equal(map.intersperse('-')('foo'), 'f-o-o')
      assert.equal(map.intersperse('')('foo'), 'foo')
    })
  })
})
