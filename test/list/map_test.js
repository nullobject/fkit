'use strict';

var map = require('../../src/list/map');

describe('list.map', function() {
  describe('#map', function() {
    it('should handle arrays', function() {
      function f(a) { return [a + 1]; }
      expect(map.map(f)([1, 2, 3])).to.be.eql([[2], [3], [4]]);
    });

    it('should handle strings', function() {
      function f(a) { return a.toUpperCase(); }
      expect(map.map(f)('foo')).to.be.eql(['F', 'O', 'O']);
    });
  });

  describe('#reverse', function() {
    it('should handle arrays', function() {
      expect(map.reverse([1, 2, 3])).to.be.eql([3, 2, 1]);
    });

    it('should handle strings', function() {
      expect(map.reverse('foo')).to.be.equal('oof');
    });
  });

  describe('#intersperse', function() {
    it('should handle arrays', function() {
      expect(map.intersperse(4)([])).to.be.eql([]);
      expect(map.intersperse(4)([1, 2, 3])).to.be.eql([1, 4, 2, 4, 3]);
      expect(map.intersperse(null)([1, 2, 3])).to.be.eql([1, null, 2, null, 3]);
    });

    it('should handle strings', function() {
      expect(map.intersperse('-')('')).to.be.equal('');
      expect(map.intersperse('-')('foo')).to.be.equal('f-o-o');
      expect(map.intersperse('')('foo')).to.be.equal('foo');
    });
  });
});
