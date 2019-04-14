import get from './get'

describe('get', () => {
  it('returns the property at the given key path', () => {
    const target = {
      name: 'Jane',
      age: 20,
      address: {
        city: 'Melbourne',
        country: 'Australia'
      }
    }

    expect(get(['name'])(target)).toBe('Jane')
    expect(get('name')(target)).toBe('Jane')

    expect(get(['age'])(target)).toBe(20)
    expect(get('age')(target)).toBe(20)

    expect(get(['address', 'city'])(target)).toBe('Melbourne')
    expect(get('address.city')(target)).toBe('Melbourne')

    expect(get(['foo', 'bar'])(target)).toBeUndefined()
    expect(get('foo.bar')(target)).toBeUndefined()
  })
})
