import unionBy from './unionBy'

describe('#unionBy', () => {
  const f = (a, b) => a === b

  it('handles an empty array', () => {
    expect(unionBy(f)([1, 2, 3])([])).toEqual([1, 2, 3])
    expect(unionBy(f)([])([1, 2, 3])).toEqual([1, 2, 3])
  })

  it('handles an empty string', () => {
    expect(unionBy(f)('abc')('')).toBe('abc')
    expect(unionBy(f)('')('abc')).toBe('abc')
  })

  it('handles an array', () => {
    expect(unionBy(f)([1, 2, 3])([1, 2, 3])).toEqual([1, 2, 3])
    expect(unionBy(f)([1, 2, 3])([2, 3, 4])).toEqual([1, 2, 3, 4])
    expect(unionBy(f)([1, 2, 3])([4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
    expect(unionBy(f)([1, 1])([1])).toEqual([1, 1])
  })

  it('handles a string', () => {
    expect(unionBy(f)('abc')('abc')).toBe('abc')
    expect(unionBy(f)('abc')('bcd')).toBe('abcd')
    expect(unionBy(f)('abc')('def')).toBe('abcdef')
    expect(unionBy(f)('aa')('a')).toBe('aa')
  })
})
