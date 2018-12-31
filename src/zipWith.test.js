import zipWith from './zipWith'

describe('#zipWith', () => {
  const f = (a, b) => a + b

  it('handles an empty array', () => {
    expect(zipWith(f)([1, 2, 3])([])).toEqual([])
    expect(zipWith(f)([])([3, 4, 5])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(zipWith(f)('foo')('')).toEqual([])
    expect(zipWith(f)('')('bar')).toEqual([])
  })

  it('handles an array', () => {
    expect(zipWith(f)([1, 2, 3])([4, 5, 6])).toEqual([5, 7, 9])
    expect(zipWith(f)([1, 2, 3])([4, 5])).toEqual([5, 7])
    expect(zipWith(f)([1, 2])([3, 4, 5])).toEqual([4, 6])
  })

  it('handles a string', () => {
    expect(zipWith(f)('foo')('bar')).toEqual(['fb', 'oa', 'or'])
    expect(zipWith(f)('foo')('ba')).toEqual(['fb', 'oa'])
    expect(zipWith(f)('fo')('bar')).toEqual(['fb', 'oa'])
  })
})
