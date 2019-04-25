import eq from './eq'

describe('eq', () => {
  it('returns true if the arguments are equal', () => {
    expect(eq(1)(1)).toBe(true)
  })

  it('returns false otherwise', () => {
    expect(eq(1)(2)).toBe(false)
  })
})
