import values from './values'

describe('#values', () => {
  it('returns the values of the given object', () => {
    const target = { name: 'Jane', age: 20 }
    const result = values(target)
    expect(result).toEqual(['Jane', 20])
  })
})
