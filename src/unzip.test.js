import unzip from './unzip'

describe('unzip', () => {
  it('handles an empty array', () => {
    expect(unzip([])).toEqual([[], []])
  })

  it('handles an array of numbers', () => {
    expect(unzip([[1, 4], [2, 5], [3, 6]])).toEqual([[1, 2, 3], [4, 5, 6]])
  })

  it('handles an array of string', () => {
    expect(unzip([['f', 'b'], ['o', 'a'], ['o', 'r']])).toEqual(['foo', 'bar'])
  })
})
