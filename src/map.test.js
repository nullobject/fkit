import map from './map'

describe('map', () => {
  it('handles an array', () => {
    const f = a => [a + 1]
    expect(map(f)([1, 2, 3])).toEqual([[2], [3], [4]])
  })

  it('handles a string', () => {
    const f = a => a.toUpperCase()
    expect(map(f)('foo')).toEqual(['F', 'O', 'O'])
  })
})
