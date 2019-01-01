import min from './min'

describe('#min', () => {
  it('handles numbers', () => {
    expect(min(1)(2)).toEqual(1)
    expect(min(2)(1)).toEqual(1)
    expect(min(2)(2)).toEqual(2)
  })

  it('handles strings', () => {
    expect(min('a')('b')).toEqual('a')
    expect(min('b')('a')).toEqual('a')
    expect(min('b')('b')).toEqual('b')
  })
})
