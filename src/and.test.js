import and from './and'

describe('and', () => {
  it('ANDs the values', () => {
    expect(and(false)(false)).toBe(false)
    expect(and(false)(true)).toBe(false)
    expect(and(true)(false)).toBe(false)
    expect(and(true)(true)).toBe(true)
  })
})
