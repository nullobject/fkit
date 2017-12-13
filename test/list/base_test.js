import {assert} from 'chai'
import * as base from '../../src/list/base'

describe('list.base', () => {
  describe('#isArrayOfStrings', () => {
    it('handles an empty array', () => {
      assert.isFalse(base.isArrayOfStrings([]))
    })

    it('handles an empty string', () => {
      assert.isFalse(base.isArrayOfStrings(''))
    })

    it('handles an array of numbers', () => {
      assert.isFalse(base.isArrayOfStrings([1, 2, 3]))
      assert.isFalse(base.isArrayOfStrings([1, [2, 3]]))
    })

    it('handles an array of strings', () => {
      assert.isTrue(base.isArrayOfStrings(['a', 'b', 'c']))
      assert.isFalse(base.isArrayOfStrings(['a', ['b', 'c']]))
    })
  })

  describe('#length', () => {
    it('handles an empty array', () => {
      assert.equal(base.length([]), 0)
    })

    it('handles an empty string', () => {
      assert.equal(base.length(''), 0)
    })

    it('handles an array', () => {
      assert.equal(base.length([1, 2, 3]), 3)
    })

    it('handles a string', () => {
      assert.equal(base.length('foo'), 3)
    })
  })

  describe('#empty', () => {
    it('handles an empty array', () => {
      assert.isTrue(base.empty([]))
    })

    it('handles an empty string', () => {
      assert.isTrue(base.empty(''))
    })

    it('handles an array', () => {
      assert.isFalse(base.empty([1, 2, 3]))
    })

    it('handles a string', () => {
      assert.isFalse(base.empty('foo'))
    })
  })

  describe('#append', () => {
    it('handles an empty array', () => {
      assert.deepEqual(base.append(4)([]), [4])
    })

    it('handles an empty string', () => {
      assert.equal(base.append('bar')(''), 'bar')
    })

    it('handles an array', () => {
      assert.deepEqual(base.append(4)([1, 2, 3]), [1, 2, 3, 4])
      assert.deepEqual(base.append([4, 5, 6])([[1], [2, 3]]), [[1], [2, 3], [4, 5, 6]])
    })

    it('handles a string', () => {
      assert.equal(base.append('bar')('foo'), 'foobar')
      assert.deepEqual(base.append('bar')(['f', 'oo']), ['f', 'oo', 'bar'])
    })
  })

  describe('#prepend', () => {
    it('handles an empty array', () => {
      assert.deepEqual(base.prepend(1)([]), [1])
    })

    it('handles an empty string', () => {
      assert.equal(base.prepend('foo')(''), 'foo')
    })

    it('handles an array', () => {
      assert.deepEqual(base.prepend(1)([2, 3, 4]), [1, 2, 3, 4])
      assert.deepEqual(base.prepend([1])([[2, 3], [4, 5, 6]]), [[1], [2, 3], [4, 5, 6]])
    })

    it('handles a string', () => {
      assert.equal(base.prepend('foo')('bar'), 'foobar')
      assert.deepEqual(base.prepend('f')(['oo', 'bar']), ['f', 'oo', 'bar'])
    })
  })

  describe('#surround', () => {
    it('handles an empty array', () => {
      assert.deepEqual(base.surround(1)(4)([]), [1, 4])
    })

    it('handles an empty string', () => {
      assert.equal(base.surround('fo')('ar')(''), 'foar')
    })

    it('handles an array', () => {
      assert.deepEqual(base.surround(1)(4)([2, 3]), [1, 2, 3, 4])
    })

    it('handles a string', () => {
      assert.equal(base.surround('fo')('ar')('ob'), 'foobar')
    })
  })

  describe('#head', () => {
    it('handles an empty array', () => {
      assert.isUndefined(base.head([]))
    })

    it('handles an empty string', () => {
      assert.isUndefined(base.head(''))
    })

    it('handles an array', () => {
      assert.equal(base.head([1, 2, 3]), 1)
    })

    it('handles a string', () => {
      assert.equal(base.head('foo'), 'f')
    })
  })

  describe('#last', () => {
    it('handles an empty array', () => {
      assert.isUndefined(base.last([]))
    })

    it('handles an empty string', () => {
      assert.isUndefined(base.last(''))
    })

    it('handles an array', () => {
      assert.equal(base.last([1, 2, 3]), 3)
    })

    it('handles a string', () => {
      assert.equal(base.last('foo'), 'o')
    })
  })

  describe('#init', () => {
    it('handles an empty array', () => {
      assert.deepEqual(base.init([]), [])
    })

    it('handles an empty string', () => {
      assert.equal(base.init(''), '')
    })

    it('handles an array', () => {
      assert.deepEqual(base.init([1, 2, 3]), [1, 2])
    })

    it('handles a string', () => {
      assert.equal(base.init('foo'), 'fo')
    })
  })

  describe('#tail', () => {
    it('handles an empty array', () => {
      assert.deepEqual(base.tail([]), [])
    })

    it('handles an empty string', () => {
      assert.equal(base.tail(''), '')
    })

    it('handles an array', () => {
      assert.deepEqual(base.tail([1, 2, 3]), [2, 3])
    })

    it('handles a string', () => {
      assert.equal(base.tail('foo'), 'oo')
    })
  })

  describe('#inits', () => {
    it('handles an empty array', () => {
      assert.deepEqual(base.inits([]), [[]])
    })

    it('handles an empty string', () => {
      assert.deepEqual(base.inits(''), [''])
    })

    it('handles an array', () => {
      assert.deepEqual(base.inits([1, 2, 3]), [[], [1], [1, 2], [1, 2, 3]])
    })

    it('handles a string', () => {
      assert.deepEqual(base.inits('foo'), ['', 'f', 'fo', 'foo'])
    })
  })

  describe('#tails', () => {
    it('handles an empty array', () => {
      assert.deepEqual(base.tails([]), [[]])
    })

    it('handles an empty string', () => {
      assert.deepEqual(base.tails(''), [''])
    })

    it('handles an array', () => {
      assert.deepEqual(base.tails([1, 2, 3]), [[1, 2, 3], [2, 3], [3], []])
    })

    it('handles a string', () => {
      assert.deepEqual(base.tails('foo'), ['foo', 'oo', 'o', ''])
    })
  })
})
