'use strict';

var base = require('../../src/list/base');

describe('list.base', function() {
  describe('#append', function() {
    it('should append an element to an array', function() {
      expect(base.append(4)([1, 2, 3])).to.be.eql([1, 2, 3, 4]);
    });

    it('should append two strings', function() {
      expect(base.append('bar')('foo')).to.be.equal('foobar');
    });
  });

  describe('#prepend', function() {
    it('should prepend an element to an array', function() {
      expect(base.prepend(1)([2, 3, 4])).to.be.eql([1, 2, 3, 4]);
    });

    it('should prepend two strings', function() {
      expect(base.prepend('foo')('bar')).to.be.equal('foobar');
    });
  });

  describe('#surround', function() {
    it('should surround an array with two elements', function() {
      expect(base.surround(1)(4)([2, 3])).to.be.eql([1, 2, 3, 4]);
    });

    it('should surround a string with two strings', function() {
      expect(base.surround('fo')('ar')('ob')).to.be.equal('foobar');
    });
  });

  describe('#head', function() {
    it('should return the first element of an array', function() {
      expect(base.head([1, 2, 3])).to.be.equal(1);
    });

    it('should return the first character of a string', function() {
      expect(base.head('foo')).to.be.equal('f');
    });
  });

  describe('#tail', function() {
    it('should return the elements after the first element of an array', function() {
      expect(base.tail([1, 2, 3])).to.be.eql([2, 3]);
    });

    it('should return the characters after the first character of a string', function() {
      expect(base.tail('foo')).to.be.equal('oo');
    });
  });

  describe('#init', function() {
    it('should return the elements before the last element of an array', function() {
      expect(base.init([1, 2, 3])).to.be.eql([1, 2]);
    });

    it('should return the characters before the last character of a string', function() {
      expect(base.init('foo')).to.be.equal('fo');
    });
  });

  describe('#last', function() {
    it('should return the last element of an array', function() {
      expect(base.last([1, 2, 3])).to.be.equal(3);
    });

    it('should return the last character of a string', function() {
      expect(base.last('foo')).to.be.equal('o');
    });
  });

  describe('#length', function() {
    it('should return the length of an array', function() {
      expect(base.length([1, 2, 3])).to.be.equal(3);
    });

    it('should return the length of a string', function() {
      expect(base.length('foo')).to.be.equal(3);
    });
  });

  describe('#empty', function() {
    it('should test whether an array is empty', function() {
      expect(base.empty([])).to.be.true;
      expect(base.empty([1, 2, 3])).to.be.false;
    });

    it('should test whether a string is empty', function() {
      expect(base.empty('')).to.be.true;
      expect(base.empty('foo')).to.be.false;
    });
  });
});
