import isSuffixOf from './isSuffixOf'

describe('#isSuffixOf', () => {
  it('handles an array', () => {
    expect(isSuffixOf([])([])).toBe(true)
    expect(isSuffixOf([1])([])).toBe(false)
    expect(isSuffixOf([1])([1, 2, 3])).toBe(false)
    expect(isSuffixOf([2, 3])([1, 2, 3])).toBe(true)
  })

  it('handles a string', () => {
    expect(isSuffixOf('')('')).toBe(true)
    expect(isSuffixOf('f')('')).toBe(false)
    expect(isSuffixOf('f')('foo')).toBe(false)
    expect(isSuffixOf('oo')('foo')).toBe(true)
  })
})
