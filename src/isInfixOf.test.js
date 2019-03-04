import isInfixOf from './isInfixOf'

describe('isInfixOf', () => {
  it('handles an array', () => {
    expect(isInfixOf([])([])).toBe(true)
    expect(isInfixOf([1])([1, 2, 3])).toBe(true)
    expect(isInfixOf([2, 3])([1, 2, 3])).toBe(true)
    expect(isInfixOf([1, 2, 3])([1, 2, 3])).toBe(true)
    expect(isInfixOf([3, 2])([1, 2, 3])).toBe(false)
    expect(isInfixOf([1])([])).toBe(false)
  })

  it('handles a string', () => {
    expect(isInfixOf('')('')).toBe(true)
    expect(isInfixOf('f')('foo')).toBe(true)
    expect(isInfixOf('oo')('foo')).toBe(true)
    expect(isInfixOf('foo')('foo')).toBe(true)
    expect(isInfixOf('f')('')).toBe(false)
  })
})
