import sum from './sum'

describe('#sum', () => {
  it('handles an array of numbers', () => {
    expect(sum([1, 2, 3])).toBe(6)
  })
})
