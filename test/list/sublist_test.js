import * as sublist from '../../src/list/sublist'
import sinon from 'sinon'
import {assert} from 'chai'

describe('list.sublist', () => {
  describe('#take', () => {
    it('handles an empty array', () => {
      assert.deepEqual(sublist.take(2)([]), [])
    })

    it('handles an empty string', () => {
      assert.equal(sublist.take(2)(''), '')
    })

    it('handles an array', () => {
      assert.deepEqual(sublist.take(2)([1, 2, 3]), [1, 2])
    })

    it('handles an array of strings', () => {
      assert.deepEqual(sublist.take(2)(['f', 'o', 'o']), ['f', 'o'])
    })

    it('handles a string', () => {
      assert.equal(sublist.take(2)('foo'), 'fo')
    })
  })

  describe('#drop', () => {
    it('handles an empty array', () => {
      assert.deepEqual(sublist.drop(2)([]), [])
    })

    it('handles an empty string', () => {
      assert.equal(sublist.drop(2)(''), '')
    })

    it('handles an array', () => {
      assert.deepEqual(sublist.drop(2)([1, 2, 3]), [3])
    })

    it('handles an array of strings', () => {
      assert.deepEqual(sublist.drop(2)(['f', 'o', 'o']), ['o'])
    })

    it('handles a string', () => {
      assert.equal(sublist.drop(2)('foo'), 'o')
    })
  })

  describe('#takeWhile', () => {
    const p = a => a < 3
    const q = a => a !== 'o'

    it('handles an empty array', () => {
      assert.deepEqual(sublist.takeWhile(p)([]), [])
    })

    it('handles an empty string', () => {
      assert.equal(sublist.takeWhile(q)(''), '')
    })

    it('handles an array', () => {
      assert.deepEqual(sublist.takeWhile(p)([1, 2, 3]), [1, 2])
    })

    it('handles an array of strings', () => {
      assert.deepEqual(sublist.takeWhile(q)(['f', 'o', 'o']), ['f'])
    })

    it('handles a string', () => {
      assert.equal(sublist.takeWhile(q)('foo'), 'f')
    })
  })

  describe('#dropWhile', () => {
    const p = a => a < 3
    const q = a => a !== 'o'

    it('handles an empty array', () => {
      assert.deepEqual(sublist.dropWhile(p)([]), [])
    })

    it('handles an empty string', () => {
      assert.equal(sublist.dropWhile(q)(''), '')
    })

    it('handles an array', () => {
      assert.deepEqual(sublist.dropWhile(p)([1, 2, 3]), [3])
    })

    it('handles an array of strings', () => {
      assert.deepEqual(sublist.dropWhile(q)(['f', 'o', 'o']), ['o', 'o'])
    })

    it('handles a string', () => {
      assert.equal(sublist.dropWhile(q)('foo'), 'oo')
    })
  })

  describe('#splitAt', () => {
    it('handles an empty array', () => {
      assert.deepEqual(sublist.splitAt(1)([]), [[], []])
    })

    it('handles an empty string', () => {
      assert.deepEqual(sublist.splitAt(1)(''), ['', ''])
    })

    it('handles an array', () => {
      assert.deepEqual(sublist.splitAt(1)([1, 2, 3]), [[1], [2, 3]])
    })

    it('handles a string', () => {
      assert.deepEqual(sublist.splitAt(1)('foo'), ['f', 'oo'])
    })
  })

  describe('#span', () => {
    const p = a => a < 3
    const q = a => a !== 'o'

    it('handles an empty array', () => {
      assert.deepEqual(sublist.span(p)([]), [[], []])
    })

    it('handles an empty string', () => {
      assert.deepEqual(sublist.span(q)(''), ['', ''])
    })

    it('handles an array', () => {
      assert.deepEqual(sublist.span(p)([1, 2, 3]), [[1, 2], [3]])
    })

    it('handles a string', () => {
      assert.deepEqual(sublist.span(q)('foo'), ['f', 'oo'])
    })
  })

  describe('#group', () => {
    it('handles an empty array', () => {
      assert.deepEqual(sublist.group([]), [])
    })

    it('handles an empty string', () => {
      assert.deepEqual(sublist.group(''), [])
    })

    it('handles an array', () => {
      assert.deepEqual(sublist.group([1, 2, 2, 3, 3, 3]), [[1], [2, 2], [3, 3, 3]])
    })

    it('handles a string', () => {
      assert.deepEqual(sublist.group('Mississippi'), ['M', 'i', 'ss', 'i', 'ss', 'i', 'pp', 'i'])
    })
  })

  describe('#groupBy', () => {
    const f = (a, b) => a === b

    it('handles an empty array', () => {
      assert.deepEqual(sublist.groupBy(f, []), [])
    })

    it('handles an empty string', () => {
      assert.deepEqual(sublist.groupBy(f, ''), [])
    })

    it('handles an array', () => {
      assert.deepEqual(sublist.groupBy(f, [1, 2, 2, 3, 3, 3]), [[1], [2, 2], [3, 3, 3]])
    })

    it('handles a string', () => {
      assert.deepEqual(sublist.groupBy(f, 'Mississippi'), ['M', 'i', 'ss', 'i', 'ss', 'i', 'pp', 'i'])
    })

    it('calls the comparator function', () => {
      const spy = sinon.stub().returns(true)
      sublist.groupBy(spy, [1, 2])
      assert.isTrue(spy.calledWithExactly(2, 1))
    })
  })
})
