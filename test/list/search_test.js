'use strict';

var search = require('../../src/list/search');

describe('list.search', function() {
  describe('#elem', function() {
    it('should filter an array', function() {
      expect(search.elem(0)([1, 2, 3])).to.be.false;
      expect(search.elem(1)([1, 2, 3])).to.be.true;
    });

    it('should filter a string', function() {
      expect(search.elem('b')('foo')).to.be.false;
      expect(search.elem('f')('foo')).to.be.true;
    });
  });

  describe('#filter', function() {
    it('should filter an array', function() {
      function f(a) { return a > 1; }
      expect(search.filter(f)([1, 2, 3])).to.be.eql([2, 3]);
    });

    it('should filter a string', function() {
      function f(a) { return a === 'o'; }
      expect(search.filter(f)('foo')).to.be.equal('oo');

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

  describe('#all', function() {
    it('should filter an array', function() {
      function f(a) { return a > 1; }
      expect(search.all(f)([3]      )).to.be.true;
      expect(search.all(f)([2, 3]   )).to.be.true;
      expect(search.all(f)([3, 2, 1])).to.be.false;
    });
  });

  describe('#any', function() {
    it('should filter an array', function() {
      function f(a) { return a > 1; }
      expect(search.any(f)([1]      )).to.be.false;
      expect(search.any(f)([1, 2]   )).to.be.true;
      expect(search.any(f)([1, 2, 3])).to.be.true;
    });
  });
});
