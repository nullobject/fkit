import startsWith from './startsWith'

describe('startsWith', () => {
  it('handles an empty array', () => {
    expect(startsWith([1, 2, 3])([])).toBe(true)
    expect(startsWith([])([1, 2, 3])).toBe(true)
  })

  it('handles an empty string', () => {
    expect(startsWith('abc')('')).toBe(true)
    expect(startsWith('')('abc')).toBe(true)
  })

  it('handles an array', () => {
    expect(startsWith([1])([1, 2, 3])).toBe(true)
    expect(startsWith([3])([1, 2, 3])).toBe(false)
  })

  it('handles a string', () => {
    expect(startsWith('f')('foo')).toBe(true)
    expect(startsWith('o')('foo')).toBe(false)
  })
})
