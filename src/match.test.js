import match from './match'

describe('match', () => {
  it('returns true if the string matches the regular expression', () => {
    expect(match(/^f.*$/, 'foo')).toBe(true)
  })

  it('returns false otherwise', () => {
    expect(match(/^f.*$/, 'bar')).toBe(false)
  })
})
