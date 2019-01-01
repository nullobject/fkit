import groupBy from './groupBy'

describe('#groupBy', () => {
  const f = (a, b) => a === b

  it('handles an empty array', () => {
    expect(groupBy(f, [])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(groupBy(f, '')).toEqual([])
  })

  it('handles an array', () => {
    expect(groupBy(f, [1, 2, 2, 3, 3, 3])).toEqual([[1], [2, 2], [3, 3, 3]])
  })

  it('handles a string', () => {
    expect(groupBy(f, 'Mississippi')).toEqual(['M', 'i', 'ss', 'i', 'ss', 'i', 'pp', 'i'])
  })

  it('calls the comparator function', () => {
    const spy = jest.fn()
    groupBy(spy, [1, 2])
    expect(spy).toHaveBeenCalledWith(2, 1)
  })
})
