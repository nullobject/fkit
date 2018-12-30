import * as search from '../../src/list/search'

describe('list.search', () => {
  describe('#any', () => {
    it('handles an array', () => {
      const p = a => a > 1
      expect(search.any(p)([1])).toBe(false)
      expect(search.any(p)([1, 2])).toBe(true)
      expect(search.any(p)([1, 2, 3])).toBe(true)
    })

    it('handles a string', () => {
      const p = a => a !== 'r'
      expect(search.any(p)('r')).toBe(false)
      expect(search.any(p)('ar')).toBe(true)
      expect(search.any(p)('bar')).toBe(true)
    })
  })

  describe('#isPrefixOf', () => {
    it('handles an array', () => {
      expect(search.isPrefixOf([])([])).toBe(true)
      expect(search.isPrefixOf([1])([])).toBe(false)
      expect(search.isPrefixOf([1])([1, 2, 3])).toBe(true)
      expect(search.isPrefixOf([2, 3])([1, 2, 3])).toBe(false)
    })

    it('handles a string', () => {
      expect(search.isPrefixOf('')('')).toBe(true)
      expect(search.isPrefixOf('f')('')).toBe(false)
      expect(search.isPrefixOf('f')('foo')).toBe(true)
      expect(search.isPrefixOf('oo')('foo')).toBe(false)
    })
  })

  describe('#isSuffixOf', () => {
    it('handles an array', () => {
      expect(search.isSuffixOf([])([])).toBe(true)
      expect(search.isSuffixOf([1])([])).toBe(false)
      expect(search.isSuffixOf([1])([1, 2, 3])).toBe(false)
      expect(search.isSuffixOf([2, 3])([1, 2, 3])).toBe(true)
    })

    it('handles a string', () => {
      expect(search.isSuffixOf('')('')).toBe(true)
      expect(search.isSuffixOf('f')('')).toBe(false)
      expect(search.isSuffixOf('f')('foo')).toBe(false)
      expect(search.isSuffixOf('oo')('foo')).toBe(true)
    })
  })

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
