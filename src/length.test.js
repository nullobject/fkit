import length from './length'

describe('length', () => {
  it('handles an empty array', () => {
    expect(length([])).toBe(0)
  })

  it('handles an empty string', () => {
    expect(length('')).toBe(0)
  })

  it('handles an array', () => {
    expect(length([1, 2, 3])).toBe(3)
  })

  it('handles a string', () => {
    expect(length('foo')).toBe(3)
  })
})
