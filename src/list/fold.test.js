import compare from '../compare'
import * as fold from '../../src/list/fold'

describe('list.fold', () => {
  describe('#flattenStrings', () => {
    it('handles an array of numbers', () => {
      expect(fold.flattenStrings([1, [2, 3]])).toEqual([1, [2, 3]])
    })

    it('handles an array of strings', () => {
      expect(fold.flattenStrings(['a', ['b', 'c']])).toEqual(['a', 'bc'])
    })
  })

  describe('#concat', () => {
    it('handles an empty array', () => {
      expect(fold.concat([])).toEqual([])
    })

    it('handles an empty string', () => {
      expect(fold.concat('')).toBe('')
    })

    it('handles a list of numbers', () => {
      expect(fold.concat(1, 2, 3, 4, 5, 6)).toEqual([1, 2, 3, 4, 5, 6])
      expect(fold.concat([1], [2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
    })

    it('handles a list of strings', () => {
      expect(fold.concat('foobar')).toBe('foobar')
      expect(fold.concat('f', 'oo', 'bar')).toBe('foobar')
    })

    it('handles an array of numbers', () => {
      expect(fold.concat([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
      expect(fold.concat([[1], [2, 3], [4, 5, 6]])).toEqual([1, 2, 3, 4, 5, 6])

      expect(fold.concat([[[1]], [[2, 3]], [[4, 5, 6]]])).toEqual([[1], [2, 3], [4, 5, 6]])
      expect(fold.concat([[[1]], [[2, 3], [4, 5, 6]]])).toEqual([[1], [2, 3], [4, 5, 6]])
    })

    it('handles an array of strings', () => {
      expect(fold.concat(['foobar'])).toBe('foobar')
      expect(fold.concat(['f', 'oo', 'bar'])).toBe('foobar')

      expect(fold.concat([['f'], ['oo'], ['bar']])).toEqual(['f', 'oo', 'bar'])
      expect(fold.concat([['f'], ['oo', 'bar']])).toEqual(['f', 'oo', 'bar'])
    })

    it('handles a heterogenous list', () => {
      expect(fold.concat(1, 2, 3, 'foo')).toEqual([1, 2, 3, 'foo'])
      expect(fold.concat(1, 2, 3, ['foo'])).toEqual([1, 2, 3, 'foo'])
      expect(fold.concat([1, 2, 3], 'foo')).toEqual([1, 2, 3, 'foo'])
      expect(fold.concat([1, 2, 3], ['foo'])).toEqual([1, 2, 3, 'foo'])

      expect(fold.concat('foo', 1, 2, 3)).toEqual(['foo', 1, 2, 3])
      expect(fold.concat('foo', [1, 2, 3])).toEqual(['foo', 1, 2, 3])
      expect(fold.concat(['foo'], 1, 2, 3)).toEqual(['foo', 1, 2, 3])
      expect(fold.concat(['foo'], [1, 2, 3])).toEqual(['foo', 1, 2, 3])
    })
  })

  describe('#concatMap', () => {
    const f = a => [a, 0]
    const g = a => [[a, 0]]
    const h = a => [a, '-']
    const i = a => a + '-'
    const j = a => [[a, '-']]

    it('handles an empty array', () => {
      expect(fold.concatMap(f)([])).toEqual([])
    })

    it('handles an empty string', () => {
      expect(fold.concatMap(h)('')).toBe('')
    })

    it('handles an array of numbers', () => {
      expect(fold.concatMap(f)([1, 2, 3])).toEqual([1, 0, 2, 0, 3, 0])
      expect(fold.concatMap(g)([1, 2, 3])).toEqual([[1, 0], [2, 0], [3, 0]])
    })

    it('handles an array of strings', () => {
      expect(fold.concatMap(h)(['f', 'o', 'o'])).toBe('f-o-o-')
      expect(fold.concatMap(i)(['f', 'o', 'o'])).toBe('f-o-o-')
      expect(fold.concatMap(j)(['f', 'o', 'o'])).toEqual(['f-', 'o-', 'o-'])
    })

    it('handles a string', () => {
      expect(fold.concatMap(h)('foo')).toBe('f-o-o-')
      expect(fold.concatMap(i)('foo')).toBe('f-o-o-')
      expect(fold.concatMap(j)('foo')).toEqual(['f-', 'o-', 'o-'])
    })
  })

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
