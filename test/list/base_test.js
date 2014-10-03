'use strict';

var base = require('../../src/list/base');

describe('list.base', function() {
  describe('#append', function() {
    it('should handle arrays', function() {
      expect(base.append(4)([])).to.be.eql([4]);
      expect(base.append(4)([1, 2, 3])).to.be.eql([1, 2, 3, 4]);
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

  describe('#take', function() {
    it('should handle arrays', function() {
      expect(base.take(2)([])).to.be.eql([]);
      expect(base.take(2)([1, 2, 3])).to.be.eql([1, 2]);
    });

    it('should handle strings', function() {
      expect(base.take(2)('')).to.be.equal('');
      expect(base.take(2)('foo')).to.be.equal('fo');
    });
  });

  describe('#drop', function() {
    it('should handle arrays', function() {
      expect(base.drop(2)([])).to.be.eql([]);
      expect(base.drop(2)([1, 2, 3])).to.be.eql([3]);
    });

    it('should handle strings', function() {
      expect(base.drop(2)('')).to.be.equal('');
      expect(base.drop(2)('foo')).to.be.equal('o');
    });
  });

  describe('#takeWhile', function() {
    it('should handle arrays', function() {
      function p(a) { return a < 3; }
      expect(base.takeWhile(p)([])).to.be.eql([]);
      expect(base.takeWhile(p)([1, 2, 3])).to.be.eql([1, 2]);
    });

    it('should handle strings', function() {
      function p(a) { return a !== 'o'; }
      expect(base.takeWhile(p)('')).to.be.equal('');
      expect(base.takeWhile(p)('foo')).to.be.equal('f');
    });
  });

  describe('#dropWhile', function() {
    it('should handle arrays', function() {
      function p(a) { return a < 3; }
      expect(base.dropWhile(p)([])).to.be.eql([]);
      expect(base.dropWhile(p)([1, 2, 3])).to.be.eql([3]);
    });

    it('should handle strings', function() {
      function p(a) { return a !== 'o'; }
      expect(base.dropWhile(p)('')).to.be.equal('');
      expect(base.dropWhile(p)('foo')).to.be.equal('oo');
    });
  });

  describe('#splitAt', function() {
    it('should handle arrays', function() {
      expect(base.splitAt(1)([])).to.be.eql([[], []]);
      expect(base.splitAt(1)([1, 2, 3])).to.be.eql([[1], [2, 3]]);
    });

    it('should handle strings', function() {
      expect(base.splitAt(1)('')).to.be.eql(['', '']);
      expect(base.splitAt(1)('foo')).to.be.eql(['f', 'oo']);
    });
  });
});
