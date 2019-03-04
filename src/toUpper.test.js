import toUpper from './toUpper'

describe('toUpper', () => {
  it('converts a string to uppercase', () => {
    expect(toUpper('a')).toEqual('A')
    expect(toUpper('A')).toEqual('A')
  })
})
