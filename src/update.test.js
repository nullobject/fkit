import update from './update'

describe('#update', () => {
  const target = { name: 'Jane', age: 20 }

  it('updates the given property', () => {
    const result = update('age')(a => a + 1)(target)
    expect(result).toHaveProperty('age', 21)
  })
})
