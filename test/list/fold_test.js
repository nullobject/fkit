var assert = require('chai').assert
var fn = require('../../src/fn')
var fold = require('../../src/list/fold')

describe('list.fold', function () {
  describe('#flattenStrings', function () {
    it('should handle an array of numbers', function () {
      assert.deepEqual(fold.flattenStrings([1, [2, 3]]), [1, [2, 3]])
    })

    it('should handle an array of strings', function () {
      assert.deepEqual(fold.flattenStrings(['a', ['b', 'c']]), ['a', 'bc'])
    })
  })

  describe('#concat', function () {
    it('should handle an empty array', function () {
      assert.deepEqual(fold.concat([]), [])
    })

    it('should handle an empty string', function () {
      assert.equal(fold.concat(''), '')
    })

    it('should handle a list of numbers', function () {
      assert.deepEqual(fold.concat(1, 2, 3, 4, 5, 6), [1, 2, 3, 4, 5, 6])
      assert.deepEqual(fold.concat([1], [2, 3], [4, 5, 6]), [1, 2, 3, 4, 5, 6])
    })

    it('should handle a list of strings', function () {
      assert.equal(fold.concat('foobar'), 'foobar')
      assert.equal(fold.concat('f', 'oo', 'bar'), 'foobar')
    })

    it('should handle an array of numbers', function () {
      assert.deepEqual(fold.concat([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6])
      assert.deepEqual(fold.concat([[1], [2, 3], [4, 5, 6]]), [1, 2, 3, 4, 5, 6])

      assert.deepEqual(fold.concat([[[1]], [[2, 3]], [[4, 5, 6]]]), [[1], [2, 3], [4, 5, 6]])
      assert.deepEqual(fold.concat([[[1]], [[2, 3], [4, 5, 6]]]), [[1], [2, 3], [4, 5, 6]])
    })

    it('should handle an array of strings', function () {
      assert.equal(fold.concat(['foobar']), 'foobar')
      assert.equal(fold.concat(['f', 'oo', 'bar']), 'foobar')

      assert.deepEqual(fold.concat([['f'], ['oo'], ['bar']]), ['f', 'oo', 'bar'])
      assert.deepEqual(fold.concat([['f'], ['oo', 'bar']]), ['f', 'oo', 'bar'])
    })

    it('should handle a heterogenous list', function () {
      assert.deepEqual(fold.concat(1, 2, 3, 'foo'), [1, 2, 3, 'foo'])
      assert.deepEqual(fold.concat(1, 2, 3, ['foo']), [1, 2, 3, 'foo'])
      assert.deepEqual(fold.concat([1, 2, 3], 'foo'), [1, 2, 3, 'foo'])
      assert.deepEqual(fold.concat([1, 2, 3], ['foo']), [1, 2, 3, 'foo'])

      assert.deepEqual(fold.concat('foo', 1, 2, 3), ['foo', 1, 2, 3])
      assert.deepEqual(fold.concat('foo', [1, 2, 3]), ['foo', 1, 2, 3])
      assert.deepEqual(fold.concat(['foo'], 1, 2, 3), ['foo', 1, 2, 3])
      assert.deepEqual(fold.concat(['foo'], [1, 2, 3]), ['foo', 1, 2, 3])
    })
  })

  describe('#concatMap', function () {
    function f (a) { return [a, 0] }
    function g (a) { return [[a, 0]] }
    function h (a) { return [a, '-'] }
    function i (a) { return a + '-' }
    function j (a) { return [[a, '-']] }

    it('should handle an empty array', function () {
      assert.deepEqual(fold.concatMap(f)([]), [])
    })

    it('should handle an empty string', function () {
      assert.equal(fold.concatMap(h)(''), '')
    })

    it('should handle an array of numbers', function () {
      assert.deepEqual(fold.concatMap(f)([1, 2, 3]), [1, 0, 2, 0, 3, 0])
      assert.deepEqual(fold.concatMap(g)([1, 2, 3]), [[1, 0], [2, 0], [3, 0]])
    })

    it('should handle an array of strings', function () {
      assert.equal(fold.concatMap(h)(['f', 'o', 'o']), 'f-o-o-')
      assert.equal(fold.concatMap(i)(['f', 'o', 'o']), 'f-o-o-')
      assert.deepEqual(fold.concatMap(j)(['f', 'o', 'o']), ['f-', 'o-', 'o-'])
    })

    it('should handle a string', function () {
      assert.equal(fold.concatMap(h)('foo'), 'f-o-o-')
      assert.equal(fold.concatMap(i)('foo'), 'f-o-o-')
      assert.deepEqual(fold.concatMap(j)('foo'), ['f-', 'o-', 'o-'])
    })
  })

  describe('#fold', function () {
    it('should handle an array', function () {
      function f (b, a) { return [a].concat(b) }
      assert.deepEqual(fold.fold(f)([])([1, 2, 3]), [3, 2, 1])
    })

    it('should handle a string', function () {
      function f (b, a) { return a + b }
      assert.equal(fold.fold(f)('')('foo'), 'oof')
    })
  })

  describe('#foldRight', function () {
    it('should handle an array', function () {
      function f (a, b) { return b.concat(a) }
      assert.deepEqual(fold.foldRight(f)([])([1, 2, 3]), [3, 2, 1])
    })

    it('should handle a string', function () {
      function f (a, b) { return b + a }
      assert.equal(fold.foldRight(f)('')('foo'), 'oof')
    })
  })

  describe('#scan', function () {
    it('should handle an array', function () {
      function f (b, a) { return [a].concat(b) }
      assert.deepEqual(fold.scan(f)([])([1, 2, 3]), [[], [1], [2, 1], [3, 2, 1]])
    })

    it('should handle a string', function () {
      function f (b, a) { return a + b }
      assert.deepEqual(fold.scan(f)('')('foo'), ['', 'f', 'of', 'oof'])
    })
  })

  describe('#scanRight', function () {
    it('should handle an array', function () {
      function f (a, b) { return b.concat(a) }
      assert.deepEqual(fold.scanRight(f)([])([1, 2, 3]), [[3, 2, 1], [3, 2], [3], []])
    })

    it('should handle a string', function () {
      function f (a, b) { return b + a }
      assert.deepEqual(fold.scanRight(f)('')('foo'), ['oof', 'oo', 'o', ''])
    })
  })

  describe('#maximum', function () {
    it('should handle an array of numbers', function () {
      assert.equal(fold.maximum([1, 2, 3]), 3)
    })

    it('should handle a string', function () {
      assert.equal(fold.maximum('foo'), 'o')
    })
  })

  describe('#minimum', function () {
    it('should handle an array of numbers', function () {
      assert.equal(fold.minimum([1, 2, 3]), 1)
    })

    it('should handle a string', function () {
      assert.equal(fold.minimum('foo'), 'f')
    })
  })

  describe('#maximumBy', function () {
    var f = fn.compare

    it('should handle an array of numbers', function () {
      assert.equal(fold.maximumBy(f)([1, 2, 3]), 3)
    })

    it('should handle a string', function () {
      assert.equal(fold.maximumBy(f)('foo'), 'o')
    })
  })

  describe('#minimumBy', function () {
    var f = fn.compare

    it('should handle an array of numbers', function () {
      assert.equal(fold.minimumBy(f)([1, 2, 3]), 1)
    })

    it('should handle a string', function () {
      assert.equal(fold.minimumBy(f)('foo'), 'f')
    })
  })

  describe('#sum', function () {
    it('should handle an array of numbers', function () {
      assert.equal(fold.sum([1, 2, 3]), 6)
    })
  })

  describe('#product', function () {
    it('should handle an array of numbers', function () {
      assert.equal(fold.product([2, 3, 4]), 24)
    })
  })
})
