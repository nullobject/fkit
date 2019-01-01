import or from './or'

describe('#or', () => {
  it('ORs the values', () => {
    expect(or(false)(false)).toBe(false)
    expect(or(false)(true)).toBe(true)
    expect(or(true)(false)).toBe(true)
    expect(or(true)(true)).toBe(true)
  })
})
