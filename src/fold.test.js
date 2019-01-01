import fold from './fold'

describe('#fold', () => {
  it('handles an array', () => {
    function f (b, a) { return [a].concat(b) }
    expect(fold(f)([])([1, 2, 3])).toEqual([3, 2, 1])
  })

  it('handles a string', () => {
    function f (b, a) { return a + b }
    expect(fold(f)('')('foo')).toBe('oof')
  })
})
