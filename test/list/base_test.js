'use strict';

var base = require('../../src/list/base');

describe('list.base', function() {
  describe('#length', function() {
    it('should handle arrays', function() {
      expect(base.length([])).to.be.equal(0);
      expect(base.length([1, 2, 3])).to.be.equal(3);
    });

    it('should handle strings', function() {
      expect(base.length('')).to.be.equal(0);
      expect(base.length('foo')).to.be.equal(3);
    });
  });

  describe('#empty', function() {
    it('should handle arrays', function() {
      expect(base.empty([])).to.be.true;
      expect(base.empty([1, 2, 3])).to.be.false;
    });

    it('should handle strings', function() {
      expect(base.empty('')).to.be.true;
      expect(base.empty('foo')).to.be.false;
    });
  });

  describe('#append', function() {
    it('should handle arrays', function() {
      expect(base.append(4)([])).to.be.eql([4]);
      expect(base.append(4)([1, 2, 3])).to.be.eql([1, 2, 3, 4]);
      expect(base.append([4, 5, 6])([[1], [2, 3]])).to.be.eql([[1], [2, 3], [4, 5, 6]]);
    });

    it('should handle strings', function() {
      expect(base.append('bar')('')).to.be.equal('bar');
      expect(base.append('bar')('foo')).to.be.equal('foobar');
    });
  });

  describe('#prepend', function() {
    it('should handle arrays', function() {
      expect(base.prepend(1)([])).to.be.eql([1]);
      expect(base.prepend(1)([2, 3, 4])).to.be.eql([1, 2, 3, 4]);
      expect(base.prepend([1])([[2, 3], [4, 5, 6]])).to.be.eql([[1], [2, 3], [4, 5, 6]]);
    });

    it('should handle strings', function() {
      expect(base.prepend('foo')('')).to.be.equal('foo');
      expect(base.prepend('foo')('bar')).to.be.equal('foobar');
    });
  });

  describe('#surround', function() {
    it('should handle arrays', function() {
      expect(base.surround(1)(4)([])).to.be.eql([1, 4]);
      expect(base.surround(1)(4)([2, 3])).to.be.eql([1, 2, 3, 4]);
    });

    it('should handle strings', function() {
      expect(base.surround('fo')('ar')('')).to.be.equal('foar');
      expect(base.surround('fo')('ar')('ob')).to.be.equal('foobar');
    });
  });

  describe('#head', function() {
    it('should handle arrays', function() {
      expect(base.head([])).to.be.undefined;
      expect(base.head([1, 2, 3])).to.be.equal(1);
    });

    it('should handle strings', function() {
      expect(base.head('')).to.be.undefined;
      expect(base.head('foo')).to.be.equal('f');
    });
  });

  describe('#last', function() {
    it('should handle arrays', function() {
      expect(base.last([])).to.be.undefined;
      expect(base.last([1, 2, 3])).to.be.equal(3);
    });

    it('should handle strings', function() {
      expect(base.last('')).to.be.undefined;
      expect(base.last('foo')).to.be.equal('o');
    });
  });

  describe('#init', function() {
    it('should handle arrays', function() {
      expect(base.init([])).to.be.eql([]);
      expect(base.init([1, 2, 3])).to.be.eql([1, 2]);
    });

    it('should handle strings', function() {
      expect(base.init('')).to.be.equal('');
      expect(base.init('foo')).to.be.equal('fo');
    });
  });

  describe('#tail', function() {
    it('should handle arrays', function() {
      expect(base.tail([])).to.be.eql([]);
      expect(base.tail([1, 2, 3])).to.be.eql([2, 3]);
    });

    it('should handle strings', function() {
      expect(base.tail('')).to.be.equal('');
      expect(base.tail('foo')).to.be.equal('oo');
    });
  });

  describe('#inits', function() {
    it('should handle arrays', function() {
      expect(base.inits([])).to.be.eql([[]]);
      expect(base.inits([1, 2, 3])).to.be.eql([[], [1], [1, 2], [1, 2, 3]]);
    });

    it('should handle strings', function() {
      expect(base.inits('')).to.be.eql(['']);
      expect(base.inits('foo')).to.be.eql(['', 'f', 'fo', 'foo']);
    });
  });

  describe('#tails', function() {
    it('should handle arrays', function() {
      expect(base.tails([])).to.be.eql([[]]);
      expect(base.tails([1, 2, 3])).to.be.eql([[1, 2, 3], [2, 3], [3], []]);
    });

    it('should handle strings', function() {
      expect(base.tails('')).to.be.eql(['']);
      expect(base.tails('foo')).to.be.eql(['foo', 'oo', 'o', '']);
    });
  });
});
