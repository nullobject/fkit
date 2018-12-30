import mod from './mod'

describe('#mod', () => {
  it('modulos the values', () => {
    expect(mod(2)(1)).toEqual(1)
  })
})
