import compare from './compare'
import maximumBy from './maximumBy'

describe('#maximumBy', () => {
  it('handles an array of numbers', () => {
    expect(maximumBy(compare)([1, 2, 3])).toBe(3)
  })

  it('handles a string', () => {
    expect(maximumBy(compare)('foo')).toBe('o')
  })
})
