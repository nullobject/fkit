import * as string from '../src/string'

describe('string', () => {
  describe('#replace', () => {
    it('replaces a string', () => {
      expect(string.replace('r')('z')('bar')).toEqual('baz')
    })

    it('replaces a regex', () => {
      expect(string.replace(/r/)('z')('bar')).toEqual('baz')
    })
  })
})
