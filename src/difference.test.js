import difference from './difference'

describe('#difference', () => {
  it('handles an empty array', () => {
    expect(difference([1, 2, 3])([])).toEqual([1, 2, 3])
    expect(difference([])([1, 2, 3])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(difference('abc')('')).toBe('abc')
    expect(difference('')('abc')).toBe('')
  })

  it('handles an array', () => {
    expect(difference([1, 2, 3])([1, 2, 3])).toEqual([])
    expect(difference([1, 2, 3])([2, 3, 4])).toEqual([1])
    expect(difference([1, 2, 3])([4, 5, 6])).toEqual([1, 2, 3])
    expect(difference([1, 1])([1])).toEqual([])
  })

  it('handles a string', () => {
    expect(difference('abc')('abc')).toBe('')
    expect(difference('abc')('bcd')).toBe('a')
    expect(difference('abc')('def')).toBe('abc')
    expect(difference('aa')('a')).toBe('')
  })
})
