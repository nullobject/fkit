'use strict';

var build = require('../../src/list/build');

describe('list.build', function() {
  describe('#array', function() {
    it('should return a new array', function() {
      expect(build.array(3)).to.be.eql([undefined, undefined, undefined]);
    });
  });

  describe('#pair', function() {
    it('should return a pair of values', function() {
      expect(build.pair(1)(2)).to.be.eql([1, 2]);
    });
  });

  describe('#range', function() {
    it('should return an array of numbers', function() {
      expect(build.range(1)(3)).to.eql([1, 2, 3]);
      expect(build.range(1)(1)).to.eql([1]);
    });
  });

  describe('#replicate', function() {
    it('should handle numbers', function() {
      expect(build.replicate(3)(1)).to.eql([1, 1, 1]);
    });

    it('should handle arrays', function() {
      expect(build.replicate(3)([1])).to.eql([[1], [1], [1]]);
    });

    it('should handle strings', function() {
      expect(build.replicate(3)('a')).to.eql('aaa');
    });
  });

  describe('#sample', function() {
    it('should handle arrays', function() {
      expect(build.sample(2)([])).to.be.eql([]);
      expect([1, 2, 3]).to.include.members(build.sample(2)([1, 2, 3]));
    });

    it('should handle strings', function() {
      expect(build.sample(2)('')).to.be.eql([]);
      expect(['a', 'b', 'c']).to.include.members(build.sample(2)('abc').split(''));
    });
  });
});
