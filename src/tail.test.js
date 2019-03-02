import tail from './tail'

describe('tail', () => {
  it('handles an empty array', () => {
    expect(tail([])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(tail('')).toBe('')
  })

  it('handles an array', () => {
    expect(tail([1, 2, 3])).toEqual([2, 3])
  })

  it('handles a string', () => {
    expect(tail('foo')).toBe('oo')
  })
})
