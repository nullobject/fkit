import toLower from './toLower'

describe('toLower', () => {
  it('converts a string to uppercase', () => {
    expect(toLower('a')).toEqual('a')
    expect(toLower('A')).toEqual('a')
  })
})
