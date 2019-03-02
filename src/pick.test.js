import pick from './pick'

describe('pick', () => {
  it('copies the given object with the properties', () => {
    const target = { name: 'Jane', age: 20 }
    const result = pick(['name', 'age'])(target)
    expect(result).toEqual({ name: 'Jane', age: 20 })
  })
})
