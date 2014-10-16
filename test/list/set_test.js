'use strict';

var set = require('../../src/list/set');

describe('list.set', function() {
  describe('#nub', function() {
    it('should handle an array', function() {
      expect(set.nub([])).to.eql([]);
      expect(set.nub([1, 2, 2, 3, 3, 3])).to.eql([1, 2, 3]);
    });

    it('should handle a string', function() {
      expect(set.nub('')).to.eql('');
      expect(set.nub('abbccc')).to.eql('abc');
    });
  });

  describe('#union', function() {
    it('should handle an array', function() {
      expect(set.union([1, 2, 3])([])).to.eql([1, 2, 3]);
      expect(set.union([1, 2, 3])([1, 2, 3])).to.eql([1, 2, 3]);
      expect(set.union([1, 2, 3])([2, 3, 4])).to.eql([1, 2, 3, 4]);
      expect(set.union([1, 2, 3])([4, 5, 6])).to.eql([1, 2, 3, 4, 5, 6]);
      expect(set.union([1, 1])([1])).to.eql([1, 1]);
    });

    it('should handle a string', function() {
      expect(set.union('abc')('')).to.eql('abc');
      expect(set.union('abc')('abc')).to.eql('abc');
      expect(set.union('abc')('bcd')).to.eql('abcd');
      expect(set.union('abc')('def')).to.eql('abcdef');
      expect(set.union('aa')('a')).to.eql('aa');
    });
  });

  describe('#intersect', function() {
    it('should handle an array', function() {
      expect(set.intersect([1, 2, 3])([])).to.eql([]);
      expect(set.intersect([1, 2, 3])([1, 2, 3])).to.eql([1, 2, 3]);
      expect(set.intersect([1, 2, 3])([2, 3, 4])).to.eql([2, 3]);
      expect(set.intersect([1, 2, 3])([4, 5, 6])).to.eql([]);
      expect(set.intersect([1, 1])([1])).to.eql([1, 1]);
    });

    it('should handle a string', function() {
      expect(set.intersect('abc')('')).to.eql('');
      expect(set.intersect('abc')('abc')).to.eql('abc');
      expect(set.intersect('abc')('bcd')).to.eql('bc');
      expect(set.intersect('abc')('def')).to.eql('');
      expect(set.intersect('aa')('a')).to.eql('aa');
    });
  });

  describe('#difference', function() {
    it('should handle an array', function() {
      expect(set.difference([1, 2, 3])([])).to.eql([1, 2, 3]);
      expect(set.difference([1, 2, 3])([1, 2, 3])).to.eql([]);
      expect(set.difference([1, 2, 3])([2, 3, 4])).to.eql([1]);
      expect(set.difference([1, 2, 3])([4, 5, 6])).to.eql([1, 2, 3]);
      expect(set.difference([1, 1])([1])).to.eql([1]);
    });

    it('should handle a string', function() {
      expect(set.difference('abc')('')).to.eql('abc');
      expect(set.difference('abc')('abc')).to.eql('');
      expect(set.difference('abc')('bcd')).to.eql('a');
      expect(set.difference('abc')('def')).to.eql('abc');
      expect(set.difference('aa')('a')).to.eql('a');
    });
  });

  describe('#remove', function() {
    it('should handle an array', function() {
      expect(set.remove(1)([])).to.eql([]);
      expect(set.remove(1)([1, 2, 3])).to.eql([2, 3]);
      expect(set.remove(2)([1, 2, 3])).to.eql([1, 3]);
      expect(set.remove(3)([1, 2, 3])).to.eql([1, 2]);
      expect(set.remove(1)([1, 1])).to.eql([1]);
    });

    it('should handle a string', function() {
      expect(set.remove('a')('')).to.eql('');
      expect(set.remove('a')('abc')).to.eql('bc');
      expect(set.remove('b')('abc')).to.eql('ac');
      expect(set.remove('c')('abc')).to.eql('ab');
      expect(set.remove('a')('aa')).to.eql('a');
    });
  });

  describe('#cartesian', function() {
    it('should handle an array', function() {
      expect(set.cartesian([1, 2, 3])([4, 5, 6])).to.eql([
        [1, 4], [1, 5], [1, 6],
        [2, 4], [2, 5], [2, 6],
        [3, 4], [3, 5], [3, 6]
      ]);
    });

    it('should handle a string', function() {
      expect(set.cartesian('foo')('bar')).to.eql([
        ['f', 'b'], ['f', 'a'], ['f', 'r'],
        ['o', 'b'], ['o', 'a'], ['o', 'r'],
        ['o', 'b'], ['o', 'a'], ['o', 'r']
      ]);
    });
  });

  describe('#subsequences', function() {
    it('should handle an array', function() {
      expect(set.subsequences([])).to.eql([[]]);
      expect(set.subsequences([1, 2, 3])).to.eql([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);
    });

    it('should handle a string', function() {
      expect(set.subsequences('')).to.eql(['']);
      expect(set.subsequences('abc')).to.eql(['', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc']);
    });
  });

  describe('#permutations', function() {
    it('should handle an array', function() {
      expect(set.permutations([])).to.eql([[]]);
      expect(set.permutations([1, 2, 3])).to.eql([[1, 2, 3], [2, 1, 3], [3, 2, 1], [2, 3, 1], [3, 1, 2], [1, 3, 2]]);
    });

    it('should handle a string', function() {
      expect(set.permutations('')).to.eql(['']);
      expect(set.permutations('abc')).to.eql(['abc', 'bac', 'cba', 'bca', 'cab', 'acb']);
    });
  });
});
