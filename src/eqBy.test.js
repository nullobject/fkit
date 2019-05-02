import eqBy from './eqBy'

describe('eqBy', () => {
  it('returns true if the values are equal', () => {
    expect(eqBy(Math.abs)(1)(-1)).toBe(true)
    expect(eqBy(Math.abs)(-1)(1)).toBe(true)
  })

  it('returns false otherwise', () => {
    expect(eqBy(Math.abs)(1)(2)).toBe(false)
    expect(eqBy(Math.abs)(2)(1)).toBe(false)
  })
})
