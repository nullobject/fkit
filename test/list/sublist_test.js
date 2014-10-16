'use strict';

var sublist = require('../../src/list/sublist');

describe('list.sublist', function() {
  describe('#take', function() {
    it('should handle an array', function() {
      expect(sublist.take(2)([])).to.eql([]);
      expect(sublist.take(2)([1, 2, 3])).to.eql([1, 2]);
    });

    it('should handle a string', function() {
      expect(sublist.take(2)('')).to.eql('');
      expect(sublist.take(2)('foo')).to.eql('fo');
    });
  });

  describe('#drop', function() {
    it('should handle an array', function() {
      expect(sublist.drop(2)([])).to.eql([]);
      expect(sublist.drop(2)([1, 2, 3])).to.eql([3]);
    });

    it('should handle a string', function() {
      expect(sublist.drop(2)('')).to.eql('');
      expect(sublist.drop(2)('foo')).to.eql('o');
    });
  });

  describe('#takeWhile', function() {
    it('should handle an array', function() {
      function p(a) { return a < 3; }
      expect(sublist.takeWhile(p)([])).to.eql([]);
      expect(sublist.takeWhile(p)([1, 2, 3])).to.eql([1, 2]);
    });

    it('should handle a string', function() {
      function p(a) { return a !== 'o'; }
      expect(sublist.takeWhile(p)('')).to.eql('');
      expect(sublist.takeWhile(p)('foo')).to.eql('f');
    });
  });

  describe('#dropWhile', function() {
    it('should handle an array', function() {
      function p(a) { return a < 3; }
      expect(sublist.dropWhile(p)([])).to.eql([]);
      expect(sublist.dropWhile(p)([1, 2, 3])).to.eql([3]);
    });

    it('should handle a string', function() {
      function p(a) { return a !== 'o'; }
      expect(sublist.dropWhile(p)('')).to.eql('');
      expect(sublist.dropWhile(p)('foo')).to.eql('oo');
    });
  });

  describe('#splitAt', function() {
    it('should handle an array', function() {
      expect(sublist.splitAt(1)([])).to.eql([[], []]);
      expect(sublist.splitAt(1)([1, 2, 3])).to.eql([[1], [2, 3]]);
    });

    it('should handle a string', function() {
      expect(sublist.splitAt(1)('')).to.eql(['', '']);
      expect(sublist.splitAt(1)('foo')).to.eql(['f', 'oo']);
    });
  });

  describe('#span', function() {
    it('should handle an array', function() {
      function p(a) { return a < 3; }
      expect(sublist.span(p)([])).to.eql([[], []]);
      expect(sublist.span(p)([1, 2, 3])).to.eql([[1, 2], [3]]);
    });

    it('should handle a string', function() {
      function p(a) { return a !== 'o'; }
      expect(sublist.span(p)('')).to.eql(['', '']);
      expect(sublist.span(p)('foo')).to.eql(['f', 'oo']);
    });
  });

  describe('#group', function() {
    it('should handle an array', function() {
      expect(sublist.group([])).to.eql([]);
      expect(sublist.group([1, 2, 2, 3, 3, 3])).to.eql([[1], [2, 2], [3, 3, 3]]);
    });

    it('should handle a string', function() {
      expect(sublist.group('')).to.eql([]);
      expect(sublist.group('Mississippi')).to.eql(['M', 'i', 'ss', 'i', 'ss', 'i', 'pp', 'i']);
    });
  });
});
