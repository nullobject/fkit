import groupBy from './groupBy'
import id from './id'

describe('groupBy', () => {
  it('handles an empty array', () => {
    expect(groupBy(id, [])).toEqual({})
  })

  it('handles an empty string', () => {
    expect(groupBy(id, '')).toEqual({})
  })

  it('handles an array', () => {
    expect(groupBy(id, [1, 2, 2, 3, 3, 3])).toEqual({ '1': [1], '2': [2, 2], '3': [3, 3, 3] })
  })

  it('handles a string', () => {
    expect(groupBy(id, 'Mississippi')).toEqual({ 'M': ['M'], 'i': ['i', 'i', 'i', 'i'], p: ['p', 'p'], 's': ['s', 's', 's', 's'] })
  })

  it('handles an grouping by a key path', () => {
    const a = { address: { city: 'Melbourne' } }
    const b = { address: { city: 'Sydney' } }
    expect(groupBy('address.city', [a, b])).toEqual({ 'Melbourne': [a], 'Sydney': [b] })
  })
})
