import find from './find'

describe('find', () => {
  it('handles an array', () => {
    const p = a => a > 1
    expect(find(p)([])).toBeUndefined()
    expect(find(p)([1, 2, 3])).toBe(2)
  })

  it('handles a string', () => {
    const p = a => a === 'o'
    expect(find(p)('')).toBeUndefined()
    expect(find(p)('foo')).toBe('o')
  })
})
