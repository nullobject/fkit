import set from './set'

describe('#set', () => {
  const target = { name: 'Jane', age: 20 }

  it('sets the given property', () => {
    const result = set('name')('Steve')(target)
    expect(result).toHaveProperty('name', 'Steve')
  })
})
