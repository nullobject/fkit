import inits from './inits'

describe('inits', () => {
  it('handles an empty array', () => {
    expect(inits([])).toEqual([[]])
  })

  it('handles an empty string', () => {
    expect(inits('')).toEqual([''])
  })

  it('handles an array', () => {
    expect(inits([1, 2, 3])).toEqual([[], [1], [1, 2], [1, 2, 3]])
  })

  it('handles a string', () => {
    expect(inits('foo')).toEqual(['', 'f', 'fo', 'foo'])
  })
})
