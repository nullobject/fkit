'use strict';

var math = require('../src/math');

describe('math', function() {
  describe('#add', function() {
    it('should add the values', function() {
      expect(math.add(2)(1)).to.equal(3);
    });
  });

  describe('#sub', function() {
    it('should subtract the values', function() {
      expect(math.sub(2)(1)).to.equal(-1);
    });
  });

  describe('#mul', function() {
    it('should multiply the values', function() {
      expect(math.mul(2)(1)).to.equal(2);
    });
  });

  describe('#div', function() {
    it('should divide the values', function() {
      expect(math.div(2)(1)).to.equal(0.5);
    });
  });

  describe('#mod', function() {
    it('should modulo the values', function() {
      expect(math.mod(2)(1)).to.equal(1);
    });
  });

  describe('#min', function() {
    it('should compare the values', function() {
      expect(math.min(1)(2)).to.equal(1);
      expect(math.min(2)(1)).to.equal(1);
      expect(math.min(2)(2)).to.equal(2);
    });
  });

  describe('#max', function() {
    it('should compare the values', function() {
      expect(math.max(1)(2)).to.equal(2);
      expect(math.max(2)(1)).to.equal(2);
      expect(math.max(2)(2)).to.equal(2);
    });
  });

  describe('#negate', function() {
    it('should negate the value', function() {
      expect(math.negate(1)).to.equal(-1);
      expect(math.negate(-1)).to.equal(1);
    });
  });

  describe('#eq', function() {
    it('should compare the values', function() {
      var a = {}, b = {};

      expect(math.eq(1)(2)).to.be.false;
      expect(math.eq(2)(2)).to.be.true;

      expect(math.eq('lorem')('ipsum')).to.be.false;
      expect(math.eq('lorem')('lorem')).to.be.true;

      expect(math.eq(a)(b)).to.be.false;
      expect(math.eq(a)(a)).to.be.true;
    });
  });

  describe('#gt', function() {
    it('should compare the values', function() {
      expect(math.gt(1)(2)).to.be.true;
      expect(math.gt(2)(1)).to.be.false;
      expect(math.gt(2)(2)).to.be.false;
    });
  });

  describe('#gte', function() {
    it('should compare the values', function() {
      expect(math.gte(1)(2)).to.be.true;
      expect(math.gte(2)(1)).to.be.false;
      expect(math.gte(2)(2)).to.be.true;
    });
  });

  describe('#lt', function() {
    it('should compare the values', function() {
      expect(math.lt(1)(2)).to.be.false;
      expect(math.lt(2)(1)).to.be.true;
      expect(math.lt(2)(2)).to.be.false;
    });
  });

  describe('#lte', function() {
    it('should compare the values', function() {
      expect(math.lte(1)(2)).to.be.false;
      expect(math.lte(2)(1)).to.be.true;
      expect(math.lte(2)(2)).to.be.true;
    });
  });

  describe('#inc', function() {
    it('should increment the value', function() {
      expect(math.inc(1)).to.equal(2);
      expect(math.inc(2)).to.equal(3);
    });
  });

  describe('#dec', function() {
    it('should decrement the value', function() {
      expect(math.dec(3)).to.equal(2);
      expect(math.dec(2)).to.equal(1);
    });
  });
});
