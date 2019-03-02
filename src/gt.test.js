import gt from './gt'

describe('gt', () => {
  it('compares the values', () => {
    expect(gt(1)(2)).toBe(true)
    expect(gt(2)(1)).toBe(false)
    expect(gt(2)(2)).toBe(false)
  })
})
