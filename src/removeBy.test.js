import removeBy from './removeBy'

describe('#removeBy', () => {
  const f = (a, b) => a === b

  it('handles an empty array', () => {
    expect(removeBy(f, 1)([])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(removeBy(f, 'a')('')).toBe('')
  })

  it('handles an array', () => {
    expect(removeBy(f, 1)([1, 2, 3])).toEqual([2, 3])
    expect(removeBy(f, 2)([1, 2, 3])).toEqual([1, 3])
    expect(removeBy(f, 3)([1, 2, 3])).toEqual([1, 2])
    expect(removeBy(f, 1)([1, 1])).toEqual([1])
  })

  it('handles a string', () => {
    expect(removeBy(f, 'a')('abc')).toBe('bc')
    expect(removeBy(f, 'b')('abc')).toBe('ac')
    expect(removeBy(f, 'c')('abc')).toBe('ab')
    expect(removeBy(f, 'a')('aa')).toBe('a')
  })
})
