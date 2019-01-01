import negate from './negate'

describe('#negate', () => {
  it('negates the value', () => {
    expect(negate(1)).toEqual(-1)
    expect(negate(-1)).toEqual(1)
  })
})
