import odd from './odd'

describe('#odd', () => {
  it('tests whether a value is odd', () => {
    expect(odd(1)).toBe(true)
    expect(odd(2)).toBe(false)
    expect(odd(3)).toBe(true)
  })
})
