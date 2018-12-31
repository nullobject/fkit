import takeWhile from './takeWhile'

describe('#takeWhile', () => {
  const p = a => a < 3
  const q = a => a !== 'o'

  it('handles an empty array', () => {
    expect(takeWhile(p)([])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(takeWhile(q)('')).toBe('')
  })

  it('handles an array', () => {
    expect(takeWhile(p)([1, 2, 3])).toEqual([1, 2])
  })

  it('handles an array of strings', () => {
    expect(takeWhile(q)(['f', 'o', 'o'])).toEqual(['f'])
  })

  it('handles a string', () => {
    expect(takeWhile(q)('foo')).toBe('f')
  })
})
