import head from './head'

describe('#head', () => {
  it('handles an empty array', () => {
    expect(head([])).toBeUndefined()
  })

  it('handles an empty string', () => {
    expect(head('')).toBeUndefined()
  })

  it('handles an array', () => {
    expect(head([1, 2, 3])).toBe(1)
  })

  it('handles a string', () => {
    expect(head('foo')).toBe('f')
  })
})
