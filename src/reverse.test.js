import reverse from './reverse'

describe('#reverse', () => {
  it('handles an array', () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1])
  })

  it('handles a string', () => {
    expect(reverse('foo')).toBe('oof')
  })
})
