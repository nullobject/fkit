import empty from './empty'

describe('empty', () => {
  it('handles an empty array', () => {
    expect(empty([])).toBe(true)
  })

  it('handles an empty string', () => {
    expect(empty('')).toBe(true)
  })

  it('handles an array', () => {
    expect(empty([1, 2, 3])).toBe(false)
  })

  it('handles a string', () => {
    expect(empty('foo')).toBe(false)
  })
})
