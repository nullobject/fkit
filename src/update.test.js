import update from './update'

describe('#update', () => {
  it('updates the given property', () => {
    const target = { name: 'Jane', age: 20 }
    const result = update('age')(a => a + 1)(target)
    expect(result).toHaveProperty('age', 21)
  })
})
