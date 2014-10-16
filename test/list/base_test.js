'use strict';

var base = require('../../src/list/base');

describe('list.base', function() {
  describe('#isArrayOfStrings', function() {
    it('should handle an empty array', function() {
      expect(base.isArrayOfStrings([])).to.be.false;
    });

    it('should handle an empty string', function() {
      expect(base.isArrayOfStrings('')).to.be.false;
    });

    it('should handle an array of numbers', function() {
      expect(base.isArrayOfStrings([1, 2, 3])).to.be.false;
      expect(base.isArrayOfStrings([1, [2, 3]])).to.be.false;
    });

    it('should handle an array of strings', function() {
      expect(base.isArrayOfStrings(['a', 'b', 'c'])).to.be.true;
      expect(base.isArrayOfStrings(['a', ['b', 'c']])).to.be.false;
    });
  });

  describe('#length', function() {
    it('should handle an empty array', function() {
      expect(base.length([])).to.eql(0);
    });

    it('should handle an empty string', function() {
      expect(base.length('')).to.eql(0);
    });

    it('should handle an array', function() {
      expect(base.length([1, 2, 3])).to.eql(3);
    });

    it('should handle a string', function() {
      expect(base.length('foo')).to.eql(3);
    });
  });

  describe('#empty', function() {
    it('should handle an empty array', function() {
      expect(base.empty([])).to.be.true;
    });

    it('should handle an empty string', function() {
      expect(base.empty('')).to.be.true;
    });

    it('should handle an array', function() {
      expect(base.empty([1, 2, 3])).to.be.false;
    });

    it('should handle a string', function() {
      expect(base.empty('foo')).to.be.false;
    });
  });

  describe('#append', function() {
    it('should handle an empty array', function() {
      expect(base.append(4)([])).to.eql([4]);
    });

    it('should handle an empty string', function() {
      expect(base.append('bar')('')).to.eql('bar');
    });

    it('should handle an array', function() {
      expect(base.append(4)([1, 2, 3])).to.eql([1, 2, 3, 4]);
      expect(base.append([4, 5, 6])([[1], [2, 3]])).to.eql([[1], [2, 3], [4, 5, 6]]);
    });

    it('should handle a string', function() {
      expect(base.append('bar')('foo')).to.eql('foobar');
      expect(base.append('bar')(['f', 'oo'])).to.eql(['f', 'oo', 'bar']);
    });
  });

  describe('#prepend', function() {
    it('should handle an empty array', function() {
      expect(base.prepend(1)([])).to.eql([1]);
    });

    it('should handle an empty string', function() {
      expect(base.prepend('foo')('')).to.eql('foo');
    });

    it('should handle an array', function() {
      expect(base.prepend(1)([2, 3, 4])).to.eql([1, 2, 3, 4]);
      expect(base.prepend([1])([[2, 3], [4, 5, 6]])).to.eql([[1], [2, 3], [4, 5, 6]]);
    });

    it('should handle a string', function() {
      expect(base.prepend('foo')('bar')).to.eql('foobar');
      expect(base.prepend('f')(['oo', 'bar'])).to.eql(['f', 'oo', 'bar']);
    });
  });

  describe('#surround', function() {
    it('should handle an empty array', function() {
      expect(base.surround(1)(4)([])).to.eql([1, 4]);
    });

    it('should handle an empty string', function() {
      expect(base.surround('fo')('ar')('')).to.eql('foar');
    });

    it('should handle an array', function() {
      expect(base.surround(1)(4)([2, 3])).to.eql([1, 2, 3, 4]);
    });

    it('should handle a string', function() {
      expect(base.surround('fo')('ar')('ob')).to.eql('foobar');
    });
  });

  describe('#head', function() {
    it('should handle an empty array', function() {
      expect(base.head([])).to.be.undefined;
    });

    it('should handle an empty string', function() {
      expect(base.head('')).to.be.undefined;
    });

    it('should handle an array', function() {
      expect(base.head([1, 2, 3])).to.eql(1);
    });

    it('should handle a string', function() {
      expect(base.head('foo')).to.eql('f');
    });
  });

  describe('#last', function() {
    it('should handle an empty array', function() {
      expect(base.last([])).to.be.undefined;
    });

    it('should handle an empty string', function() {
      expect(base.last('')).to.be.undefined;
    });

    it('should handle an array', function() {
      expect(base.last([1, 2, 3])).to.eql(3);
    });

    it('should handle a string', function() {
      expect(base.last('foo')).to.eql('o');
    });
  });

  describe('#init', function() {
    it('should handle an empty array', function() {
      expect(base.init([])).to.eql([]);
    });

    it('should handle an empty string', function() {
      expect(base.init('')).to.eql('');
    });

    it('should handle an array', function() {
      expect(base.init([1, 2, 3])).to.eql([1, 2]);
    });

    it('should handle a string', function() {
      expect(base.init('foo')).to.eql('fo');
    });
  });

  describe('#tail', function() {
    it('should handle an empty array', function() {
      expect(base.tail([])).to.eql([]);
    });

    it('should handle an empty string', function() {
      expect(base.tail('')).to.eql('');
    });

    it('should handle an array', function() {
      expect(base.tail([1, 2, 3])).to.eql([2, 3]);
    });

    it('should handle a string', function() {
      expect(base.tail('foo')).to.eql('oo');
    });
  });

  describe('#inits', function() {
    it('should handle an empty array', function() {
      expect(base.inits([])).to.eql([[]]);
    });

    it('should handle an empty string', function() {
      expect(base.inits('')).to.eql(['']);
    });

    it('should handle an array', function() {
      expect(base.inits([1, 2, 3])).to.eql([[], [1], [1, 2], [1, 2, 3]]);
    });

    it('should handle a string', function() {
      expect(base.inits('foo')).to.eql(['', 'f', 'fo', 'foo']);
    });
  });

  describe('#tails', function() {
    it('should handle an empty array', function() {
      expect(base.tails([])).to.eql([[]]);
    });

    it('should handle an empty string', function() {
      expect(base.tails('')).to.eql(['']);
    });

    it('should handle an array', function() {
      expect(base.tails([1, 2, 3])).to.eql([[1, 2, 3], [2, 3], [3], []]);
    });

    it('should handle a string', function() {
      expect(base.tails('foo')).to.eql(['foo', 'oo', 'o', '']);
    });
  });
});
