import filter from './filter'

describe('filter', () => {
  it('handles an array', () => {
    const p = a => a > 1
    expect(filter(p)([])).toEqual([])
    expect(filter(p)([1, 2, 3])).toEqual([2, 3])
  })

  it('handles a string', () => {
    const p = a => a === 'o'
    expect(filter(p)('')).toBe('')
    expect(filter(p)('foo')).toBe('oo')
  })
})
