import neq from './neq'

describe('#neq', () => {
  it('returns true if the arguments are not equal', () => {
    expect(neq(1, 1)).toBe(false)
    expect(neq(1, 2)).toBe(true)
  })
})
