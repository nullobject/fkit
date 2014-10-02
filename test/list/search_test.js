'use strict';

var search = require('../../src/list/search');

describe('list.search', function() {
  describe('#elem', function() {
    it('should handle arrays', function() {
      expect(search.elem(0)([1, 2, 3])).to.be.false;
      expect(search.elem(1)([1, 2, 3])).to.be.true;
    });

    it('should handle strings', function() {
      expect(search.elem('b')('foo')).to.be.false;
      expect(search.elem('f')('foo')).to.be.true;
    });
  });

  describe('#filter', function() {
    it('should handle arrays', function() {
      function p(a) { return a > 1; }
      expect(search.filter(p)([1, 2, 3])).to.be.eql([2, 3]);
    });

    it('should handle strings', function() {
      function p(a) { return a === 'o'; }
      expect(search.filter(p)('foo')).to.be.equal('oo');
    });
  });

  describe('#find', function() {
    it('should handle arrays', function() {
      function p(a) { return a > 1; }
      expect(search.find(p)([1, 2, 3])).to.be.eql(2);
    });

    it('should handle strings', function() {
      function p(a) { return a === 'o'; }
      expect(search.find(p)('foo')).to.be.equal('o');
    });
  });

  describe('#partition', function() {
    it('should handle arrays', function() {
      function p(a) { return a > 1; }
      expect(search.partition(p)([])).to.be.eql([[], []]);
      expect(search.partition(p)([1, 2, 3])).to.be.eql([[2, 3], [1]]);
    });

    it('should handle strings', function() {
      function p(a) { return a === 'o'; }
      expect(search.partition(p)('')).to.be.eql(['', '']);
      expect(search.partition(p)('foo')).to.be.eql(['oo', 'f']);
    });
  });

  describe('#all', function() {
    it('should handle arrays', function() {
      function p(a) { return a > 1; }
      expect(search.all(p)([3]      )).to.be.true;
      expect(search.all(p)([2, 3]   )).to.be.true;
      expect(search.all(p)([3, 2, 1])).to.be.false;
    });

    it('should handle strings', function() {
      function p(a) { return a !== 'r'; }
      expect(search.all(p)('b'  )).to.be.true;
      expect(search.all(p)('ba' )).to.be.true;
      expect(search.all(p)('bar')).to.be.false;
    });
  });

  describe('#any', function() {
    it('should handle arrays', function() {
      function p(a) { return a > 1; }
      expect(search.any(p)([1]      )).to.be.false;
      expect(search.any(p)([1, 2]   )).to.be.true;
      expect(search.any(p)([1, 2, 3])).to.be.true;
    });

    it('should handle strings', function() {
      function p(a) { return a !== 'r'; }
      expect(search.any(p)('r'  )).to.be.false;
      expect(search.any(p)('ar' )).to.be.true;
      expect(search.any(p)('bar')).to.be.true;
    });
  });
});
