import has from './has'

describe('has', () => {
  it('returns true if the object contains the given key path', () => {
    const target = {
      name: 'Jane',
      age: 20,
      address: {
        city: 'Melbourne',
        country: 'Australia'
      }
    }

    expect(has('age')(target)).toBe(true)
    expect(has(['age'])(target)).toBe(true)

    expect(has('address.city')(target)).toBe(true)
    expect(has(['address', 'city'])(target)).toBe(true)
  })

  it('returns false otherwise', () => {
    expect(has('a')({})).toBe(false)
    expect(has(['a'])({})).toBe(false)

    expect(has('a.b')({})).toBe(false)
    expect(has(['a', 'b'])({})).toBe(false)
  })

  it('handles integer properties', () => {
    expect(has(1)({ 1: 'foo' })).toBe(true)
    expect(has([1])({ 1: 'foo' })).toBe(true)

    expect(has('a.1')({ a: { 1: 'foo' } })).toBe(true)
    expect(has(['a', 1])({ a: { 1: 'foo' } })).toBe(true)
  })
})
