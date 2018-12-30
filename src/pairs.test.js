import pairs from './pairs'

describe('#pairs', () => {
  const target = { name: 'Jane', age: 20 }

  it('returns the key-value pairs of the given object', () => {
    const result = pairs(target)
    expect(result).toEqual([['name', 'Jane'], ['age', 20]])
  })
})
