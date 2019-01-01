import clamp from './clamp'

describe('#clamp', () => {
  it('clamps the number', () => {
    expect(clamp(1)(3)(0)).toEqual(1)
    expect(clamp(1)(3)(1)).toEqual(1)
    expect(clamp(1)(3)(2)).toEqual(2)
    expect(clamp(1)(3)(4)).toEqual(3)
  })
})
