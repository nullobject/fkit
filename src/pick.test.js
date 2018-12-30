import pick from './pick'

describe('#pick', () => {
  const target = { name: 'Jane', age: 20 }

  it('copies the given object with the properties', () => {
    const result = pick(['name', 'age'])(target)
    expect(result).toEqual({ name: 'Jane', age: 20 })
  })
})
