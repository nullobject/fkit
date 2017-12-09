const assert = require('chai').assert
const string = require('../src/string')

describe('string', function () {
  describe('#toUpper', function () {
    it('converts a string to uppercase', function () {
      assert.equal(string.toUpper('a'), 'A')
      assert.equal(string.toUpper('A'), 'A')
    })
  })

  describe('#toLower', function () {
    it('converts a string to uppercase', function () {
      assert.equal(string.toLower('a'), 'a')
      assert.equal(string.toLower('A'), 'a')
    })
  })

  describe('#replace', function () {
    it('replaces a string', function () {
      assert.equal(string.replace('r')('z')('bar'), 'baz')
    })

    it('replaces a regex', function () {
      assert.equal(string.replace(/r/)('z')('bar'), 'baz')
    })
  })
})
