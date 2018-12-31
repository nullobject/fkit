import take from './take'

describe('#take', () => {
  it('handles an empty array', () => {
    expect(take(2)([])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(take(2)('')).toBe('')
  })

  it('handles an array', () => {
    expect(take(2)([1, 2, 3])).toEqual([1, 2])
  })

  it('handles an array of strings', () => {
    expect(take(2)(['f', 'o', 'o'])).toEqual(['f', 'o'])
  })

  it('handles a string', () => {
    expect(take(2)('foo')).toBe('fo')
  })
})
