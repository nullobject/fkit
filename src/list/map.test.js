import * as map from '../../src/list/map'

describe('list.map', () => {
  describe('#map', () => {
    it('handles an array', () => {
      const f = a => [a + 1]
      expect(map.map(f)([1, 2, 3])).toEqual([[2], [3], [4]])
    })

    it('handles a string', () => {
      const f = a => a.toUpperCase()
      expect(map.map(f)('foo')).toEqual(['F', 'O', 'O'])
    })
  })

  describe('#reverse', () => {
    it('handles an array', () => {
      expect(map.reverse([1, 2, 3])).toEqual([3, 2, 1])
    })

    it('handles a string', () => {
      expect(map.reverse('foo')).toBe('oof')
    })
  })

  describe('#intersperse', () => {
    it('handles an array', () => {
      expect(map.intersperse(4)([])).toEqual([])
      expect(map.intersperse(4)([1, 2, 3])).toEqual([1, 4, 2, 4, 3])
      expect(map.intersperse(null)([1, 2, 3])).toEqual([1, null, 2, null, 3])
    })

    it('handles a string', () => {
      expect(map.intersperse('-')('')).toBe('')
      expect(map.intersperse('-')('foo')).toBe('f-o-o')
      expect(map.intersperse('')('foo')).toBe('foo')
    })
  })
})