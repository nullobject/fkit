import differenceBy from './differenceBy'

describe('#differenceBy', () => {
  const f = (a, b) => a === b

  it('handles an empty array', () => {
    expect(differenceBy(f)([1, 2, 3])([])).toEqual([1, 2, 3])
    expect(differenceBy(f)([])([1, 2, 3])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(differenceBy(f)('abc')('')).toBe('abc')
    expect(differenceBy(f)('')('abc')).toBe('')
  })

  it('handles an array', () => {
    expect(differenceBy(f)([1, 2, 3])([1, 2, 3])).toEqual([])
    expect(differenceBy(f)([1, 2, 3])([2, 3, 4])).toEqual([1])
    expect(differenceBy(f)([1, 2, 3])([4, 5, 6])).toEqual([1, 2, 3])
    expect(differenceBy(f)([1, 1])([1])).toEqual([1])
  })

  it('handles a string', () => {
    expect(differenceBy(f)('abc')('abc')).toBe('')
    expect(differenceBy(f)('abc')('bcd')).toBe('a')
    expect(differenceBy(f)('abc')('def')).toBe('abc')
    expect(differenceBy(f)('aa')('a')).toBe('a')
  })
})
