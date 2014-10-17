'use strict';

var sublist = require('../../src/list/sublist');

describe('list.sublist', function() {
  describe('#take', function() {
    it('should handle an empty array', function() {
      expect(sublist.take(2)([])).to.eql([]);
    });

    it('should handle an empty string', function() {
      expect(sublist.take(2)('')).to.eql('');
    });

    it('should handle an array', function() {
      expect(sublist.take(2)([1, 2, 3])).to.eql([1, 2]);
    });

    it('should handle an array of strings', function() {
      expect(sublist.take(2)(['f', 'o', 'o'])).to.eql(['f', 'o']);
    });

    it('should handle a string', function() {
      expect(sublist.take(2)('foo')).to.eql('fo');
    });
  });

  describe('#drop', function() {
    it('should handle an empty array', function() {
      expect(sublist.drop(2)([])).to.eql([]);
    });

    it('should handle an empty string', function() {
      expect(sublist.drop(2)('')).to.eql('');
    });

    it('should handle an array', function() {
      expect(sublist.drop(2)([1, 2, 3])).to.eql([3]);
    });

    it('should handle an array of strings', function() {
      expect(sublist.drop(2)(['f', 'o', 'o'])).to.eql(['o']);
    });

    it('should handle a string', function() {
      expect(sublist.drop(2)('foo')).to.eql('o');
    });
  });

  describe('#takeWhile', function() {
    function p(a) { return a < 3; }
    function q(a) { return a !== 'o'; }

    it('should handle an empty array', function() {
      expect(sublist.takeWhile(p)([])).to.eql([]);
    });

    it('should handle an empty string', function() {
      expect(sublist.takeWhile(q)('')).to.eql('');
    });

    it('should handle an array', function() {
      expect(sublist.takeWhile(p)([1, 2, 3])).to.eql([1, 2]);
    });

    it('should handle an array of strings', function() {
      expect(sublist.takeWhile(q)(['f', 'o', 'o'])).to.eql(['f']);
    });

    it('should handle a string', function() {
      expect(sublist.takeWhile(q)('foo')).to.eql('f');
    });
  });

  describe('#dropWhile', function() {
    function p(a) { return a < 3; }
    function q(a) { return a !== 'o'; }

    it('should handle an empty array', function() {
      expect(sublist.dropWhile(p)([])).to.eql([]);
    });

    it('should handle an empty string', function() {
      expect(sublist.dropWhile(q)('')).to.eql('');
    });

    it('should handle an array', function() {
      expect(sublist.dropWhile(p)([1, 2, 3])).to.eql([3]);
    });

    it('should handle an array of strings', function() {
      expect(sublist.dropWhile(q)(['f', 'o', 'o'])).to.eql(['o', 'o']);
    });

    it('should handle a string', function() {
      expect(sublist.dropWhile(q)('foo')).to.eql('oo');
    });
  });

  describe('#splitAt', function() {
    it('should handle an empty array', function() {
      expect(sublist.splitAt(1)([])).to.eql([[], []]);
    });

    it('should handle an empty string', function() {
      expect(sublist.splitAt(1)('')).to.eql(['', '']);
    });

    it('should handle an array', function() {
      expect(sublist.splitAt(1)([1, 2, 3])).to.eql([[1], [2, 3]]);
    });

    it('should handle a string', function() {
      expect(sublist.splitAt(1)('foo')).to.eql(['f', 'oo']);
    });
  });

  describe('#span', function() {
    function p(a) { return a < 3; }
    function q(a) { return a !== 'o'; }

    it('should handle an empty array', function() {
      expect(sublist.span(p)([])).to.eql([[], []]);
    });

    it('should handle an empty string', function() {
      expect(sublist.span(q)('')).to.eql(['', '']);
    });

    it('should handle an array', function() {
      expect(sublist.span(p)([1, 2, 3])).to.eql([[1, 2], [3]]);
    });

    it('should handle a string', function() {
      expect(sublist.span(q)('foo')).to.eql(['f', 'oo']);
    });
  });

  describe('#group', function() {
    it('should handle an empty array', function() {
      expect(sublist.group([])).to.eql([]);
    });

    it('should handle an empty string', function() {
      expect(sublist.group('')).to.eql([]);
    });

    it('should handle an array', function() {
      expect(sublist.group([1, 2, 2, 3, 3, 3])).to.eql([[1], [2, 2], [3, 3, 3]]);
    });

    it('should handle a string', function() {
      expect(sublist.group('Mississippi')).to.eql(['M', 'i', 'ss', 'i', 'ss', 'i', 'pp', 'i']);
    });
  });
});
