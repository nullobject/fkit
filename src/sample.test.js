import sample from './sample'

describe('#sample', () => {
  it('handles an empty array', () => {
    expect(sample(2)([])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(sample(2)('')).toBe('')
  })

  it('handles an array of numbers', () => {
    const result = sample(2)([1, 2, 3])
    expect([1, 2, 3]).toEqual(expect.arrayContaining(result))
  })

  it('handles an array of strings', () => {
    const result = sample(2)(['a', 'b', 'c'])
    expect(['a', 'b', 'c']).toEqual(expect.arrayContaining(result))
  })

  it('handles a string', () => {
    const result = sample(2)('abc')
    expect(['a', 'b', 'c']).toEqual(expect.arrayContaining(result.split('')))
  })
})
