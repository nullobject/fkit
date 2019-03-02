import minimum from './minimum'

describe('minimum', () => {
  it('handles an array of numbers', () => {
    expect(minimum([1, 2, 3])).toBe(1)
  })

  it('handles a string', () => {
    expect(minimum('foo')).toBe('f')
  })
})
