import scanRight from './scanRight'

describe('scanRight', () => {
  it('handles an array', () => {
    function f (a, b) { return b.concat(a) }
    expect(scanRight(f)([])([1, 2, 3])).toEqual([[3, 2, 1], [3, 2], [3], []])
  })

  it('handles a string', () => {
    function f (a, b) { return b + a }
    expect(scanRight(f)('')('foo')).toEqual(['oof', 'oo', 'o', ''])
  })
})
