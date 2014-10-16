'use strict';

var search = require('../../src/list/search');

describe('list.search', function() {
  describe('#elem', function() {
    it('should handle an array', function() {
      expect(search.elem(0)([1, 2, 3])).to.be.false;
      expect(search.elem(1)([1, 2, 3])).to.be.true;
    });

    it('should handle a string', function() {
      expect(search.elem('b')('foo')).to.be.false;
      expect(search.elem('o')('foo')).to.be.true;
    });
  });

  describe('#elemIndex', function() {
    it('should handle an array', function() {
      expect(search.elemIndex(0)([1, 2, 3])).to.be.undefined;
      expect(search.elemIndex(1)([1, 2, 3])).to.eql(0);
    });

    it('should handle a string', function() {
      expect(search.elemIndex('b')('foo')).to.be.undefined;
      expect(search.elemIndex('o')('foo')).to.eql(1);
    });
  });

  describe('#elemIndices', function() {
    it('should handle an array', function() {
      expect(search.elemIndices(0)([1, 2, 3])).to.eql([]);
      expect(search.elemIndices(1)([1, 2, 3])).to.eql([0]);
    });

    it('should handle a string', function() {
      expect(search.elemIndices('b')('foo')).to.eql([]);
      expect(search.elemIndices('o')('foo')).to.eql([1, 2]);
    });
  });

  describe('#find', function() {
    it('should handle an array', function() {
      function p(a) { return a > 1; }
      expect(search.find(p)([])).to.be.undefined;
      expect(search.find(p)([1, 2, 3])).to.eql(2);
    });

    it('should handle a string', function() {
      function p(a) { return a === 'o'; }
      expect(search.find(p)('')).to.be.undefined;
      expect(search.find(p)('foo')).to.eql('o');
    });
  });

  describe('#findIndex', function() {
    it('should handle an array', function() {
      function p(a) { return a > 1; }
      expect(search.findIndex(p)([])).to.be.undefined;
      expect(search.findIndex(p)([1, 2, 3])).to.eql(1);
    });

    it('should handle a string', function() {
      function p(a) { return a === 'o'; }
      expect(search.findIndex(p)('')).to.be.undefined;
      expect(search.findIndex(p)('foo')).to.eql(1);
    });
  });

  describe('#findIndices', function() {
    it('should handle an array', function() {
      function p(a) { return a > 1; }
      expect(search.findIndices(p)([])).to.eql([]);
      expect(search.findIndices(p)([1, 2, 3])).to.eql([1, 2]);
    });

    it('should handle a string', function() {
      function p(a) { return a === 'o'; }
      expect(search.findIndices(p)('')).to.eql([]);
      expect(search.findIndices(p)('foo')).to.eql([1, 2]);
    });
  });

  describe('#filter', function() {
    it('should handle an array', function() {
      function p(a) { return a > 1; }
      expect(search.filter(p)([])).to.eql([]);
      expect(search.filter(p)([1, 2, 3])).to.eql([2, 3]);
    });

    it('should handle a string', function() {
      function p(a) { return a === 'o'; }
      expect(search.filter(p)('')).to.eql('');
      expect(search.filter(p)('foo')).to.eql('oo');
    });
  });

  describe('#partition', function() {
    it('should handle an array', function() {
      function p(a) { return a > 1; }
      expect(search.partition(p)([])).to.eql([[], []]);
      expect(search.partition(p)([1, 2, 3])).to.eql([[2, 3], [1]]);
    });

    it('should handle a string', function() {
      function p(a) { return a === 'o'; }
      expect(search.partition(p)('')).to.eql(['', '']);
      expect(search.partition(p)('foo')).to.eql(['oo', 'f']);
    });
  });

  describe('#all', function() {
    it('should handle an array', function() {
      function p(a) { return a > 1; }
      expect(search.all(p)([3]      )).to.be.true;
      expect(search.all(p)([2, 3]   )).to.be.true;
      expect(search.all(p)([3, 2, 1])).to.be.false;
    });

    it('should handle a string', function() {
      function p(a) { return a !== 'r'; }
      expect(search.all(p)('b'  )).to.be.true;
      expect(search.all(p)('ba' )).to.be.true;
      expect(search.all(p)('bar')).to.be.false;
    });
  });

  describe('#any', function() {
    it('should handle an array', function() {
      function p(a) { return a > 1; }
      expect(search.any(p)([1]      )).to.be.false;
      expect(search.any(p)([1, 2]   )).to.be.true;
      expect(search.any(p)([1, 2, 3])).to.be.true;
    });

    it('should handle a string', function() {
      function p(a) { return a !== 'r'; }
      expect(search.any(p)('r'  )).to.be.false;
      expect(search.any(p)('ar' )).to.be.true;
      expect(search.any(p)('bar')).to.be.true;
    });
  });

  describe('#isPrefixOf', function() {
    it('should handle an array', function() {
      expect(search.isPrefixOf([]    )([]       )).to.be.true;
      expect(search.isPrefixOf([1]   )([]       )).to.be.false;
      expect(search.isPrefixOf([1]   )([1, 2, 3])).to.be.true;
      expect(search.isPrefixOf([2, 3])([1, 2, 3])).to.be.false;
    });

    it('should handle a string', function() {
      expect(search.isPrefixOf(''  )(''   )).to.be.true;
      expect(search.isPrefixOf('f' )(''   )).to.be.false;
      expect(search.isPrefixOf('f' )('foo')).to.be.true;
      expect(search.isPrefixOf('oo')('foo')).to.be.false;
    });
  });

  describe('#isSuffixOf', function() {
    it('should handle an array', function() {
      expect(search.isSuffixOf([]    )([]       )).to.be.true;
      expect(search.isSuffixOf([1]   )([]       )).to.be.false;
      expect(search.isSuffixOf([1]   )([1, 2, 3])).to.be.false;
      expect(search.isSuffixOf([2, 3])([1, 2, 3])).to.be.true;
    });

    it('should handle a string', function() {
      expect(search.isSuffixOf(''  )(''   )).to.be.true;
      expect(search.isSuffixOf('f' )(''   )).to.be.false;
      expect(search.isSuffixOf('f' )('foo')).to.be.false;
      expect(search.isSuffixOf('oo')('foo')).to.be.true;
    });
  });

  describe('#isInfixOf', function() {
    it('should handle an array', function() {
      expect(search.isInfixOf([]       )([]       )).to.be.true;
      expect(search.isInfixOf([1]      )([1, 2, 3])).to.be.true;
      expect(search.isInfixOf([2, 3]   )([1, 2, 3])).to.be.true;
      expect(search.isInfixOf([1, 2, 3])([1, 2, 3])).to.be.true;
      expect(search.isInfixOf([3, 2]   )([1, 2, 3])).to.be.false;
      expect(search.isInfixOf([1]      )([]       )).to.be.false;
    });

    it('should handle a string', function() {
      expect(search.isInfixOf(''   )(''   )).to.be.true;
      expect(search.isInfixOf('f'  )('foo')).to.be.true;
      expect(search.isInfixOf('oo' )('foo')).to.be.true;
      expect(search.isInfixOf('foo')('foo')).to.be.true;
      expect(search.isInfixOf('f'  )(''   )).to.be.false;
    });
  });
});
