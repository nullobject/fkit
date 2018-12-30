import flattenStrings from './flattenStrings'

describe('#flattenStrings', () => {
  it('handles an array of numbers', () => {
    expect(flattenStrings([1, [2, 3]])).toEqual([1, [2, 3]])
  })

  it('handles an array of strings', () => {
    expect(flattenStrings(['a', ['b', 'c']])).toEqual(['a', 'bc'])
  })
})
