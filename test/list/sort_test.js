'use strict'

var assert = require('chai').assert
var sort = require('../../src/list/sort')

describe('list.sort', function () {
  describe('#sort', function () {
    it('should handle an array of numbers', function () {
      assert.deepEqual(sort.sort([2, 3, 1]), [1, 2, 3])
    })

    it('should handle a string', function () {
      assert.equal(sort.sort('bca'), 'abc')
    })
  })

  describe('#sortBy', function () {
    function c (a, b) {
      if (a < b) {
        return 1
      } else if (a > b) {
        return -1
      } else {
        return 0
      }
    }

    it('should handle an array of numbers', function () {
      assert.deepEqual(sort.sortBy(c)([2, 3, 1]), [3, 2, 1])
    })

    it('should handle a string', function () {
      assert.equal(sort.sortBy(c)('bca'), 'cba')
    })
  })
})
