import group from './group'

describe('#group', () => {
  it('handles an empty array', () => {
    expect(group([])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(group('')).toEqual([])
  })

  it('handles an array', () => {
    expect(group([1, 2, 2, 3, 3, 3])).toEqual([[1], [2, 2], [3, 3, 3]])
  })

  it('handles a string', () => {
    expect(group('Mississippi')).toEqual(['M', 'i', 'ss', 'i', 'ss', 'i', 'pp', 'i'])
  })
})
