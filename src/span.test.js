import span from './span'

describe('span', () => {
  const p = a => a < 3
  const q = a => a !== 'o'

  it('handles an empty array', () => {
    expect(span(p)([])).toEqual([[], []])
  })

  it('handles an empty string', () => {
    expect(span(q)('')).toEqual(['', ''])
  })

  it('handles an array', () => {
    expect(span(p)([1, 2, 3])).toEqual([[1, 2], [3]])
  })

  it('handles a string', () => {
    expect(span(q)('foo')).toEqual(['f', 'oo'])
  })
})
