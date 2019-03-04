import set from './set'

describe('set', () => {
  it('sets the given property', () => {
    const target = { name: 'Jane', age: 20 }
    const result = set('name')('Steve')(target)
    expect(result).toHaveProperty('name', 'Steve')
  })
})
