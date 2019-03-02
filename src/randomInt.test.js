import randomInt from './randomInt'

describe('randomInt', () => {
  it('returns a random integer', () => {
    const n = randomInt(1)(3)
    expect(n).toBeGreaterThanOrEqual(1)
    expect(n).toBeLessThanOrEqual(3)
  })
})
