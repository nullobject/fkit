import isArrayOfStrings from './isArrayOfStrings'

describe('#isArrayOfStrings', () => {
  it('handles an empty array', () => {
    expect(isArrayOfStrings([])).toBe(false)
  })

  it('handles an empty string', () => {
    expect(isArrayOfStrings('')).toBe(false)
  })

  it('handles an array of numbers', () => {
    expect(isArrayOfStrings([1, 2, 3])).toBe(false)
    expect(isArrayOfStrings([1, [2, 3]])).toBe(false)
  })

  it('handles an array of strings', () => {
    expect(isArrayOfStrings(['a', 'b', 'c'])).toBe(true)
    expect(isArrayOfStrings(['a', ['b', 'c']])).toBe(false)
  })
})
