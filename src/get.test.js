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

    expect(get('age')(target)).toBe(20)
    expect(get(['age'])(target)).toBe(20)

    expect(get('address.city')(target)).toBe('Melbourne')
    expect(get(['address', 'city'])(target)).toBe('Melbourne')
  })

  it('handles unknown properties', () => {
    expect(get('a')({})).toBeUndefined()
    expect(get(['a'])({})).toBeUndefined()

    expect(get('a.b')({})).toBeUndefined()
    expect(get(['a', 'b'])({})).toBeUndefined()
  })
})
