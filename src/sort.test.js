import sort from './sort'

describe('#sort', () => {
  it('handles an array of numbers', () => {
    expect(sort([2, 3, 1])).toEqual([1, 2, 3])
  })

  it('handles a string', () => {
    expect(sort('bca')).toBe('abc')
  })
})
