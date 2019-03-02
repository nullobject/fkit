import init from './init'

describe('init', () => {
  it('handles an empty array', () => {
    expect(init([])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(init('')).toBe('')
  })

  it('handles an array', () => {
    expect(init([1, 2, 3])).toEqual([1, 2])
  })

  it('handles a string', () => {
    expect(init('foo')).toBe('fo')
  })
})
