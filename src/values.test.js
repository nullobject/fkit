import values from './values'

describe('#values', () => {
  const target = { name: 'Jane', age: 20 }

  it('returns the values of the given object', () => {
    const result = values(target)
    expect(result).toEqual(['Jane', 20])
  })
})
