import zip from './zip'

describe('#zip', () => {
  it('handles an empty array', () => {
    expect(zip([1, 2, 3])([])).toEqual([])
    expect(zip([])([3, 4, 5])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(zip('foo')('')).toEqual([])
    expect(zip('')('bar')).toEqual([])
  })

  it('handles an array', () => {
    expect(zip([1, 2, 3])([4, 5, 6])).toEqual([[1, 4], [2, 5], [3, 6]])
    expect(zip([1, 2, 3])([4, 5])).toEqual([[1, 4], [2, 5]])
    expect(zip([1, 2])([4, 5, 6])).toEqual([[1, 4], [2, 5]])
  })

  it('handles a string', () => {
    expect(zip('foo')('bar')).toEqual([['f', 'b'], ['o', 'a'], ['o', 'r']])
    expect(zip('foo')('ba')).toEqual([['f', 'b'], ['o', 'a']])
    expect(zip('fo')('bar')).toEqual([['f', 'b'], ['o', 'a']])
  })
})
