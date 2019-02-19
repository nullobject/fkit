import tuple from './tuple'

describe('tuple', () => {
  it('creates a tuple from the given values', () => {
    expect(tuple(1)).toEqual([1])
    expect(tuple(1, 2)).toEqual([1, 2])
    expect(tuple(1, 2, 3)).toEqual([1, 2, 3])
  })
})
