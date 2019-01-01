import dropWhile from './dropWhile'

describe('#dropWhile', () => {
  const p = a => a < 3
  const q = a => a !== 'o'

  it('handles an empty array', () => {
    expect(dropWhile(p)([])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(dropWhile(q)('')).toBe('')
  })

  it('handles an array', () => {
    expect(dropWhile(p)([1, 2, 3])).toEqual([3])
  })

  it('handles an array of strings', () => {
    expect(dropWhile(q)(['f', 'o', 'o'])).toEqual(['o', 'o'])
  })

  it('handles a string', () => {
    expect(dropWhile(q)('foo')).toBe('oo')
  })
})
