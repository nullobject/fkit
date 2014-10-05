'use strict';

var set = require('../../src/list/set');

describe('list.set', function() {
  describe('#union', function() {
    it('should handle arrays', function() {
      expect(set.union([1, 2, 3])([])).to.be.eql([1, 2, 3]);
      expect(set.union([1, 2, 3])([1, 2, 3])).to.be.eql([1, 2, 3]);
      expect(set.union([1, 2, 3])([4, 5, 6])).to.be.eql([1, 2, 3, 4, 5, 6]);
    });

    it('should handle strings', function() {
      expect(set.union('foo')('')).to.be.eql('foo');
      expect(set.union('foo')('foo')).to.be.eql('foo');
      expect(set.union('foo')('bar')).to.be.eql('foobar');
    });
  });

  describe('#intersect', function() {
    it('should handle arrays', function() {
      expect(set.intersect([1, 2, 3])([])).to.be.eql([]);
      expect(set.intersect([1, 2, 3])([1, 2, 3])).to.be.eql([1, 2, 3]);
      expect(set.intersect([1, 2, 3])([4, 5, 6])).to.be.eql([]);
    });

    it('should handle strings', function() {
      expect(set.intersect('foo')('')).to.be.eql('');
      expect(set.intersect('foo')('foo')).to.be.eql('foo');
      expect(set.intersect('foo')('bar')).to.be.eql('');
    });
  });

  describe('#difference', function() {
    it('should handle arrays', function() {
      expect(set.difference([1, 2, 3])([1, 2, 3])).to.be.eql([]);
      expect(set.difference([1, 2, 3])([4, 5, 6])).to.be.eql([4, 5, 6]);
      expect(set.difference([1, 2, 3])([])).to.be.eql([]);
    });

    it('should handle strings', function() {
      expect(set.difference('foo')('foo')).to.be.eql('');
      expect(set.difference('foo')('bar')).to.be.eql('bar');
    });
  });

  describe('#without', function() {
    it('should handle arrays', function() {
      expect(set.without(1)([1, 2])).to.be.eql([2]);
      expect(set.without(2)([1, 2])).to.be.eql([1]);
      expect(set.without(3)([1, 2])).to.be.eql([1, 2]);
      expect(set.without(3)([])).to.be.eql([]);
    });

    it('should handle strings', function() {
      expect(set.without('a')('ab')).to.be.eql('b');
      expect(set.without('b')('ab')).to.be.eql('a');
      expect(set.without('c')('ab')).to.be.eql('ab');
      expect(set.without('c')('')).to.be.eql('');
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
