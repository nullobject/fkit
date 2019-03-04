import scan from './scan'

describe('scan', () => {
  it('handles an array', () => {
    function f (b, a) { return [a].concat(b) }
    expect(scan(f)([])([1, 2, 3])).toEqual([[], [1], [2, 1], [3, 2, 1]])
  })

  it('handles a string', () => {
    function f (b, a) { return a + b }
    expect(scan(f)('')('foo')).toEqual(['', 'f', 'of', 'oof'])
  })
})
