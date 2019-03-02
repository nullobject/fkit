import omit from './omit'

describe('omit', () => {
  it('copies the given object without the properties', () => {
    const target = { name: 'Jane', age: 20, address: { city: 'Melbourne', country: 'Australia' } }
    const result = omit(['age', 'address'])(target)
    expect(result).toEqual({ name: 'Jane' })
  })
})
