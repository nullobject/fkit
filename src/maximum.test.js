import maximum from './maximum'

describe('maximum', () => {
  it('handles an array of numbers', () => {
    expect(maximum([1, 2, 3])).toBe(3)
  })

  it('handles a string', () => {
    expect(maximum('foo')).toBe('o')
  })
})
