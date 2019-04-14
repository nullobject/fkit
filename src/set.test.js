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

    expect(set('name')('Steve')(target)).toHaveProperty('name', 'Steve')
    expect(set('address.city')('Sydney')(target)).toHaveProperty('address.city', 'Sydney')
  })
})
