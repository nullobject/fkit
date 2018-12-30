import tails from './tails'

describe('#tails', () => {
  it('handles an empty array', () => {
    expect(tails([])).toEqual([[]])
  })

  it('handles an empty string', () => {
    expect(tails('')).toEqual([''])
  })

  it('handles an array', () => {
    expect(tails([1, 2, 3])).toEqual([[1, 2, 3], [2, 3], [3], []])
  })

  it('handles a string', () => {
    expect(tails('foo')).toEqual(['foo', 'oo', 'o', ''])
  })
})
