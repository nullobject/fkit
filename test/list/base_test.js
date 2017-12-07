'use strict'

var assert = require('chai').assert
var base = require('../../src/list/base')

describe('list.base', function () {
  describe('#isArrayOfStrings', function () {
    it('should handle an empty array', function () {
      assert.isFalse(base.isArrayOfStrings([]))
    })

    it('should handle an empty string', function () {
      assert.isFalse(base.isArrayOfStrings(''))
    })

    it('should handle an array of numbers', function () {
      assert.isFalse(base.isArrayOfStrings([1, 2, 3]))
      assert.isFalse(base.isArrayOfStrings([1, [2, 3]]))
    })

    it('should handle an array of strings', function () {
      assert.isTrue(base.isArrayOfStrings(['a', 'b', 'c']))
      assert.isFalse(base.isArrayOfStrings(['a', ['b', 'c']]))
    })
  })

  describe('#length', function () {
    it('should handle an empty array', function () {
      assert.equal(base.length([]), 0)
    })

    it('should handle an empty string', function () {
      assert.equal(base.length(''), 0)
    })

    it('should handle an array', function () {
      assert.equal(base.length([1, 2, 3]), 3)
    })

    it('should handle a string', function () {
      assert.equal(base.length('foo'), 3)
    })
  })

  describe('#empty', function () {
    it('should handle an empty array', function () {
      assert.isTrue(base.empty([]))
    })

    it('should handle an empty string', function () {
      assert.isTrue(base.empty(''))
    })

    it('should handle an array', function () {
      assert.isFalse(base.empty([1, 2, 3]))
    })

    it('should handle a string', function () {
      assert.isFalse(base.empty('foo'))
    })
  })

  describe('#append', function () {
    it('should handle an empty array', function () {
      assert.deepEqual(base.append(4)([]), [4])
    })

    it('should handle an empty string', function () {
      assert.equal(base.append('bar')(''), 'bar')
    })

    it('should handle an array', function () {
      assert.deepEqual(base.append(4)([1, 2, 3]), [1, 2, 3, 4])
      assert.deepEqual(base.append([4, 5, 6])([[1], [2, 3]]), [[1], [2, 3], [4, 5, 6]])
    })

    it('should handle a string', function () {
      assert.equal(base.append('bar')('foo'), 'foobar')
      assert.deepEqual(base.append('bar')(['f', 'oo']), ['f', 'oo', 'bar'])
    })
  })

  describe('#prepend', function () {
    it('should handle an empty array', function () {
      assert.deepEqual(base.prepend(1)([]), [1])
    })

    it('should handle an empty string', function () {
      assert.equal(base.prepend('foo')(''), 'foo')
    })

    it('should handle an array', function () {
      assert.deepEqual(base.prepend(1)([2, 3, 4]), [1, 2, 3, 4])
      assert.deepEqual(base.prepend([1])([[2, 3], [4, 5, 6]]), [[1], [2, 3], [4, 5, 6]])
    })

    it('should handle a string', function () {
      assert.equal(base.prepend('foo')('bar'), 'foobar')
      assert.deepEqual(base.prepend('f')(['oo', 'bar']), ['f', 'oo', 'bar'])
    })
  })

  describe('#surround', function () {
    it('should handle an empty array', function () {
      assert.deepEqual(base.surround(1)(4)([]), [1, 4])
    })

    it('should handle an empty string', function () {
      assert.equal(base.surround('fo')('ar')(''), 'foar')
    })

    it('should handle an array', function () {
      assert.deepEqual(base.surround(1)(4)([2, 3]), [1, 2, 3, 4])
    })

    it('should handle a string', function () {
      assert.equal(base.surround('fo')('ar')('ob'), 'foobar')
    })
  })

  describe('#head', function () {
    it('should handle an empty array', function () {
      assert.isUndefined(base.head([]))
    })

    it('should handle an empty string', function () {
      assert.isUndefined(base.head(''))
    })

    it('should handle an array', function () {
      assert.equal(base.head([1, 2, 3]), 1)
    })

    it('should handle a string', function () {
      assert.equal(base.head('foo'), 'f')
    })
  })

  describe('#last', function () {
    it('should handle an empty array', function () {
      assert.isUndefined(base.last([]))
    })

    it('should handle an empty string', function () {
      assert.isUndefined(base.last(''))
    })

    it('should handle an array', function () {
      assert.equal(base.last([1, 2, 3]), 3)
    })

    it('should handle a string', function () {
      assert.equal(base.last('foo'), 'o')
    })
  })

  describe('#init', function () {
    it('should handle an empty array', function () {
      assert.deepEqual(base.init([]), [])
    })

    it('should handle an empty string', function () {
      assert.equal(base.init(''), '')
    })

    it('should handle an array', function () {
      assert.deepEqual(base.init([1, 2, 3]), [1, 2])
    })

    it('should handle a string', function () {
      assert.equal(base.init('foo'), 'fo')
    })
  })

  describe('#tail', function () {
    it('should handle an empty array', function () {
      assert.deepEqual(base.tail([]), [])
    })

    it('should handle an empty string', function () {
      assert.equal(base.tail(''), '')
    })

    it('should handle an array', function () {
      assert.deepEqual(base.tail([1, 2, 3]), [2, 3])
    })

    it('should handle a string', function () {
      assert.equal(base.tail('foo'), 'oo')
    })
  })

  describe('#inits', function () {
    it('should handle an empty array', function () {
      assert.deepEqual(base.inits([]), [[]])
    })

    it('should handle an empty string', function () {
      assert.deepEqual(base.inits(''), [''])
    })

    it('should handle an array', function () {
      assert.deepEqual(base.inits([1, 2, 3]), [[], [1], [1, 2], [1, 2, 3]])
    })

    it('should handle a string', function () {
      assert.deepEqual(base.inits('foo'), ['', 'f', 'fo', 'foo'])
    })
  })

  describe('#tails', function () {
    it('should handle an empty array', function () {
      assert.deepEqual(base.tails([]), [[]])
    })

    it('should handle an empty string', function () {
      assert.deepEqual(base.tails(''), [''])
    })

    it('should handle an array', function () {
      assert.deepEqual(base.tails([1, 2, 3]), [[1, 2, 3], [2, 3], [3], []])
    })

    it('should handle a string', function () {
      assert.deepEqual(base.tails('foo'), ['foo', 'oo', 'o', ''])
    })
  })
})
