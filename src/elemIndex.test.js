import elemIndex from './elemIndex'

describe('elemIndex', () => {
  it('handles an array', () => {
    expect(elemIndex(0)([1, 2, 3])).toBeUndefined()
    expect(elemIndex(1)([1, 2, 3])).toBe(0)
  })

  it('handles a string', () => {
    expect(elemIndex('b')('foo')).toBeUndefined()
    expect(elemIndex('o')('foo')).toBe(1)
  })
})
