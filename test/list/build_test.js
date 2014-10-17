'use strict';

var build = require('../../src/list/build');

describe('list.build', function() {
  describe('#array', function() {
    it('should return a new array', function() {
      expect(build.array(0)).to.eql([]);
      expect(build.array(3)).to.eql([undefined, undefined, undefined]);
    });
  });

  describe('#string', function() {
    it('should return a new string', function() {
      expect(build.string(0)).to.eql('');
      expect(build.string(3)).to.eql('   ');
    });
  });

  describe('#pair', function() {
    it('should return a pair of values', function() {
      expect(build.pair(1)(2)).to.eql([1, 2]);
    });
  });

  describe('#range', function() {
    it('should return an array of numbers', function() {
      expect(build.range(1)(3)).to.eql([1, 2, 3]);
      expect(build.range(1)(1)).to.eql([1]);
    });
  });

  describe('#replicate', function() {
    it('should handle a number', function() {
      expect(build.replicate(0)(1)).to.eql([]);
      expect(build.replicate(3)(1)).to.eql([1, 1, 1]);
    });

    it('should handle an array of numbers', function() {
      expect(build.replicate(0)([1])).to.eql([]);
      expect(build.replicate(3)([1])).to.eql([[1], [1], [1]]);
    });

    it('should handle an array of strings', function() {
      expect(build.replicate(0)(['a'])).to.eql([]);
      expect(build.replicate(3)(['a'])).to.eql(['a', 'a', 'a']);
    });

    it('should handle a string', function() {
      expect(build.replicate(0)('a')).to.eql('');
      expect(build.replicate(3)('a')).to.eql('aaa');
    });
  });

  describe('#sample', function() {
    it('should handle an empty array', function() {
      expect(build.sample(2)([])).to.eql([]);
    });

    it('should handle an empty string', function() {
      expect(build.sample(2)('')).to.eql('');
    });

    it('should handle an array of numbers', function() {
      var result = build.sample(2)([1, 2, 3]);
      expect(result).to.be.a('array');
      expect(result.length).to.eql(2);
      expect([1, 2, 3]).to.include.members(result);
    });

    it('should handle an array of strings', function() {
      var result = build.sample(2)(['a', 'b', 'c']);
      expect(result).to.be.a('array');
      expect(result.length).to.eql(2);
      expect(['a', 'b', 'c']).to.include.members(result);
    });

    it('should handle a string', function() {
      var result = build.sample(2)('abc');
      expect(result).to.be.a('string');
      expect(result.length).to.eql(2);
      expect(['a', 'b', 'c']).to.include.members(result.split(''));
    });
  });

  describe('#shuffle', function() {
    it('should handle an empty array', function() {
      expect(build.shuffle([])).to.eql([]);
    });

    it('should handle an empty string', function() {
      expect(build.shuffle('')).to.eql('');
    });

    it('should handle an array of numbers', function() {
      var result = build.shuffle([1, 2, 3]);
      expect(result).to.be.a('array');
      expect(result.length).to.eql(3);
      expect([1, 2, 3]).to.include.members(result);
    });

    it('should handle an array of strings', function() {
      var result = build.shuffle(['a', 'b', 'c']);
      expect(result).to.be.a('array');
      expect(result.length).to.eql(3);
      expect(['a', 'b', 'c']).to.include.members(result);
    });

    it('should handle a string', function() {
      var result = build.shuffle('abc');
      expect(result).to.be.a('string');
      expect(result.length).to.eql(3);
      expect(['a', 'b', 'c']).to.include.members(result.split(''));
    });
  });
});
