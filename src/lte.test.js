import lte from './lte'

describe('#lte', () => {
  it('compares the values', () => {
    expect(lte(1)(2)).toBe(false)
    expect(lte(2)(1)).toBe(true)
    expect(lte(2)(2)).toBe(true)
  })
})
