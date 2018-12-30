import max from './max'

describe('#max', () => {
  it('handles numbers', () => {
    expect(max(1)(2)).toEqual(2)
    expect(max(2)(1)).toEqual(2)
    expect(max(2)(2)).toEqual(2)
  })

  it('handles strings', () => {
    expect(max('a')('b')).toEqual('b')
    expect(max('b')('a')).toEqual('b')
    expect(max('b')('b')).toEqual('b')
  })
})
