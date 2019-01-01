import compare from './compare'
import minimumBy from './minimumBy'

describe('#minimumBy', () => {
  it('handles an array of numbers', () => {
    expect(minimumBy(compare)([1, 2, 3])).toBe(1)
  })

  it('handles a string', () => {
    expect(minimumBy(compare)('foo')).toBe('f')
  })
})
