import pairs from './pairs'

describe('#pairs', () => {
  it('returns the key-value pairs of the given object', () => {
    const target = { name: 'Jane', age: 20 }
    const result = pairs(target)
    expect(result).toEqual([['name', 'Jane'], ['age', 20]])
  })
})
