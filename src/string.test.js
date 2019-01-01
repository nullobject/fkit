import string from './string'

describe('#string', () => {
  it('returns a new string', () => {
    expect(string(0)).toBe('')
    expect(string(3)).toBe('   ')
  })
})
