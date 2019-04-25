import endsWith from './endsWith'

describe('endsWith', () => {
  it('handles an empty array', () => {
    expect(endsWith([1, 2, 3])([])).toBe(true)
    expect(endsWith([])([1, 2, 3])).toBe(true)
  })

  it('handles an empty string', () => {
    expect(endsWith('abc')('')).toBe(true)
    expect(endsWith('')('abc')).toBe(true)
  })

  it('handles an array', () => {
    expect(endsWith([3])([1, 2, 3])).toBe(true)
    expect(endsWith([1])([1, 2, 3])).toBe(false)
  })

  it('handles a string', () => {
    expect(endsWith('o')('foo')).toBe(true)
    expect(endsWith('f')('foo')).toBe(false)
  })
})
