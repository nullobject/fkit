import getIn from './getIn'

describe('#getIn', () => {
  const target = { name: 'Jane', age: 20, address: { city: 'Melbourne', country: 'Australia' } }

  it('returns the property at the given key path', () => {
    expect(getIn(['name'])(target)).toBe('Jane')
    expect(getIn(['age'])(target)).toBe(20)
    expect(getIn(['address', 'city'])(target)).toBe('Melbourne')
    expect(getIn('address.city')(target)).toBe('Melbourne')
    expect(getIn(['foo', 'bar'])(target)).toBeUndefined()
  })
})
