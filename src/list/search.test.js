import * as search from '../../src/list/search'

describe('list.search', () => {
  describe('#isInfixOf', () => {
    it('handles an array', () => {
      expect(search.isInfixOf([])([])).toBe(true)
      expect(search.isInfixOf([1])([1, 2, 3])).toBe(true)
      expect(search.isInfixOf([2, 3])([1, 2, 3])).toBe(true)
      expect(search.isInfixOf([1, 2, 3])([1, 2, 3])).toBe(true)
      expect(search.isInfixOf([3, 2])([1, 2, 3])).toBe(false)
      expect(search.isInfixOf([1])([])).toBe(false)
    })

    it('handles a string', () => {
      expect(search.isInfixOf('')('')).toBe(true)
      expect(search.isInfixOf('f')('foo')).toBe(true)
      expect(search.isInfixOf('oo')('foo')).toBe(true)
      expect(search.isInfixOf('foo')('foo')).toBe(true)
      expect(search.isInfixOf('f')('')).toBe(false)
    })
  })
})
