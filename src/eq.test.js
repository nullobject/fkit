import eq from './eq'

describe('#eq', () => {
  it('returns true if the arguments are eq', () => {
    expect(eq(1, 1)).toBe(true)
    expect(eq(1, 2)).toBe(false)
  })
})
