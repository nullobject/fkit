'use strict';

var set = require('../../src/list/set');

describe('list.set', function() {
  describe('#union', function() {
    it('should handle arrays', function() {
      expect(set.union([1, 2, 3])([])).to.be.eql([1, 2, 3]);
      expect(set.union([1, 2, 3])([1, 2, 3])).to.be.eql([1, 2, 3]);
      expect(set.union([1, 2, 3])([2, 3, 4])).to.be.eql([1, 2, 3, 4]);
      expect(set.union([1, 2, 3])([4, 5, 6])).to.be.eql([1, 2, 3, 4, 5, 6]);
      expect(set.union([1, 1])([1])).to.be.eql([1, 1]);
    });

    it('should handle strings', function() {
      expect(set.union('abc')('')).to.be.eql('abc');
      expect(set.union('abc')('abc')).to.be.eql('abc');
      expect(set.union('abc')('bcd')).to.be.eql('abcd');
      expect(set.union('abc')('def')).to.be.eql('abcdef');
      expect(set.union('aa')('a')).to.be.eql('aa');
    });
  });

  describe('#intersect', function() {
    it('should handle arrays', function() {
      expect(set.intersect([1, 2, 3])([])).to.be.eql([]);
      expect(set.intersect([1, 2, 3])([1, 2, 3])).to.be.eql([1, 2, 3]);
      expect(set.intersect([1, 2, 3])([2, 3, 4])).to.be.eql([2, 3]);
      expect(set.intersect([1, 2, 3])([4, 5, 6])).to.be.eql([]);
      expect(set.intersect([1, 1])([1])).to.be.eql([1, 1]);
    });

    it('should handle strings', function() {
      expect(set.intersect('abc')('')).to.be.eql('');
      expect(set.intersect('abc')('abc')).to.be.eql('abc');
      expect(set.intersect('abc')('bcd')).to.be.eql('bc');
      expect(set.intersect('abc')('def')).to.be.eql('');
      expect(set.intersect('aa')('a')).to.be.eql('aa');
    });
  });

  describe('#difference', function() {
    it('should handle arrays', function() {
      expect(set.difference([1, 2, 3])([])).to.be.eql([1, 2, 3]);
      expect(set.difference([1, 2, 3])([1, 2, 3])).to.be.eql([]);
      expect(set.difference([1, 2, 3])([2, 3, 4])).to.be.eql([1]);
      expect(set.difference([1, 2, 3])([4, 5, 6])).to.be.eql([1, 2, 3]);
      expect(set.difference([1, 1])([1])).to.be.eql([1]);
    });

    it('should handle strings', function() {
      expect(set.difference('abc')('')).to.be.eql('abc');
      expect(set.difference('abc')('abc')).to.be.eql('');
      expect(set.difference('abc')('bcd')).to.be.eql('a');
      expect(set.difference('abc')('def')).to.be.eql('abc');
      expect(set.difference('aa')('a')).to.be.eql('a');
    });
  });

  describe('#remove', function() {
    it('should handle arrays', function() {
      expect(set.remove(1)([])).to.be.eql([]);
      expect(set.remove(1)([1, 2, 3])).to.be.eql([2, 3]);
      expect(set.remove(2)([1, 2, 3])).to.be.eql([1, 3]);
      expect(set.remove(3)([1, 2, 3])).to.be.eql([1, 2]);
      expect(set.remove(1)([1, 1])).to.be.eql([1]);
    });

    it('should handle strings', function() {
      expect(set.remove('a')('')).to.be.eql('');
      expect(set.remove('a')('abc')).to.be.eql('bc');
      expect(set.remove('b')('abc')).to.be.eql('ac');
      expect(set.remove('c')('abc')).to.be.eql('ab');
      expect(set.remove('a')('aa')).to.be.eql('a');
    });
  });

  describe('#cartesian', function() {
    it('should handle arrays', function() {
      expect(set.cartesian([1, 2, 3])([4, 5, 6])).to.be.eql([
        [1, 4], [1, 5], [1, 6],
        [2, 4], [2, 5], [2, 6],
        [3, 4], [3, 5], [3, 6]
      ]);
    });

    it('should handle strings', function() {
      expect(set.cartesian('foo')('bar')).to.be.eql([
        ['f', 'b'], ['f', 'a'], ['f', 'r'],
        ['o', 'b'], ['o', 'a'], ['o', 'r'],
        ['o', 'b'], ['o', 'a'], ['o', 'r']
      ]);
    });
  });
});
