import splitAt from './splitAt'

describe('#splitAt', () => {
  it('handles an empty array', () => {
    expect(splitAt(1)([])).toEqual([[], []])
  })

  it('handles an empty string', () => {
    expect(splitAt(1)('')).toEqual(['', ''])
  })

  it('handles an array', () => {
    expect(splitAt(1)([1, 2, 3])).toEqual([[1], [2, 3]])
  })

  it('handles a string', () => {
    expect(splitAt(1)('foo')).toEqual(['f', 'oo'])
  })
})
