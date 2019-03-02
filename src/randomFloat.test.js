import randomFloat from './randomFloat'

describe('randomFloat', () => {
  it('returns a random float', () => {
    const n = randomFloat(1)(3)
    expect(n).toBeGreaterThanOrEqual(1)
    expect(n).toBeLessThanOrEqual(3)
  })
})
