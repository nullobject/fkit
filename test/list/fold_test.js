'use strict';

var fn   = require('../../src/fn'),
    fold = require('../../src/list/fold');


describe('list.fold', function() {
  describe('#flattenStrings', function() {
    it('should handle an array of numbers', function() {
      expect(fold.flattenStrings([1, [2, 3]])).to.eql([1, [2, 3]]);
    });

    it('should handle an array of strings', function() {
      expect(fold.flattenStrings(['a', ['b', 'c']])).to.eql(['a', 'bc']);
    });
  });

  describe('#concat', function() {
    it('should handle an empty array', function() {
      expect(fold.concat([])).to.eql([]);
    });

    it('should handle an empty string', function() {
      expect(fold.concat('')).to.eql('');
    });

    it('should handle a list of numbers', function() {
      expect(fold.concat(1, 2, 3, 4, 5, 6)).to.eql([1, 2, 3, 4, 5, 6]);
      expect(fold.concat([1], [2, 3], [4, 5, 6])).to.eql([1, 2, 3, 4, 5, 6]);
    });

    it('should handle a list of strings', function() {
      expect(fold.concat('foobar')).to.eql('foobar');
      expect(fold.concat('f', 'oo', 'bar')).to.eql('foobar');
    });

    it('should handle an array of numbers', function() {
      expect(fold.concat([1, 2, 3, 4, 5, 6])).to.eql([1, 2, 3, 4, 5, 6]);
      expect(fold.concat([[1], [2, 3], [4, 5, 6]])).to.eql([1, 2, 3, 4, 5, 6]);

      expect(fold.concat([[[1]], [[2, 3]], [[4, 5, 6]]])).to.eql([[1], [2, 3], [4, 5, 6]]);
      expect(fold.concat([[[1]], [[2, 3], [4, 5, 6]]])).to.eql([[1], [2, 3], [4, 5, 6]]);
    });

    it('should handle an array of strings', function() {
      expect(fold.concat(['foobar'])).to.eql('foobar');
      expect(fold.concat(['f', 'oo', 'bar'])).to.eql('foobar');

      expect(fold.concat([['f'], ['oo'], ['bar']])).to.eql(['f', 'oo', 'bar']);
      expect(fold.concat([['f'], ['oo', 'bar']])).to.eql(['f', 'oo', 'bar']);
    });

    it('should handle a heterogenous list', function() {
      expect(fold.concat(1, 2, 3, 'foo')).to.eql([1, 2, 3, 'foo']);
      expect(fold.concat(1, 2, 3, ['foo'])).to.eql([1, 2, 3, 'foo']);
      expect(fold.concat([1, 2, 3], 'foo')).to.eql([1, 2, 3, 'foo']);
      expect(fold.concat([1, 2, 3], ['foo'])).to.eql([1, 2, 3, 'foo']);

      expect(fold.concat('foo', 1, 2, 3)).to.eql(['foo', 1, 2, 3]);
      expect(fold.concat('foo', [1, 2, 3])).to.eql(['foo', 1, 2, 3]);
      expect(fold.concat(['foo'], 1, 2, 3)).to.eql(['foo', 1, 2, 3]);
      expect(fold.concat(['foo'], [1, 2, 3])).to.eql(['foo', 1, 2, 3]);
    });
  });

  describe('#concatMap', function() {
    function f(a) { return [a, 0]; }
    function g(a) { return [a, '-']; }
    function h(a) { return [[a, 0]]; }
    function i(a) { return [[a, '-']]; }

    it('should handle an empty array', function() {
      expect(fold.concatMap(f)([])).to.eql([]);
    });

    it('should handle an empty string', function() {
      expect(fold.concatMap(g)('')).to.eql('');
    });

    it('should handle an array of numbers', function() {
      expect(fold.concatMap(f)([1, 2, 3])).to.eql([1, 0, 2, 0, 3, 0]);
      expect(fold.concatMap(h)([1, 2, 3])).to.eql([[1, 0], [2, 0], [3, 0]]);
    });

    it('should handle an array of strings', function() {
      expect(fold.concatMap(g)(['f', 'o', 'o'])).to.eql('f-o-o-');
      expect(fold.concatMap(i)(['f', 'o', 'o'])).to.eql(['f-', 'o-', 'o-']);
    });

    it('should handle a string', function() {
      expect(fold.concatMap(g)('foo')).to.eql('f-o-o-');
      expect(fold.concatMap(i)('foo')).to.eql(['f-', 'o-', 'o-']);
    });
  });

  describe('#fold', function() {
    it('should handle an array', function() {
      function f(b, a) { return [a].concat(b); }
      expect(fold.fold(f)([])([1, 2, 3])).to.eql([3, 2, 1]);
    });

    it('should handle a string', function() {
      function f(b, a) { return a + b; }
      expect(fold.fold(f)('')('foo')).to.eql('oof');
    });
  });

  describe('#foldRight', function() {
    it('should handle an array', function() {
      function f(a, b) { return b.concat(a); }
      expect(fold.foldRight(f)([])([1, 2, 3])).to.eql([3, 2, 1]);
    });

    it('should handle a string', function() {
      function f(a, b) { return b + a; }
      expect(fold.foldRight(f)('')('foo')).to.eql('oof');
    });
  });

  describe('#scan', function() {
    it('should handle an array', function() {
      function f(b, a) { return [a].concat(b); }
      expect(fold.scan(f)([])([1, 2, 3])).to.eql([[], [1], [2, 1], [3, 2, 1]]);
    });

    it('should handle a string', function() {
      function f(b, a) { return a + b; }
      expect(fold.scan(f)('')('foo')).to.eql(['', 'f', 'of', 'oof']);
    });
  });

  describe('#scanRight', function() {
    it('should handle an array', function() {
      function f(a, b) { return b.concat(a); }
      expect(fold.scanRight(f)([])([1, 2, 3])).to.eql([[3, 2, 1], [3, 2], [3], []]);
    });

    it('should handle a string', function() {
      function f(a, b) { return b + a; }
      expect(fold.scanRight(f)('')('foo')).to.eql(['oof', 'oo', 'o', '']);
    });
  });

  describe('#maximum', function() {
    it('should handle an array of numbers', function() {
      expect(fold.maximum([1, 2, 3])).to.eql(3);
    });

    it('should handle a string', function() {
      expect(fold.maximum('foo')).to.eql('o');
    });
  });

  describe('#minimum', function() {
    it('should handle an array of numbers', function() {
      expect(fold.minimum([1, 2, 3])).to.eql(1);
    });

    it('should handle a string', function() {
      expect(fold.minimum('foo')).to.eql('f');
    });
  });

  describe('#maximumBy', function() {
    var f = fn.compare;

    it('should handle an array of numbers', function() {
      expect(fold.maximumBy(f)([1, 2, 3])).to.eql(3);
    });

    it('should handle a string', function() {
      expect(fold.maximumBy(f)('foo')).to.eql('o');
    });
  });

  describe('#minimumBy', function() {
    var f = fn.compare;

    it('should handle an array of numbers', function() {
      expect(fold.minimumBy(f)([1, 2, 3])).to.eql(1);
    });

    it('should handle a string', function() {
      expect(fold.minimumBy(f)('foo')).to.eql('f');
    });
  });

  describe('#sum', function() {
    it('should handle an array of numbers', function() {
      expect(fold.sum([1, 2, 3])).to.eql(6);
    });
  });

  describe('#product', function() {
    it('should handle an array of numbers', function() {
      expect(fold.product([2, 3, 4])).to.eql(24);
    });
  });
});
