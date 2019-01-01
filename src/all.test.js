import all from './all'

describe('#all', () => {
  it('handles an array', () => {
    const p = a => a > 1
    expect(all(p)([3])).toBe(true)
    expect(all(p)([2, 3])).toBe(true)
    expect(all(p)([3, 2, 1])).toBe(false)
  })

  it('handles a string', () => {
    const p = a => a !== 'r'
    expect(all(p)('b')).toBe(true)
    expect(all(p)('ba')).toBe(true)
    expect(all(p)('bar')).toBe(false)
  })
})
