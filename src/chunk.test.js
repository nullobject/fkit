import chunk from './chunk'

describe('chunk', () => {
  it('handles an empty array', () => {
    expect(chunk([])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(chunk('')).toEqual([])
  })

  it('handles an array', () => {
    expect(chunk([1, 2, 2, 3, 3, 3])).toEqual([[1], [2, 2], [3, 3, 3]])
  })

  it('handles a string', () => {
    expect(chunk('Mississippi')).toEqual(['M', 'i', 'ss', 'i', 'ss', 'i', 'pp', 'i'])
  })
})
