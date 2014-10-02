'use strict';

var zip = require('../../src/list/zip');

describe('list.zip', function() {
  describe('#zipWith', function() {
    function f(a, b) { return a + b; }

    it('should handle arrays', function() {
      expect(zip.zipWith(f)([1, 2, 3])([4, 5, 6])).to.be.eql([5, 7, 9]);
      expect(zip.zipWith(f)([1, 2, 3])([4, 5])).to.be.eql([5, 7]);
      expect(zip.zipWith(f)([1, 2])([3, 4, 5])).to.be.eql([4, 6]);
    });

    it('should handle strings', function() {
      expect(zip.zipWith(f)('foo')('bar')).to.be.eql(['fb', 'oa', 'or']);
      expect(zip.zipWith(f)('foo')('ba')).to.be.eql(['fb', 'oa']);
      expect(zip.zipWith(f)('fo')('bar')).to.be.eql(['fb', 'oa']);
    });
  });

  describe('#zip', function() {
    it('should handle arrays', function() {
      expect(zip.zip([1, 2, 3])([4, 5, 6])).to.be.eql([[1, 4], [2, 5], [3, 6]]);
      expect(zip.zip([1, 2, 3])([4, 5])).to.be.eql([[1, 4], [2, 5]]);
      expect(zip.zip([1, 2])([4, 5, 6])).to.be.eql([[1, 4], [2, 5]]);
    });

    it('should handle strings', function() {
      expect(zip.zip('foo')('bar')).to.be.eql([['f', 'b'], ['o', 'a'], ['o', 'r']]);
      expect(zip.zip('foo')('ba')).to.be.eql([['f', 'b'], ['o', 'a']]);
      expect(zip.zip('fo')('bar')).to.be.eql([['f', 'b'], ['o', 'a']]);
    });
  });

  describe('#unzip', function() {
    it('should handle arrays', function() {
      expect(zip.unzip([[1, 4], [2, 5], [3, 6]])).to.be.eql([[1, 2, 3], [4, 5, 6]]);
    });

    it('should handle strings', function() {
      expect(zip.unzip([['f', 'b'], ['o', 'a'], ['o', 'r']])).to.be.eql(['foo', 'bar']);
    });
  });
});
