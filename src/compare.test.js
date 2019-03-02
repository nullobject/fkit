import compare from './compare'

describe('compare', () => {
  it('compares two numbers', () => {
    expect(compare(1)(2)).toBe(-1)
    expect(compare(2)(1)).toBe(1)
    expect(compare(2)(2)).toBe(0)
  })

  it('compares two strings', () => {
    expect(compare('bar')('foo')).toBe(-1)
    expect(compare('foo')('bar')).toBe(1)
    expect(compare('bar')('bar')).toBe(0)
  })
})
