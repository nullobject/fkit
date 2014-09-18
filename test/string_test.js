'use strict';

var string = require('../src/string');

describe('string', function() {
  describe('#toUpper', function() {
    it('should convert a string to uppercase', function() {
      expect(string.toUpper('a')).to.equal('A');
      expect(string.toUpper('A')).to.equal('A');
    });
  });

  describe('#toLower', function() {
    it('should convert a string to uppercase', function() {
      expect(string.toLower('a')).to.equal('a');
      expect(string.toLower('A')).to.equal('a');
    });
  });

  describe('#replace', function() {
    it('should replace a string', function() {
      expect(string.replace('r')('z')('bar')).to.equal('baz');
    });

    it('should replace a regex', function() {
      expect(string.replace(/r/)('z')('bar')).to.equal('baz');
    });
  });
});
