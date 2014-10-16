'use strict';

var map = require('../../src/list/map');

describe('list.map', function() {
  describe('#map', function() {
    it('should handle an array', function() {
      function f(a) { return [a + 1]; }
      expect(map.map(f)([1, 2, 3])).to.eql([[2], [3], [4]]);
    });

    it('should handle a string', function() {
      function f(a) { return a.toUpperCase(); }
      expect(map.map(f)('foo')).to.eql(['F', 'O', 'O']);
    });
  });

  describe('#reverse', function() {
    it('should handle an array', function() {
      expect(map.reverse([1, 2, 3])).to.eql([3, 2, 1]);
    });

    it('should handle a string', function() {
      expect(map.reverse('foo')).to.eql('oof');
    });
  });

  describe('#intersperse', function() {
    it('should handle an array', function() {
      expect(map.intersperse(4)([])).to.eql([]);
      expect(map.intersperse(4)([1, 2, 3])).to.eql([1, 4, 2, 4, 3]);
      expect(map.intersperse(null)([1, 2, 3])).to.eql([1, null, 2, null, 3]);
    });

    it('should handle a string', function() {
      expect(map.intersperse('-')('')).to.eql('');
      expect(map.intersperse('-')('foo')).to.eql('f-o-o');
      expect(map.intersperse('')('foo')).to.eql('foo');
    });
  });
});
