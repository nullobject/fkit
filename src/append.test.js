import append from './append'

describe('append', () => {
  it('handles an empty array', () => {
    expect(append(4)([])).toEqual([4])
  })

  it('handles an empty string', () => {
    expect(append('bar')('')).toBe('bar')
  })

  it('handles an array', () => {
    expect(append(4)([1, 2, 3])).toEqual([1, 2, 3, 4])
    expect(append([4, 5, 6])([[1], [2, 3]])).toEqual([[1], [2, 3], [4, 5, 6]])
  })

  it('handles a string', () => {
    expect(append('bar')('foo')).toBe('foobar')
    expect(append('bar')(['f', 'oo'])).toEqual(['f', 'oo', 'bar'])
  })
})
