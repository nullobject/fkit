'use strict';

var zip = require('../../src/list/zip');

describe('list.zip', function() {
  describe('#zipWith', function() {
    function f(a, b) { return a + b; }

    it('should handle an array', function() {
      expect(zip.zipWith(f)([1, 2, 3])([4, 5, 6])).to.eql([5, 7, 9]);
      expect(zip.zipWith(f)([1, 2, 3])([4, 5])).to.eql([5, 7]);
      expect(zip.zipWith(f)([1, 2])([3, 4, 5])).to.eql([4, 6]);
    });

    it('should handle a string', function() {
      expect(zip.zipWith(f)('foo')('bar')).to.eql(['fb', 'oa', 'or']);
      expect(zip.zipWith(f)('foo')('ba')).to.eql(['fb', 'oa']);
      expect(zip.zipWith(f)('fo')('bar')).to.eql(['fb', 'oa']);
    });
  });

  describe('#zip', function() {
    it('should handle an array', function() {
      expect(zip.zip([1, 2, 3])([4, 5, 6])).to.eql([[1, 4], [2, 5], [3, 6]]);
      expect(zip.zip([1, 2, 3])([4, 5])).to.eql([[1, 4], [2, 5]]);
      expect(zip.zip([1, 2])([4, 5, 6])).to.eql([[1, 4], [2, 5]]);
    });

    it('should handle a string', function() {
      expect(zip.zip('foo')('bar')).to.eql([['f', 'b'], ['o', 'a'], ['o', 'r']]);
      expect(zip.zip('foo')('ba')).to.eql([['f', 'b'], ['o', 'a']]);
      expect(zip.zip('fo')('bar')).to.eql([['f', 'b'], ['o', 'a']]);
    });
  });

  describe('#unzip', function() {
    it('should handle an array', function() {
      expect(zip.unzip([[1, 4], [2, 5], [3, 6]])).to.eql([[1, 2, 3], [4, 5, 6]]);
    });

    it('should handle a string', function() {
      expect(zip.unzip([['f', 'b'], ['o', 'a'], ['o', 'r']])).to.eql(['foo', 'bar']);
    });
  });
});
