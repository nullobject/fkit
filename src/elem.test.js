import elem from './elem'

describe('elem', () => {
  it('handles an array', () => {
    expect(elem(0)([1, 2, 3])).toBe(false)
    expect(elem(1)([1, 2, 3])).toBe(true)
  })

  it('handles a string', () => {
    expect(elem('b')('foo')).toBe(false)
    expect(elem('o')('foo')).toBe(true)
  })
})
