import last from './last'

describe('#last', () => {
  it('handles an empty array', () => {
    expect(last([])).toBeUndefined()
  })

  it('handles an empty string', () => {
    expect(last('')).toBeUndefined()
  })

  it('handles an array', () => {
    expect(last([1, 2, 3])).toBe(3)
  })

  it('handles a string', () => {
    expect(last('foo')).toBe('o')
  })
})
