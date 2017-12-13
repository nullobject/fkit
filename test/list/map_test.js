import {assert} from 'chai'
import * as map from '../../src/list/map'

describe('list.map', () => {
  describe('#map', () => {
    it('handles an array', () => {
      const f = a => [a + 1]
      assert.deepEqual(map.map(f)([1, 2, 3]), [[2], [3], [4]])
    })

    it('handles a string', () => {
      const f = a => a.toUpperCase()
      assert.deepEqual(map.map(f)('foo'), ['F', 'O', 'O'])
    })
  })

  describe('#reverse', () => {
    it('handles an array', () => {
      assert.deepEqual(map.reverse([1, 2, 3]), [3, 2, 1])
    })

    it('handles a string', () => {
      assert.equal(map.reverse('foo'), 'oof')
    })
  })

  describe('#intersperse', () => {
    it('handles an array', () => {
      assert.deepEqual(map.intersperse(4)([]), [])
      assert.deepEqual(map.intersperse(4)([1, 2, 3]), [1, 4, 2, 4, 3])
      assert.deepEqual(map.intersperse(null)([1, 2, 3]), [1, null, 2, null, 3])
    })

    it('handles a string', () => {
      assert.equal(map.intersperse('-')(''), '')
      assert.equal(map.intersperse('-')('foo'), 'f-o-o')
      assert.equal(map.intersperse('')('foo'), 'foo')
    })
  })
})
