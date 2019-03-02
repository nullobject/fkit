import id from './id'

describe('id', () => {
  it('returns a function that returns its argument', () => {
    const a = {}
    expect(id(a)).toBe(a)
  })
})
