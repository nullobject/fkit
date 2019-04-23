import set from './set'

describe('set', () => {
  it('sets the given property', () => {
    const target = {
      name: 'Jane',
      age: 20,
      address: {
        city: 'Melbourne',
        country: 'Australia'
      }
    }

    expect(set('age')(21)(target)).toHaveProperty('age', 21)
    expect(set(['age'])(21)(target)).toHaveProperty('age', 21)

    expect(set('address.city')('Sydney')(target)).toHaveProperty('address.city', 'Sydney')
    expect(set(['address', 'city'])('Sydney')(target)).toHaveProperty('address.city', 'Sydney')
  })

  it('handles unknown properties', () => {
    expect(set('a')('foo')({})).toHaveProperty('a', 'foo')
    expect(set(['a'])('foo')({})).toHaveProperty('a', 'foo')

    expect(set('a.b')('foo')({})).toHaveProperty('a.b', 'foo')
    expect(set(['a', 'b'])('foo')({})).toHaveProperty('a.b', 'foo')
  })

  it('handles integer properties', () => {
    expect(set(1)('foo')({})).toHaveProperty('1', 'foo')
    expect(set([1])('foo')({})).toHaveProperty('1', 'foo')

    expect(set('a.1')('foo')({})).toHaveProperty('a.1', 'foo')
    expect(set(['a', 1])('foo')({})).toHaveProperty('a.1', 'foo')
  })
})
