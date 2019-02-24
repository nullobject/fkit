import concat from './concat'

describe('#concat', () => {
  it('handles an empty array', () => {
    expect(concat([])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(concat('')).toBe('')
  })

  it('handles a list of numbers', () => {
    expect(concat(1, 2, 3, 4, 5, 6)).toEqual([1, 2, 3, 4, 5, 6])
    expect(concat([1], [2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('handles a list of strings', () => {
    expect(concat('foobar')).toBe('foobar')
    expect(concat('f', 'oo', 'bar')).toBe('foobar')
  })

  it('handles an array of numbers', () => {
    expect(concat([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
    expect(concat([[1], [2, 3], [4, 5, 6]])).toEqual([1, 2, 3, 4, 5, 6])
    expect(concat([[[1]], [[2, 3]], [[4, 5, 6]]])).toEqual([[1], [2, 3], [4, 5, 6]])
    expect(concat([[[1]], [[2, 3], [4, 5, 6]]])).toEqual([[1], [2, 3], [4, 5, 6]])
  })

  it('handles an array of strings', () => {
    expect(concat(['foobar'])).toBe('foobar')
    expect(concat(['f', 'oo', 'bar'])).toBe('foobar')
    expect(concat([['f'], ['oo'], ['bar']])).toEqual(['f', 'oo', 'bar'])
    expect(concat([['f'], ['oo', 'bar']])).toEqual(['f', 'oo', 'bar'])
  })

  it('handles a heterogenous list', () => {
    expect(concat(1, 2, 3, 'foo')).toEqual([1, 2, 3, 'foo'])
    expect(concat(1, 2, 3, ['foo'])).toEqual([1, 2, 3, 'foo'])
    expect(concat([1, 2, 3], 'foo')).toEqual([1, 2, 3, 'foo'])
    expect(concat([1, 2, 3], ['foo'])).toEqual([1, 2, 3, 'foo'])
    expect(concat('foo', 1, 2, 3)).toEqual(['foo', 1, 2, 3])
    expect(concat('foo', [1, 2, 3])).toEqual(['foo', 1, 2, 3])
    expect(concat(['foo'], 1, 2, 3)).toEqual(['foo', 1, 2, 3])
    expect(concat(['foo'], [1, 2, 3])).toEqual(['foo', 1, 2, 3])
  })
})
