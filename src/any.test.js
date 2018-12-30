import any from './any'

describe('#any', () => {
  it('handles an array', () => {
    const p = a => a > 1
    expect(any(p)([1])).toBe(false)
    expect(any(p)([1, 2])).toBe(true)
    expect(any(p)([1, 2, 3])).toBe(true)
  })

  it('handles a string', () => {
    const p = a => a !== 'r'
    expect(any(p)('r')).toBe(false)
    expect(any(p)('ar')).toBe(true)
    expect(any(p)('bar')).toBe(true)
  })
})
