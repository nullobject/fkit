import get from './get'

describe('#get', () => {
  const target = { name: 'Jane', age: 20 }

  it('returns the property at the given key', () => {
    expect(get('name')(target)).toBe('Jane')
    expect(get('age')(target)).toBe(20)
    expect(get('foo')(target)).toBeUndefined()
  })
})
