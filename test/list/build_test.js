'use strict';

var build = require('../../src/list/build');

describe('list.build', function() {
  describe('#array', function() {
    it('should return a new array', function() {
      expect(build.array(3)).to.be.eql([undefined, undefined, undefined]);
    });
  });

  describe('#pair', function() {
    it('should return a pair', function() {
      expect(build.pair(1)(2)).to.be.eql([1, 2]);
    });
  });

  describe('#range', function() {
    it('should return an array of numbers', function() {
      expect(build.range(1)(3)).to.eql([1, 2, 3]);
      expect(build.range(3)(1)).to.eql([3, 2, 1]);
      expect(build.range(1)(1)).to.eql([1]);
    });
  });

  describe('#replicate', function() {
    it('should replicate numbers', function() {
      expect(build.replicate(3)(1)).to.eql([1, 1, 1]);
    });

    it('should replicate arrays', function() {
      expect(build.replicate(3)([1])).to.eql([[1], [1], [1]]);
    });

    it('should replicate strings', function() {
      expect(build.replicate(3)('a')).to.eql('aaa');
    });
  });
});
