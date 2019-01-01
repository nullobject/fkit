import partition from './partition'

describe('#partition', () => {
  it('handles an array', () => {
    const p = a => a > 1
    expect(partition(p)([])).toEqual([[], []])
    expect(partition(p)([1, 2, 3])).toEqual([[2, 3], [1]])
  })

  it('handles a string', () => {
    const p = a => a === 'o'
    expect(partition(p)('')).toEqual(['', ''])
    expect(partition(p)('foo')).toEqual(['oo', 'f'])
  })
})
