import pair from './pair'

describe('#pair', () => {
  it('returns a pair of values', () => {
    expect(pair(1)(2)).toEqual([1, 2])
  })
})
