import elemIndices from './elemIndices'

describe('#elemIndices', () => {
  it('handles an array', () => {
    expect(elemIndices(0)([1, 2, 3])).toEqual([])
    expect(elemIndices(1)([1, 2, 3])).toEqual([0])
  })

  it('handles a string', () => {
    expect(elemIndices('b')('foo')).toEqual([])
    expect(elemIndices('o')('foo')).toEqual([1, 2])
  })
})
