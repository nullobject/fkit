import * as search from '../../src/list/search'

describe('list.search', () => {
  describe('#elemIndices', () => {
    it('handles an array', () => {
      expect(search.elemIndices(0)([1, 2, 3])).toEqual([])
      expect(search.elemIndices(1)([1, 2, 3])).toEqual([0])
    })

    it('handles a string', () => {
      expect(search.elemIndices('b')('foo')).toEqual([])
      expect(search.elemIndices('o')('foo')).toEqual([1, 2])
    })
  })

  describe('#find', () => {
    it('handles an array', () => {
      const p = a => a > 1
      expect(search.find(p)([])).toBeUndefined()
      expect(search.find(p)([1, 2, 3])).toBe(2)
    })

    it('handles a string', () => {
      const p = a => a === 'o'
      expect(search.find(p)('')).toBeUndefined()
      expect(search.find(p)('foo')).toBe('o')
    })
  })

  describe('#findIndex', () => {
    it('handles an array', () => {
      const p = a => a > 1
      expect(search.findIndex(p)([])).toBeUndefined()
      expect(search.findIndex(p)([1, 2, 3])).toBe(1)
    })

    it('handles a string', () => {
      const p = a => a === 'o'
      expect(search.findIndex(p)('')).toBeUndefined()
      expect(search.findIndex(p)('foo')).toBe(1)
    })
  })

  describe('#findIndices', () => {
    it('handles an array', () => {
      const p = a => a > 1
      expect(search.findIndices(p)([])).toEqual([])
      expect(search.findIndices(p)([1, 2, 3])).toEqual([1, 2])
    })

    it('handles a string', () => {
      const p = a => a === 'o'
      expect(search.findIndices(p)('')).toEqual([])
      expect(search.findIndices(p)('foo')).toEqual([1, 2])
    })
  })

  describe('#filter', () => {
    it('handles an array', () => {
      const p = a => a > 1
      expect(search.filter(p)([])).toEqual([])
      expect(search.filter(p)([1, 2, 3])).toEqual([2, 3])
    })

    it('handles a string', () => {
      const p = a => a === 'o'
      expect(search.filter(p)('')).toBe('')
      expect(search.filter(p)('foo')).toBe('oo')
    })
  })

  describe('#partition', () => {
    it('handles an array', () => {
      const p = a => a > 1
      expect(search.partition(p)([])).toEqual([[], []])
      expect(search.partition(p)([1, 2, 3])).toEqual([[2, 3], [1]])
    })

    it('handles a string', () => {
      const p = a => a === 'o'
      expect(search.partition(p)('')).toEqual(['', ''])
      expect(search.partition(p)('foo')).toEqual(['oo', 'f'])
    })
  })

  describe('#all', () => {
    it('handles an array', () => {
      const p = a => a > 1
      expect(search.all(p)([3])).toBe(true)
      expect(search.all(p)([2, 3])).toBe(true)
      expect(search.all(p)([3, 2, 1])).toBe(false)
    })

    it('handles a string', () => {
      const p = a => a !== 'r'
      expect(search.all(p)('b')).toBe(true)
      expect(search.all(p)('ba')).toBe(true)
      expect(search.all(p)('bar')).toBe(false)
    })
  })

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
