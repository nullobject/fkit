import drop from './drop'

describe('#drop', () => {
  it('handles an empty array', () => {
    expect(drop(2)([])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(drop(2)('')).toBe('')
  })

  it('handles an array', () => {
    expect(drop(2)([1, 2, 3])).toEqual([3])
  })

  it('handles an array of strings', () => {
    expect(drop(2)(['f', 'o', 'o'])).toEqual(['o'])
  })

  it('handles a string', () => {
    expect(drop(2)('foo')).toBe('o')
  })
})
