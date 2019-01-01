import keys from './keys'

describe('#keys', () => {
  it('returns the keys of the given object', () => {
    const target = { name: 'Jane', age: 20 }
    const result = keys(target)
    expect(result).toEqual(['name', 'age'])
  })
})
