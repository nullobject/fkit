'use strict';

var map = require('../../src/list/map');

describe('list.map', function() {
  describe('#map', function() {
    it('should map an array', function() {
      function f(a) { return [a + 1]; }
      expect(map.map(f)([1, 2, 3])).to.be.eql([[2], [3], [4]]);
    });

    it('should map a string', function() {
      function f(a) { return a + '-'; }
      expect(map.map(f)('foo')).to.be.equal('f-o-o-');
    });
  });

  describe('#filter', function() {
    it('should filter an array', function() {
      function f(a) { return a > 1; }
      expect(map.filter(f)([1, 2, 3])).to.be.eql([2, 3]);
    });

    it('should filter a string', function() {
      function f(a) { return a == 'o'; }
      expect(map.filter(f)('foo')).to.be.equal('oo');
    });
  });

  describe('#reverse', function() {
    it('should reverse an array', function() {
      expect(map.reverse([1, 2, 3])).to.be.eql([3, 2, 1]);
    });

    it('should reverse a string', function() {
      expect(map.reverse('foo')).to.be.equal('oof');
    });
  });

  describe('#intersperse', function() {
    it('should intersperse an array with a value', function() {
      expect(map.intersperse(4)([1, 2, 3])).to.be.eql([1, 4, 2, 4, 3]);
    });

    it('should intersperse an array with a null value', function() {
      expect(map.intersperse(null)([1, 2, 3])).to.be.eql([1, null, 2, null, 3]);
    });

    it('should intersperse a string with another string', function() {
      expect(map.intersperse('-')('foo')).to.be.equal('f-o-o');
    });

    it('should intersperse a string with an empty string', function() {
      expect(map.intersperse('')('foo')).to.be.equal('foo');
    });
  });
});
