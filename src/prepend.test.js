import prepend from './prepend'

describe('#prepend', () => {
  it('handles an empty array', () => {
    expect(prepend(1)([])).toEqual([1])
  })

  it('handles an empty string', () => {
    expect(prepend('foo')('')).toBe('foo')
  })

  it('handles an array', () => {
    expect(prepend(1)([2, 3, 4])).toEqual([1, 2, 3, 4])
    expect(prepend([1])([[2, 3], [4, 5, 6]])).toEqual([[1], [2, 3], [4, 5, 6]])
  })

  it('handles a string', () => {
    expect(prepend('foo')('bar')).toBe('foobar')
    expect(prepend('f')(['oo', 'bar'])).toEqual(['f', 'oo', 'bar'])
  })
})
