import omit from './omit'

describe('#omit', () => {
  const target = { name: 'Jane', age: 20, address: { city: 'Melbourne', country: 'Australia' } }

  it('copies the given object without the properties', () => {
    const result = omit(['age', 'address'])(target)
    expect(result).toEqual({ name: 'Jane' })
  })
})
