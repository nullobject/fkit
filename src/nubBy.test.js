import nubBy from './nubBy'

describe('nubBy', () => {
  const f = (a, b) => a === b

  it('handles an empty array', () => {
    expect(nubBy(f, [])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(nubBy(f, '')).toBe('')
  })

  it('handles an array', () => {
    expect(nubBy(f, [1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3])
  })

  it('handles a string', () => {
    expect(nubBy(f, 'abbccc')).toBe('abc')
  })
})
