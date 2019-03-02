import intersectBy from './intersectBy'

describe('intersectBy', () => {
  const f = (a, b) => a === b

  it('handles an empty array', () => {
    expect(intersectBy(f)([1, 2, 3])([])).toEqual([])
    expect(intersectBy(f)([])([1, 2, 3])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(intersectBy(f)('abc')('')).toBe('')
    expect(intersectBy(f)('')('abc')).toBe('')
  })

  it('handles an array', () => {
    expect(intersectBy(f)([1, 2, 3])([1, 2, 3])).toEqual([1, 2, 3])
    expect(intersectBy(f)([1, 2, 3])([2, 3, 4])).toEqual([2, 3])
    expect(intersectBy(f)([1, 2, 3])([4, 5, 6])).toEqual([])
    expect(intersectBy(f)([1, 1])([1])).toEqual([1, 1])
  })

  it('handles a string', () => {
    expect(intersectBy(f)('abc')('abc')).toBe('abc')
    expect(intersectBy(f)('abc')('bcd')).toBe('bc')
    expect(intersectBy(f)('abc')('def')).toBe('')
    expect(intersectBy(f)('aa')('a')).toBe('aa')
  })
})
