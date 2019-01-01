import cartesian from './cartesian'

describe('#cartesian', () => {
  it('handles an empty array', () => {
    expect(cartesian([1, 2, 3])([])).toEqual([])
    expect(cartesian([])([4, 5, 6])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(cartesian('foo')('')).toEqual([])
    expect(cartesian('')('bar')).toEqual([])
  })

  it('handles an array', () => {
    expect(cartesian([1, 2, 3])([4, 5, 6])).toEqual(
      [
        [1, 4], [1, 5], [1, 6],
        [2, 4], [2, 5], [2, 6],
        [3, 4], [3, 5], [3, 6]
      ]
    )
  })

  it('handles a string', () => {
    expect(cartesian('foo')('bar')).toEqual(
      [
        ['f', 'b'], ['f', 'a'], ['f', 'r'],
        ['o', 'b'], ['o', 'a'], ['o', 'r'],
        ['o', 'b'], ['o', 'a'], ['o', 'r']
      ]
    )
  })
})
