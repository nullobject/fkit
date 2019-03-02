import intersect from './intersect'

describe('intersect', () => {
  it('handles an empty array', () => {
    expect(intersect([1, 2, 3])([])).toEqual([])
    expect(intersect([])([1, 2, 3])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(intersect('abc')('')).toBe('')
    expect(intersect('')('abc')).toBe('')
  })

  it('handles an array', () => {
    expect(intersect([1, 2, 3])([1, 2, 3])).toEqual([1, 2, 3])
    expect(intersect([1, 2, 3])([2, 3, 4])).toEqual([2, 3])
    expect(intersect([1, 2, 3])([4, 5, 6])).toEqual([])
    expect(intersect([1, 1])([1])).toEqual([1, 1])
  })

  it('handles a string', () => {
    expect(intersect('abc')('abc')).toBe('abc')
    expect(intersect('abc')('bcd')).toBe('bc')
    expect(intersect('abc')('def')).toBe('')
    expect(intersect('aa')('a')).toBe('aa')
  })
})
