import array from './array'

describe('#array', () => {
  it('returns a new array', () => {
    expect(array(0)).toEqual([])
    expect(array(3)).toEqual([undefined, undefined, undefined])
  })
})
