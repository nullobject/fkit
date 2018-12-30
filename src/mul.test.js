import mul from './mul'

describe('#mul', () => {
  it('multiplies the values', () => {
    expect(mul(2)(1)).toEqual(2)
  })
})
