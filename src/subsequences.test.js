import subsequences from './subsequences'

describe('subsequences', () => {
  it('handles an empty array', () => {
    expect(subsequences([])).toEqual([[]])
  })

  it('handles an empty string', () => {
    expect(subsequences('')).toEqual([''])
  })

  it('handles an array', () => {
    expect(subsequences([1, 2, 3])).toEqual([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]])
  })

  it('handles a string', () => {
    expect(subsequences('abc')).toEqual(['', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc'])
  })
})
