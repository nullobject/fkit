'use strict';

var fold = require('../../src/list/fold');

describe('list.fold', function() {
  describe('#concat', function() {
    it('should concatenate arrays', function() {
      expect(fold.concat([1, 2, 3], [4, 5, 6], [7, 8, 9])).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should concatenate strings', function() {
      expect(fold.concat('foo', 'bar', 'baz')).to.be.equal('foobarbaz');
    });
  });

  describe('#concatMap', function() {
    it('should concat map an array', function() {
      function f(a) { return [a + 1]; }
      expect(fold.concatMap(f)([1, 2, 3])).to.be.eql([2, 3, 4]);
    });

    it('should concat map a string', function() {
      function f(a) { return a + '-'; }
      expect(fold.concatMap(f)('foo')).to.be.eql('f-o-o-');
    });
  });

  describe('#fold', function() {
    it('should fold an array from left to right', function() {
      function f(b, a) { return [a].concat(b); }
      expect(fold.fold(f)([])([1, 2, 3])).to.be.eql([3, 2, 1]);
    });

    it('should fold a string from left to right', function() {
      function f(b, a) { return a + b; }
      expect(fold.fold(f)('')('foo')).to.be.equal('oof');
    });
  });

  describe('#foldRight', function() {
    it('should fold an array from right to left', function() {
      function f(a, b) { return b.concat(a); }
      expect(fold.foldRight(f)([])([1, 2, 3])).to.be.eql([3, 2, 1]);
    });

    it('should fold a string from right to left', function() {
      function f(a, b) { return b + a; }
      expect(fold.foldRight(f)('')('foo')).to.be.equal('oof');
    });
  });

  describe('#scan', function() {
    it('should scan an array from left to right', function() {
      function f(b, a) { return [a].concat(b); }
      expect(fold.scan(f)([])([1, 2, 3])).to.be.eql([[], [1], [2, 1], [3, 2, 1]]);
    });

    it('should scan a string from left to right', function() {
      function f(b, a) { return a + b; }
      expect(fold.scan(f)('')('foo')).to.be.eql(['', 'f', 'of', 'oof']);
    });
  });

  describe('#scanRight', function() {
    it('should scan an array from right to left', function() {
      function f(a, b) { return b.concat(a); }
      expect(fold.scanRight(f)([])([1, 2, 3])).to.be.eql([[3, 2, 1], [3, 2], [3], []]);
    });

    it('should scan an array from right to left', function() {
      function f(a, b) { return b + a; }
      expect(fold.scanRight(f)('')('foo')).to.be.eql(['oof', 'oo', 'o', '']);
    });
  });
});
