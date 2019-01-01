import notEqual from './notEqual'

describe('#notEqual', () => {
  it('returns true if the arguments are not equal', () => {
    expect(notEqual(1, 1)).toBe(false)
    expect(notEqual(1, 2)).toBe(true)
  })
})
