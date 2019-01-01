import union from './union'

describe('#union', () => {
  it('handles an empty array', () => {
    expect(union([1, 2, 3])([])).toEqual([1, 2, 3])
    expect(union([])([1, 2, 3])).toEqual([1, 2, 3])
  })

  it('handles an empty string', () => {
    expect(union('abc')('')).toBe('abc')
    expect(union('')('abc')).toBe('abc')
  })

  it('handles an array', () => {
    expect(union([1, 2, 3])([1, 2, 3])).toEqual([1, 2, 3])
    expect(union([1, 2, 3])([2, 3, 4])).toEqual([1, 2, 3, 4])
    expect(union([1, 2, 3])([4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
    expect(union([1, 1])([1])).toEqual([1, 1])
  })

  it('handles a string', () => {
    expect(union('abc')('abc')).toBe('abc')
    expect(union('abc')('bcd')).toBe('abcd')
    expect(union('abc')('def')).toBe('abcdef')
    expect(union('aa')('a')).toBe('aa')
  })
})
