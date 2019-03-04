import intersperse from './intersperse'

describe('intersperse', () => {
  it('handles an array', () => {
    expect(intersperse(4)([])).toEqual([])
    expect(intersperse(4)([1, 2, 3])).toEqual([1, 4, 2, 4, 3])
    expect(intersperse(null)([1, 2, 3])).toEqual([1, null, 2, null, 3])
  })

  it('handles a string', () => {
    expect(intersperse('-')('')).toBe('')
    expect(intersperse('-')('foo')).toBe('f-o-o')
    expect(intersperse('')('foo')).toBe('foo')
  })
})
