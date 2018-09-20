import * as zip from '../../src/list/zip'

describe('list.zip', () => {
  describe('#zipWith', () => {
    const f = (a, b) => a + b

    it('handles an empty array', () => {
      expect(zip.zipWith(f)([1, 2, 3])([])).toEqual([])
      expect(zip.zipWith(f)([])([3, 4, 5])).toEqual([])
    })

    it('handles an empty string', () => {
      expect(zip.zipWith(f)('foo')('')).toEqual([])
      expect(zip.zipWith(f)('')('bar')).toEqual([])
    })

    it('handles an array', () => {
      expect(zip.zipWith(f)([1, 2, 3])([4, 5, 6])).toEqual([5, 7, 9])
      expect(zip.zipWith(f)([1, 2, 3])([4, 5])).toEqual([5, 7])
      expect(zip.zipWith(f)([1, 2])([3, 4, 5])).toEqual([4, 6])
    })

    it('handles a string', () => {
      expect(zip.zipWith(f)('foo')('bar')).toEqual(['fb', 'oa', 'or'])
      expect(zip.zipWith(f)('foo')('ba')).toEqual(['fb', 'oa'])
      expect(zip.zipWith(f)('fo')('bar')).toEqual(['fb', 'oa'])
    })
  })

  describe('#zip', () => {
    it('handles an empty array', () => {
      expect(zip.zip([1, 2, 3])([])).toEqual([])
      expect(zip.zip([])([3, 4, 5])).toEqual([])
    })

    it('handles an empty string', () => {
      expect(zip.zip('foo')('')).toEqual([])
      expect(zip.zip('')('bar')).toEqual([])
    })

    it('handles an array', () => {
      expect(zip.zip([1, 2, 3])([4, 5, 6])).toEqual([[1, 4], [2, 5], [3, 6]])
      expect(zip.zip([1, 2, 3])([4, 5])).toEqual([[1, 4], [2, 5]])
      expect(zip.zip([1, 2])([4, 5, 6])).toEqual([[1, 4], [2, 5]])
    })

    it('handles a string', () => {
      expect(zip.zip('foo')('bar')).toEqual([['f', 'b'], ['o', 'a'], ['o', 'r']])
      expect(zip.zip('foo')('ba')).toEqual([['f', 'b'], ['o', 'a']])
      expect(zip.zip('fo')('bar')).toEqual([['f', 'b'], ['o', 'a']])
    })
  })

  describe('#unzip', () => {
    it('handles an empty array', () => {
      expect(zip.unzip([])).toEqual([[], []])
    })

    it('handles an array of numbers', () => {
      expect(zip.unzip([[1, 4], [2, 5], [3, 6]])).toEqual([[1, 2, 3], [4, 5, 6]])
    })

    it('handles an array of string', () => {
      expect(zip.unzip([['f', 'b'], ['o', 'a'], ['o', 'r']])).toEqual(['foo', 'bar'])
    })
  })
})
