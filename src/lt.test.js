import lt from './lt'

describe('lt', () => {
  it('compares the values', () => {
    expect(lt(1)(2)).toBe(false)
    expect(lt(2)(1)).toBe(true)
    expect(lt(2)(2)).toBe(false)
  })
})
