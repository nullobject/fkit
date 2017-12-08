var assert = require('chai').assert
var string = require('../src/string')

describe('string', function () {
  describe('#toUpper', function () {
    it('should convert a string to uppercase', function () {
      assert.equal(string.toUpper('a'), 'A')
      assert.equal(string.toUpper('A'), 'A')
    })
  })

  describe('#toLower', function () {
    it('should convert a string to uppercase', function () {
      assert.equal(string.toLower('a'), 'a')
      assert.equal(string.toLower('A'), 'a')
    })
  })

  describe('#replace', function () {
    it('should replace a string', function () {
      assert.equal(string.replace('r')('z')('bar'), 'baz')
    })

    it('should replace a regex', function () {
      assert.equal(string.replace(/r/)('z')('bar'), 'baz')
    })
  })
})
