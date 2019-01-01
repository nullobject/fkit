import foldRight from './foldRight'

describe('#foldRight', () => {
  it('handles an array', () => {
    function f (a, b) { return b.concat(a) }
    expect(foldRight(f)([])([1, 2, 3])).toEqual([3, 2, 1])
  })

  it('handles a string', () => {
    function f (a, b) { return b + a }
    expect(foldRight(f)('')('foo')).toBe('oof')
  })
})
