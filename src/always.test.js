import always from './always'

describe('#always', () => {
  it('returns a function that returns a constant value', () => {
    const f = always(1)
    expect(f()).toBe(1)
  })
})
