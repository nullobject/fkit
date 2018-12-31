import * as sublist from '../../src/list/sublist'

describe('list.sublist', () => {
  describe('#splitAt', () => {
    it('handles an empty array', () => {
      expect(sublist.splitAt(1)([])).toEqual([[], []])
    })

    it('handles an empty string', () => {
      expect(sublist.splitAt(1)('')).toEqual(['', ''])
    })

    it('handles an array', () => {
      expect(sublist.splitAt(1)([1, 2, 3])).toEqual([[1], [2, 3]])
    })

    it('handles a string', () => {
      expect(sublist.splitAt(1)('foo')).toEqual(['f', 'oo'])
    })
  })

  describe('#span', () => {
    const p = a => a < 3
    const q = a => a !== 'o'

    it('handles an empty array', () => {
      expect(sublist.span(p)([])).toEqual([[], []])
    })

    it('handles an empty string', () => {
      expect(sublist.span(q)('')).toEqual(['', ''])
    })

    it('handles an array', () => {
      expect(sublist.span(p)([1, 2, 3])).toEqual([[1, 2], [3]])
    })

    it('handles a string', () => {
      expect(sublist.span(q)('foo')).toEqual(['f', 'oo'])
    })
  })

  describe('#group', () => {
    it('handles an empty array', () => {
      expect(sublist.group([])).toEqual([])
    })

    it('handles an empty string', () => {
      expect(sublist.group('')).toEqual([])
    })

    it('handles an array', () => {
      expect(sublist.group([1, 2, 2, 3, 3, 3])).toEqual([[1], [2, 2], [3, 3, 3]])
    })

    it('handles a string', () => {
      expect(sublist.group('Mississippi')).toEqual(['M', 'i', 'ss', 'i', 'ss', 'i', 'pp', 'i'])
    })
  })

  describe('#groupBy', () => {
    const f = (a, b) => a === b

    it('handles an empty array', () => {
      expect(sublist.groupBy(f, [])).toEqual([])
    })

    it('handles an empty string', () => {
      expect(sublist.groupBy(f, '')).toEqual([])
    })

    it('handles an array', () => {
      expect(sublist.groupBy(f, [1, 2, 2, 3, 3, 3])).toEqual([[1], [2, 2], [3, 3, 3]])
    })

    it('handles a string', () => {
      expect(sublist.groupBy(f, 'Mississippi')).toEqual(['M', 'i', 'ss', 'i', 'ss', 'i', 'pp', 'i'])
    })

    it('calls the comparator function', () => {
      const spy = jest.fn()
      sublist.groupBy(spy, [1, 2])
      expect(spy).toHaveBeenCalledWith(2, 1)
    })
  })
})
