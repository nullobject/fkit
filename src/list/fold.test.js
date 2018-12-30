import compare from '../compare'
import * as fold from '../../src/list/fold'

describe('list.fold', () => {
  describe('#fold', () => {
    it('handles an array', () => {
      function f (b, a) { return [a].concat(b) }
      expect(fold.fold(f)([])([1, 2, 3])).toEqual([3, 2, 1])
    })

    it('handles a string', () => {
      function f (b, a) { return a + b }
      expect(fold.fold(f)('')('foo')).toBe('oof')
    })
  })

  describe('#foldRight', () => {
    it('handles an array', () => {
      function f (a, b) { return b.concat(a) }
      expect(fold.foldRight(f)([])([1, 2, 3])).toEqual([3, 2, 1])
    })

    it('handles a string', () => {
      function f (a, b) { return b + a }
      expect(fold.foldRight(f)('')('foo')).toBe('oof')
    })
  })

  describe('#scan', () => {
    it('handles an array', () => {
      function f (b, a) { return [a].concat(b) }
      expect(fold.scan(f)([])([1, 2, 3])).toEqual([[], [1], [2, 1], [3, 2, 1]])
    })

    it('handles a string', () => {
      function f (b, a) { return a + b }
      expect(fold.scan(f)('')('foo')).toEqual(['', 'f', 'of', 'oof'])
    })
  })

  describe('#scanRight', () => {
    it('handles an array', () => {
      function f (a, b) { return b.concat(a) }
      expect(fold.scanRight(f)([])([1, 2, 3])).toEqual([[3, 2, 1], [3, 2], [3], []])
    })

    it('handles a string', () => {
      function f (a, b) { return b + a }
      expect(fold.scanRight(f)('')('foo')).toEqual(['oof', 'oo', 'o', ''])
    })
  })

  describe('#maximum', () => {
    it('handles an array of numbers', () => {
      expect(fold.maximum([1, 2, 3])).toBe(3)
    })

    it('handles a string', () => {
      expect(fold.maximum('foo')).toBe('o')
    })
  })

  describe('#minimum', () => {
    it('handles an array of numbers', () => {
      expect(fold.minimum([1, 2, 3])).toBe(1)
    })

    it('handles a string', () => {
      expect(fold.minimum('foo')).toBe('f')
    })
  })

  describe('#maximumBy', () => {
    it('handles an array of numbers', () => {
      expect(fold.maximumBy(compare)([1, 2, 3])).toBe(3)
    })

    it('handles a string', () => {
      expect(fold.maximumBy(compare)('foo')).toBe('o')
    })
  })

  describe('#minimumBy', () => {
    it('handles an array of numbers', () => {
      expect(fold.minimumBy(compare)([1, 2, 3])).toBe(1)
    })

    it('handles a string', () => {
      expect(fold.minimumBy(compare)('foo')).toBe('f')
    })
  })

  describe('#sum', () => {
    it('handles an array of numbers', () => {
      expect(fold.sum([1, 2, 3])).toBe(6)
    })
  })

  describe('#product', () => {
    it('handles an array of numbers', () => {
      expect(fold.product([2, 3, 4])).toBe(24)
    })
  })
})
