'use strict';

var util = require('../src/util');

describe('util', function() {
  describe('#add', function() {
    it('should add the given values', function() {
      expect(util.add(1)(2)).to.equal(3);
    });
  });

  describe('#sub', function() {
    it('should subtract the given values', function() {
      expect(util.sub(1)(2)).to.equal(-1);
    });
  });

  describe('#mul', function() {
    it('should multiply the given values', function() {
      expect(util.mul(1)(2)).to.equal(2);
    });
  });

  describe('#div', function() {
    it('should divide the given values', function() {
      expect(util.div(1)(2)).to.equal(0.5);
    });
  });

  describe('#max', function() {
    it('should compare the given values', function() {
      expect(util.max(1)(2)).to.equal(2);
      expect(util.max(2)(1)).to.equal(2);
    });
  });

  describe('#min', function() {
    it('should compare the given values', function() {
      expect(util.min(1)(2)).to.equal(1);
      expect(util.min(2)(1)).to.equal(1);
    });
  });

  describe('#and', function() {
    it('should AND the given values', function() {
      expect(util.and(false)(false)).to.be.false;
      expect(util.and(false)(true)).to.be.false;
      expect(util.and(true)(false)).to.be.false;
      expect(util.and(true)(true)).to.be.true;
    });
  });

  describe('#or', function() {
    it('should OR the given values', function() {
      expect(util.or(false)(false)).to.be.false;
      expect(util.or(false)(true)).to.be.true;
      expect(util.or(true)(false)).to.be.true;
      expect(util.or(true)(true)).to.be.true;
    });
  });

  describe('#eql', function() {
    it('should compare the given values', function() {
      var a = {}, b = {};

      expect(util.eql(1)(2)).to.be.false;
      expect(util.eql(2)(2)).to.be.true;

      expect(util.eql('lorem')('ipsum')).to.be.false;
      expect(util.eql('lorem')('lorem')).to.be.true;

      expect(util.eql(a)(b)).to.be.false;
      expect(util.eql(a)(a)).to.be.true;
    });
  });

  describe('#gt', function() {
    it('should compare the given values', function() {
      expect(util.gt(1)(2)).to.be.false;
      expect(util.gt(2)(1)).to.be.true;
      expect(util.gt(2)(2)).to.be.false;
    });
  });

  describe('#gte', function() {
    it('should compare the given values', function() {
      expect(util.gte(1)(2)).to.be.false;
      expect(util.gte(2)(1)).to.be.true;
      expect(util.gte(2)(2)).to.be.true;
    });
  });

  describe('#lt', function() {
    it('should compare the given values', function() {
      expect(util.lt(1)(2)).to.be.true;
      expect(util.lt(2)(1)).to.be.false;
      expect(util.lt(2)(2)).to.be.false;
    });
  });

  describe('#lte', function() {
    it('should compare the given values', function() {
      expect(util.lte(1)(2)).to.be.true;
      expect(util.lte(2)(1)).to.be.false;
      expect(util.lte(2)(2)).to.be.true;
    });
  });

  describe('#inc', function() {
    it('should increment the given value', function() {
      expect(util.inc(1)).to.equal(2);
      expect(util.inc(2)).to.equal(3);
    });
  });

  describe('#dec', function() {
    it('should decrement the given value', function() {
      expect(util.dec(3)).to.equal(2);
      expect(util.dec(2)).to.equal(1);
    });
  });

  describe('#range', function() {
    it('should return an array of numbers', function() {
      expect(util.range(1)(3)).to.eql([1, 2, 3]);
      expect(util.range(3)(1)).to.eql([3, 2, 1]);
      expect(util.range(1)(1)).to.eql([1]);
    });
  });
});
