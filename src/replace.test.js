import replace from './replace'

describe('replace', () => {
  it('replaces a string', () => {
    expect(replace('r')('z')('bar')).toEqual('baz')
  })

  it('replaces a regex', () => {
    expect(replace(/r/)('z')('bar')).toEqual('baz')
  })
})
