import equal from './equal'

describe('#equal', () => {
  it('returns true if the arguments are equal', () => {
    expect(equal(1, 1)).toBe(true)
    expect(equal(1, 2)).toBe(false)
  })
})
