'use strict';

var sublist = require('../../src/list/sublist');

describe('list.sublist', function() {
  describe('#take', function() {
    it('should handle arrays', function() {
      expect(sublist.take(2)([])).to.be.eql([]);
      expect(sublist.take(2)([1, 2, 3])).to.be.eql([1, 2]);
    });

    it('should handle strings', function() {
      expect(sublist.take(2)('')).to.be.equal('');
      expect(sublist.take(2)('foo')).to.be.equal('fo');
    });
  });

  describe('#drop', function() {
    it('should handle arrays', function() {
      expect(sublist.drop(2)([])).to.be.eql([]);
      expect(sublist.drop(2)([1, 2, 3])).to.be.eql([3]);
    });

    it('should handle strings', function() {
      expect(sublist.drop(2)('')).to.be.equal('');
      expect(sublist.drop(2)('foo')).to.be.equal('o');
    });
  });

  describe('#takeWhile', function() {
    it('should handle arrays', function() {
      function p(a) { return a < 3; }
      expect(sublist.takeWhile(p)([])).to.be.eql([]);
      expect(sublist.takeWhile(p)([1, 2, 3])).to.be.eql([1, 2]);
    });

    it('should handle strings', function() {
      function p(a) { return a !== 'o'; }
      expect(sublist.takeWhile(p)('')).to.be.equal('');
      expect(sublist.takeWhile(p)('foo')).to.be.equal('f');
    });
  });

  describe('#dropWhile', function() {
    it('should handle arrays', function() {
      function p(a) { return a < 3; }
      expect(sublist.dropWhile(p)([])).to.be.eql([]);
      expect(sublist.dropWhile(p)([1, 2, 3])).to.be.eql([3]);
    });

    it('should handle strings', function() {
      function p(a) { return a !== 'o'; }
      expect(sublist.dropWhile(p)('')).to.be.equal('');
      expect(sublist.dropWhile(p)('foo')).to.be.equal('oo');
    });
  });

  describe('#splitAt', function() {
    it('should handle arrays', function() {
      expect(sublist.splitAt(1)([])).to.be.eql([[], []]);
      expect(sublist.splitAt(1)([1, 2, 3])).to.be.eql([[1], [2, 3]]);
    });

    it('should handle strings', function() {
      expect(sublist.splitAt(1)('')).to.be.eql(['', '']);
      expect(sublist.splitAt(1)('foo')).to.be.eql(['f', 'oo']);
    });
  });

  describe('#span', function() {
    it('should handle arrays', function() {
      function p(a) { return a < 3; }
      expect(sublist.span(p)([])).to.be.eql([[], []]);
      expect(sublist.span(p)([1, 2, 3])).to.be.eql([[1, 2], [3]]);
    });

    it('should handle strings', function() {
      function p(a) { return a !== 'o'; }
      expect(sublist.span(p)('')).to.be.eql(['', '']);
      expect(sublist.span(p)('foo')).to.be.eql(['f', 'oo']);
    });
  });

  describe('#group', function() {
    it('should handle arrays', function() {
      expect(sublist.group([])).to.be.eql([]);
      expect(sublist.group([1, 2, 2, 3, 3, 3])).to.be.eql([[1], [2, 2], [3, 3, 3]]);
    });

    it('should handle strings', function() {
      expect(sublist.group('')).to.be.eql([]);
      expect(sublist.group('Mississippi')).to.be.eql(['M', 'i', 'ss', 'i', 'ss', 'i', 'pp', 'i']);
    });
  });
});
