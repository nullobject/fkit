import even from './even'

describe('#even', () => {
  it('tests whether a value is even', () => {
    expect(even(1)).toBe(false)
    expect(even(2)).toBe(true)
    expect(even(3)).toBe(false)
  })
})
