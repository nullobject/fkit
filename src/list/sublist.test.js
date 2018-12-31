import * as sublist from '../../src/list/sublist'

describe('list.sublist', () => {
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
