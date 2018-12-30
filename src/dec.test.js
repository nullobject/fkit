import dec from './dec'

describe('#dec', () => {
  it('decrements the value', () => {
    expect(dec(3)).toEqual(2)
    expect(dec(2)).toEqual(1)
  })
})
