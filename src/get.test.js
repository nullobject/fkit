import get from './get'

describe('get', () => {
  it('returns the property at the given key', () => {
    const target = { name: 'Jane', age: 20 }
    expect(get('name')(target)).toBe('Jane')
    expect(get('age')(target)).toBe(20)
    expect(get('foo')(target)).toBeUndefined()
  })
})
