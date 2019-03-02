import replicate from './replicate'

describe('replicate', () => {
  it('handles a number', () => {
    expect(replicate(0)(1)).toEqual([])
    expect(replicate(3)(1)).toEqual([1, 1, 1])
  })

  it('handles an array of numbers', () => {
    expect(replicate(0)([1])).toEqual([])
    expect(replicate(3)([1])).toEqual([[1], [1], [1]])
  })

  it('handles an array of strings', () => {
    expect(replicate(0)(['a'])).toEqual([])
    expect(replicate(3)(['a'])).toEqual(['a', 'a', 'a'])
  })

  it('handles a string', () => {
    expect(replicate(0)('a')).toBe('')
    expect(replicate(3)('a')).toBe('aaa')
  })
})
