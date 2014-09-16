'use strict';

var zip = require('../../src/list/zip');

describe('list.zip', function() {
  describe('#zipWith', function() {
    function f(a, b) { return a + b; }

    it('should zip arrays', function() {
      expect(zip.zipWith(f)([1, 2, 3])([4, 5, 6])).to.be.eql([5, 7, 9]);
    });

    it('should zip strings', function() {
      expect(zip.zipWith(f)('foo')('bar')).to.be.eql(['fb', 'oa', 'or']);
    });

    it('should zip arrays of non-equal length', function() {
      expect(zip.zipWith(f)([1, 2, 3])([4, 5])).to.be.eql([5, 7]);
      expect(zip.zipWith(f)([1, 2])([3, 4, 5])).to.be.eql([4, 6]);
    });

    it('should zip strings of non-equal length', function() {
      expect(zip.zipWith(f)('foo')('ba')).to.be.eql(['fb', 'oa']);
      expect(zip.zipWith(f)('fo')('bar')).to.be.eql(['fb', 'oa']);
    });
  });

  describe('#zip', function() {
    it('should zip arrays of equal length', function() {
      expect(zip.zip([1, 2, 3])([4, 5, 6])).to.be.eql([[1, 4], [2, 5], [3, 6]]);
    });

    it('should zip strings of equal length', function() {
      expect(zip.zip('foo')('bar')).to.be.eql([['f', 'b'], ['o', 'a'], ['o', 'r']]);
    });
  });

  describe('#unzip', function() {
    it('should unzip arrays', function() {
      expect(zip.unzip([[1, 4], [2, 5], [3, 6]])).to.be.eql([[1, 2, 3], [4, 5, 6]]);
    });

    it('should unzip strings', function() {
      expect(zip.unzip([['f', 'b'], ['o', 'a'], ['o', 'r']])).to.be.eql(['foo', 'bar']);
    });
  });
});
