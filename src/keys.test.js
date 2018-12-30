import keys from './keys'

describe('#keys', () => {
  const target = { name: 'Jane', age: 20 }

  it('returns the keys of the given object', () => {
    const result = keys(target)
    expect(result).toEqual(['name', 'age'])
  })
})
