import * as string from '../src/string'

describe('string', () => {
  describe('#toLower', () => {
    it('converts a string to uppercase', () => {
      expect(string.toLower('a')).toEqual('a')
      expect(string.toLower('A')).toEqual('a')
    })
  })

  describe('#replace', () => {
    it('replaces a string', () => {
      expect(string.replace('r')('z')('bar')).toEqual('baz')
    })

    it('replaces a regex', () => {
      expect(string.replace(/r/)('z')('bar')).toEqual('baz')
    })
  })
})
