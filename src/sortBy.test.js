import sortBy from './sortBy'

describe('sortBy', () => {
  const c = (a, b) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  }

  it('handles an array of numbers', () => {
    expect(sortBy(c)([2, 3, 1])).toEqual([3, 2, 1])
  })

  it('handles a string', () => {
    expect(sortBy(c)('bca')).toBe('cba')
  })
})
