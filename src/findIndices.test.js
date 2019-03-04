import findIndices from './findIndices'

describe('findIndices', () => {
  it('handles an array', () => {
    const p = a => a > 1
    expect(findIndices(p)([])).toEqual([])
    expect(findIndices(p)([1, 2, 3])).toEqual([1, 2])
  })

  it('handles a string', () => {
    const p = a => a === 'o'
    expect(findIndices(p)('')).toEqual([])
    expect(findIndices(p)('foo')).toEqual([1, 2])
  })
})
