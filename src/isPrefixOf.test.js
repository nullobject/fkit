import isPrefixOf from './isPrefixOf'

describe('#isPrefixOf', () => {
  it('handles an array', () => {
    expect(isPrefixOf([])([])).toBe(true)
    expect(isPrefixOf([1])([])).toBe(false)
    expect(isPrefixOf([1])([1, 2, 3])).toBe(true)
    expect(isPrefixOf([2, 3])([1, 2, 3])).toBe(false)
  })

  it('handles a string', () => {
    expect(isPrefixOf('')('')).toBe(true)
    expect(isPrefixOf('f')('')).toBe(false)
    expect(isPrefixOf('f')('foo')).toBe(true)
    expect(isPrefixOf('oo')('foo')).toBe(false)
  })
})
