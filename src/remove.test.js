import remove from './remove'

describe('remove', () => {
  it('handles an empty array', () => {
    expect(remove(1)([])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(remove('a')('')).toBe('')
  })

  it('handles an array', () => {
    expect(remove(1)([1, 2, 3])).toEqual([2, 3])
    expect(remove(2)([1, 2, 3])).toEqual([1, 3])
    expect(remove(3)([1, 2, 3])).toEqual([1, 2])
    expect(remove(1)([1, 1])).toEqual([1])
  })

  it('handles a string', () => {
    expect(remove('a')('abc')).toBe('bc')
    expect(remove('b')('abc')).toBe('ac')
    expect(remove('c')('abc')).toBe('ab')
    expect(remove('a')('aa')).toBe('a')
  })
})
