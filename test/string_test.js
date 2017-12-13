import {assert} from 'chai'
import * as string from '../src/string'

describe('string', () => {
  describe('#toUpper', () => {
    it('converts a string to uppercase', () => {
      assert.equal(string.toUpper('a'), 'A')
      assert.equal(string.toUpper('A'), 'A')
    })
  })

  describe('#toLower', () => {
    it('converts a string to uppercase', () => {
      assert.equal(string.toLower('a'), 'a')
      assert.equal(string.toLower('A'), 'a')
    })
  })

  describe('#replace', () => {
    it('replaces a string', () => {
      assert.equal(string.replace('r')('z')('bar'), 'baz')
    })

    it('replaces a regex', () => {
      assert.equal(string.replace(/r/)('z')('bar'), 'baz')
    })
  })
})
