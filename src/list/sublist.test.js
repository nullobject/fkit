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
})
