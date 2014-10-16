'use strict';

var string = require('../src/string');

describe('string', function() {
  describe('#toUpper', function() {
    it('should convert a string to uppercase', function() {
      expect(string.toUpper('a')).to.eql('A');
      expect(string.toUpper('A')).to.eql('A');
    });
  });

  describe('#toLower', function() {
    it('should convert a string to uppercase', function() {
      expect(string.toLower('a')).to.eql('a');
      expect(string.toLower('A')).to.eql('a');
    });
  });

  describe('#replace', function() {
    it('should replace a string', function() {
      expect(string.replace('r')('z')('bar')).to.eql('baz');
    });

    it('should replace a regex', function() {
      expect(string.replace(/r/)('z')('bar')).to.eql('baz');
    });
  });
});
