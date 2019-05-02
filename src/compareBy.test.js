import compareBy from './compareBy'
import toUpper from './toUpper'

describe('compareBy', () => {
  it('compares two numbers', () => {
    expect(compareBy(Math.abs)(1)(-2)).toBe(-1)
    expect(compareBy(Math.abs)(2)(-1)).toBe(1)
    expect(compareBy(Math.abs)(2)(-2)).toBe(0)
  })

  it('compares two strings', () => {
    expect(compareBy(toUpper)('bar')('FOO')).toBe(-1)
    expect(compareBy(toUpper)('foo')('BAR')).toBe(1)
    expect(compareBy(toUpper)('bar')('BAR')).toBe(0)
  })
})
