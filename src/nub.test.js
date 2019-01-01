import nub from './nub'

describe('#nub', () => {
  it('handles an empty array', () => {
    expect(nub([])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(nub('')).toBe('')
  })

  it('handles an array', () => {
    expect(nub([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3])
  })

  it('handles a string', () => {
    expect(nub('abbccc')).toBe('abc')
  })
})
