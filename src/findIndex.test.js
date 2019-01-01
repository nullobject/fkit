import findIndex from './findIndex'

describe('#findIndex', () => {
  it('handles an array', () => {
    const p = a => a > 1
    expect(findIndex(p)([])).toBeUndefined()
    expect(findIndex(p)([1, 2, 3])).toBe(1)
  })

  it('handles a string', () => {
    const p = a => a === 'o'
    expect(findIndex(p)('')).toBeUndefined()
    expect(findIndex(p)('foo')).toBe(1)
  })
})
