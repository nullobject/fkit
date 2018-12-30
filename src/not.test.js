import not from './not'

describe('#not', () => {
  it('NOTs the value', () => {
    expect(not(false)).toBe(true)
    expect(not(true)).toBe(false)
  })
})
