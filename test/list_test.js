'use strict';

var list = require('../src/list');

describe('list', function() {
  describe('#append', function() {
    it('should append an element to an array', function() {
      expect(list.append(4)([1, 2, 3])).to.be.eql([1, 2, 3, 4]);
    });

    it('should append two strings', function() {
      expect(list.append('bar')('foo')).to.be.equal('foobar');
    });
  });

  describe('#prepend', function() {
    it('should prepend an element to an array', function() {
      expect(list.prepend(4)([1, 2, 3])).to.be.eql([4, 1, 2, 3]);
    });

    it('should prepend two strings', function() {
      expect(list.prepend('bar')('foo')).to.be.equal('barfoo');
    });
  });

  describe('#head', function() {
    it('should return the first element of an array', function() {
      expect(list.head([1, 2, 3])).to.be.equal(1);
    });

    it('should return the first character of a string', function() {
      expect(list.head('foo')).to.be.equal('f');
    });
  });

  describe('#tail', function() {
    it('should return the elements after the first element of an array', function() {
      expect(list.tail([1, 2, 3])).to.be.eql([2, 3]);
    });

    it('should return the characters after the first character of a string', function() {
      expect(list.tail('foo')).to.be.equal('oo');
    });
  });

  describe('#init', function() {
    it('should return the elements before the last element of an array', function() {
      expect(list.init([1, 2, 3])).to.be.eql([1, 2]);
    });

    it('should return the characters before the last character of a string', function() {
      expect(list.init('foo')).to.be.equal('fo');
    });
  });

  describe('#last', function() {
    it('should return the last element of an array', function() {
      expect(list.last([1, 2, 3])).to.be.equal(3);
    });

    it('should return the last character of a string', function() {
      expect(list.last('foo')).to.be.equal('o');
    });
  });

  describe('#length', function() {
    it('should return the length of an array', function() {
      expect(list.length([1, 2, 3])).to.be.equal(3);
    });

    it('should return the length of a string', function() {
      expect(list.length('foo')).to.be.equal(3);
    });
  });

  describe('#empty', function() {
    it('should test whether an array is empty', function() {
      expect(list.empty([])).to.be.true;
      expect(list.empty([1, 2, 3])).to.be.false;
    });

    it('should test whether a string is empty', function() {
      expect(list.empty('')).to.be.true;
      expect(list.empty('foo')).to.be.false;
    });
  });
});
