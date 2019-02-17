import concatMap from './concatMap'

describe('#concatMap', () => {
  const f = a => [a, 0]
  const g = a => [[a, 0]]
  const h = a => [a, '-']
  const i = a => a + '-'
  const j = a => [[a, '-']]

  it('handles an empty array', () => {
    expect(concatMap(f)([])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(concatMap(h)('')).toBe('')
  })

  it('handles an array of numbers', () => {
    expect(concatMap(f)([1, 2, 3])).toEqual([1, 0, 2, 0, 3, 0])
    expect(concatMap(g)([1, 2, 3])).toEqual([[1, 0], [2, 0], [3, 0]])
  })

  it('handles an array of strings', () => {
    expect(concatMap(h)(['f', 'o', 'o'])).toEqual(['f', '-', 'o', '-', 'o', '-'])
    expect(concatMap(i)(['f', 'o', 'o'])).toEqual(['f-', 'o-', 'o-'])
    expect(concatMap(j)(['f', 'o', 'o'])).toEqual([['f', '-'], ['o', '-'], ['o', '-']])
  })

  it('handles a string', () => {
    expect(concatMap(h)('foo')).toBe('f-o-o-')
    expect(concatMap(i)('foo')).toBe('f-o-o-')
    expect(concatMap(j)('foo')).toEqual(['f-', 'o-', 'o-'])
  })
})
