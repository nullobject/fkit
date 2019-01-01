import between from './between'

describe('#between', () => {
  it('compares the values', () => {
    expect(between(1)(3)(0)).toBe(false)
    expect(between(1)(3)(1)).toBe(true)
    expect(between(1)(3)(2)).toBe(true)
    expect(between(1)(3)(4)).toBe(false)
  })
})
