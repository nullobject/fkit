import gte from './gte'

describe('#gte', () => {
  it('compares the values', () => {
    expect(gte(1)(2)).toBe(true)
    expect(gte(2)(1)).toBe(false)
    expect(gte(2)(2)).toBe(true)
  })
})
