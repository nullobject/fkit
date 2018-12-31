import permutations from './permutations'

describe('#permutations', () => {
  it('handles an empty array', () => {
    expect(permutations([])).toEqual([[]])
  })

  it('handles an empty string', () => {
    expect(permutations('')).toEqual([''])
  })

  it('handles an array', () => {
    expect(permutations([1, 2, 3])).toEqual([[1, 2, 3], [2, 1, 3], [3, 2, 1], [2, 3, 1], [3, 1, 2], [1, 3, 2]])
  })

  it('handles a string', () => {
    expect(permutations('abc')).toEqual(['abc', 'bac', 'cba', 'bca', 'cab', 'acb'])
  })
})
