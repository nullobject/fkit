import product from './product'

describe('#product', () => {
  it('handles an array of numbers', () => {
    expect(product([2, 3, 4])).toBe(24)
  })
})
