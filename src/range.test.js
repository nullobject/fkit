import range from './range'

describe('#range', () => {
  it('returns an array of numbers', () => {
    expect(range(1)(3)).toEqual([1, 2, 3])
    expect(range(1)(1)).toEqual([1])
  })
})
