import {assert} from 'chai'
import * as search from '../../src/list/search'

describe('list.search', () => {
  describe('#elem', () => {
    it('handles an array', () => {
      assert.isFalse(search.elem(0)([1, 2, 3]))
      assert.isTrue(search.elem(1)([1, 2, 3]))
    })

    it('handles a string', () => {
      assert.isFalse(search.elem('b')('foo'))
      assert.isTrue(search.elem('o')('foo'))
    })
  })

  describe('#elemIndex', () => {
    it('handles an array', () => {
      assert.isUndefined(search.elemIndex(0)([1, 2, 3]))
      assert.equal(search.elemIndex(1)([1, 2, 3]), 0)
    })

    it('handles a string', () => {
      assert.isUndefined(search.elemIndex('b')('foo'))
      assert.equal(search.elemIndex('o')('foo'), 1)
    })
  })

  describe('#elemIndices', () => {
    it('handles an array', () => {
      assert.deepEqual(search.elemIndices(0)([1, 2, 3]), [])
      assert.deepEqual(search.elemIndices(1)([1, 2, 3]), [0])
    })

    it('handles a string', () => {
      assert.deepEqual(search.elemIndices('b')('foo'), [])
      assert.deepEqual(search.elemIndices('o')('foo'), [1, 2])
    })
  })

  describe('#find', () => {
    it('handles an array', () => {
      const p = a => a > 1
      assert.isUndefined(search.find(p)([]))
      assert.equal(search.find(p)([1, 2, 3]), 2)
    })

    it('handles a string', () => {
      const p = a => a === 'o'
      assert.isUndefined(search.find(p)(''))
      assert.equal(search.find(p)('foo'), 'o')
    })
  })

  describe('#findIndex', () => {
    it('handles an array', () => {
      const p = a => a > 1
      assert.isUndefined(search.findIndex(p)([]))
      assert.equal(search.findIndex(p)([1, 2, 3]), 1)
    })

    it('handles a string', () => {
      const p = a => a === 'o'
      assert.isUndefined(search.findIndex(p)(''))
      assert.equal(search.findIndex(p)('foo'), 1)
    })
  })

  describe('#findIndices', () => {
    it('handles an array', () => {
      const p = a => a > 1
      assert.deepEqual(search.findIndices(p)([]), [])
      assert.deepEqual(search.findIndices(p)([1, 2, 3]), [1, 2])
    })

    it('handles a string', () => {
      const p = a => a === 'o'
      assert.deepEqual(search.findIndices(p)(''), [])
      assert.deepEqual(search.findIndices(p)('foo'), [1, 2])
    })
  })

  describe('#filter', () => {
    it('handles an array', () => {
      const p = a => a > 1
      assert.deepEqual(search.filter(p)([]), [])
      assert.deepEqual(search.filter(p)([1, 2, 3]), [2, 3])
    })

    it('handles a string', () => {
      const p = a => a === 'o'
      assert.equal(search.filter(p)(''), '')
      assert.equal(search.filter(p)('foo'), 'oo')
    })
  })

  describe('#partition', () => {
    it('handles an array', () => {
      const p = a => a > 1
      assert.deepEqual(search.partition(p)([]), [[], []])
      assert.deepEqual(search.partition(p)([1, 2, 3]), [[2, 3], [1]])
    })

    it('handles a string', () => {
      const p = a => a === 'o'
      assert.deepEqual(search.partition(p)(''), ['', ''])
      assert.deepEqual(search.partition(p)('foo'), ['oo', 'f'])
    })
  })

  describe('#all', () => {
    it('handles an array', () => {
      const p = a => a > 1
      assert.isTrue(search.all(p)([3]))
      assert.isTrue(search.all(p)([2, 3]))
      assert.isFalse(search.all(p)([3, 2, 1]))
    })

    it('handles a string', () => {
      const p = a => a !== 'r'
      assert.isTrue(search.all(p)('b'))
      assert.isTrue(search.all(p)('ba'))
      assert.isFalse(search.all(p)('bar'))
    })
  })

  describe('#any', () => {
    it('handles an array', () => {
      const p = a => a > 1
      assert.isFalse(search.any(p)([1]))
      assert.isTrue(search.any(p)([1, 2]))
      assert.isTrue(search.any(p)([1, 2, 3]))
    })

    it('handles a string', () => {
      const p = a => a !== 'r'
      assert.isFalse(search.any(p)('r'))
      assert.isTrue(search.any(p)('ar'))
      assert.isTrue(search.any(p)('bar'))
    })
  })

  describe('#isPrefixOf', () => {
    it('handles an array', () => {
      assert.isTrue(search.isPrefixOf([])([]))
      assert.isFalse(search.isPrefixOf([1])([]))
      assert.isTrue(search.isPrefixOf([1])([1, 2, 3]))
      assert.isFalse(search.isPrefixOf([2, 3])([1, 2, 3]))
    })

    it('handles a string', () => {
      assert.isTrue(search.isPrefixOf('')(''))
      assert.isFalse(search.isPrefixOf('f')(''))
      assert.isTrue(search.isPrefixOf('f')('foo'))
      assert.isFalse(search.isPrefixOf('oo')('foo'))
    })
  })

  describe('#isSuffixOf', () => {
    it('handles an array', () => {
      assert.isTrue(search.isSuffixOf([])([]))
      assert.isFalse(search.isSuffixOf([1])([]))
      assert.isFalse(search.isSuffixOf([1])([1, 2, 3]))
      assert.isTrue(search.isSuffixOf([2, 3])([1, 2, 3]))
    })

    it('handles a string', () => {
      assert.isTrue(search.isSuffixOf('')(''))
      assert.isFalse(search.isSuffixOf('f')(''))
      assert.isFalse(search.isSuffixOf('f')('foo'))
      assert.isTrue(search.isSuffixOf('oo')('foo'))
    })
  })

  describe('#isInfixOf', () => {
    it('handles an array', () => {
      assert.isTrue(search.isInfixOf([])([]))
      assert.isTrue(search.isInfixOf([1])([1, 2, 3]))
      assert.isTrue(search.isInfixOf([2, 3])([1, 2, 3]))
      assert.isTrue(search.isInfixOf([1, 2, 3])([1, 2, 3]))
      assert.isFalse(search.isInfixOf([3, 2])([1, 2, 3]))
      assert.isFalse(search.isInfixOf([1])([]))
    })

    it('handles a string', () => {
      assert.isTrue(search.isInfixOf('')(''))
      assert.isTrue(search.isInfixOf('f')('foo'))
      assert.isTrue(search.isInfixOf('oo')('foo'))
      assert.isTrue(search.isInfixOf('foo')('foo'))
      assert.isFalse(search.isInfixOf('f')(''))
    })
  })
})
