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

  describe('#whereAll', function() {
    it('should apply the list of predicate functions', function() {
      function f(a) { return a >= 1; }
      function g(a) { return a >= 2; }
      function h(a) { return a >= 3; }
      expect(search.whereAll([f, g, h])(0)).to.be.false;
      expect(search.whereAll([f, g, h])(1)).to.be.false;
      expect(search.whereAll([f, g, h])(2)).to.be.false;
      expect(search.whereAll([f, g, h])(3)).to.be.true;
      expect(search.whereAll([f, g, h])(4)).to.be.true;
    });
  });

  describe('#whereAny', function() {
    it('should apply the list of predicate functions', function() {
      function f(a) { return a >= 1; }
      function g(a) { return a >= 2; }
      function h(a) { return a >= 3; }
      expect(search.whereAny([f, g, h])(0)).to.be.false;
      expect(search.whereAny([f, g, h])(1)).to.be.true;
      expect(search.whereAny([f, g, h])(2)).to.be.true;
      expect(search.whereAny([f, g, h])(3)).to.be.true;
      expect(search.whereAny([f, g, h])(4)).to.be.true;
    });
  });
});
