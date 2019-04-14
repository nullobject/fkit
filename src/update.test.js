import always from './always'
import inc from './inc'
import update from './update'

describe('update', () => {
  it('updates the given property', () => {
    const target = {
      name: 'Jane',
      age: 20,
      address: {
        city: 'Melbourne',
        country: 'Australia'
      }
    }

    expect(update('age')(inc)(target)).toHaveProperty('age', 21)
    expect(update(['age'])(inc)(target)).toHaveProperty('age', 21)

    expect(update('address.city')(always('Sydney'))(target)).toHaveProperty('address.city', 'Sydney')
    expect(update(['address', 'city'])(always('Sydney'))(target)).toHaveProperty('address.city', 'Sydney')
  })

  it('handles unknown properties', () => {
    expect(update('a')(always('foo'))({})).toHaveProperty('a', 'foo')
    expect(update(['a'])(always('foo'))({})).toHaveProperty('a', 'foo')

    expect(update('a.b')(always('foo'))({})).toHaveProperty('a.b', 'foo')
    expect(update(['a', 'b'])(always('foo'))({})).toHaveProperty('a.b', 'foo')
  })
})
