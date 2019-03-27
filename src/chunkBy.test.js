import chunkBy from './chunkBy'

describe('chunkBy', () => {
  const f = (a, b) => a === b

  it('handles an empty array', () => {
    expect(chunkBy(f, [])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(chunkBy(f, '')).toEqual([])
  })

  it('handles an array', () => {
    expect(chunkBy(f, [1, 2, 2, 3, 3, 3])).toEqual([[1], [2, 2], [3, 3, 3]])
  })

  it('handles a string', () => {
    expect(chunkBy(f, 'Mississippi')).toEqual(['M', 'i', 'ss', 'i', 'ss', 'i', 'pp', 'i'])
  })

  it('calls the comparator function', () => {
    const spy = jest.fn()
    chunkBy(spy, [1, 2])
    expect(spy).toHaveBeenCalledWith(2, 1)
  })
})
