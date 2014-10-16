'use strict';

var math = require('../src/math');

describe('math', function() {
  describe('#add', function() {
    it('should add the values', function() {
      expect(math.add(2)(1)).to.eql(3);
    });
  });

  describe('#sub', function() {
    it('should subtract the values', function() {
      expect(math.sub(2)(1)).to.eql(-1);
    });
  });

  describe('#mul', function() {
    it('should multiply the values', function() {
      expect(math.mul(2)(1)).to.eql(2);
    });
  });

  describe('#div', function() {
    it('should divide the values', function() {
      expect(math.div(2)(1)).to.eql(0.5);
    });
  });

  describe('#mod', function() {
    it('should modulo the values', function() {
      expect(math.mod(2)(1)).to.eql(1);
    });
  });

  describe('#max', function() {
    it('should handle numbers', function() {
      expect(math.max(1)(2)).to.eql(2);
      expect(math.max(2)(1)).to.eql(2);
      expect(math.max(2)(2)).to.eql(2);
    });

    it('should handle strings', function() {
      expect(math.max('a')('b')).to.eql('b');
      expect(math.max('b')('a')).to.eql('b');
      expect(math.max('b')('b')).to.eql('b');
    });
  });

  describe('#min', function() {
    it('should handle numbers', function() {
      expect(math.min(1)(2)).to.eql(1);
      expect(math.min(2)(1)).to.eql(1);
      expect(math.min(2)(2)).to.eql(2);
    });

    it('should handle strings', function() {
      expect(math.min('a')('b')).to.eql('a');
      expect(math.min('b')('a')).to.eql('a');
      expect(math.min('b')('b')).to.eql('b');
    });
  });

  describe('#negate', function() {
    it('should negate the value', function() {
      expect(math.negate(1)).to.eql(-1);
      expect(math.negate(-1)).to.eql(1);
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

  describe('#neq', function() {
    it('should compare the values', function() {
      var a = {}, b = {};

      expect(math.neq(1)(2)).to.be.true;
      expect(math.neq(2)(2)).to.be.false;

      expect(math.neq('lorem')('ipsum')).to.be.true;
      expect(math.neq('lorem')('lorem')).to.be.false;

      expect(math.neq(a)(b)).to.be.true;
      expect(math.neq(a)(a)).to.be.false;
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
      expect(math.inc(1)).to.eql(2);
      expect(math.inc(2)).to.eql(3);
    });
  });

  describe('#dec', function() {
    it('should decrement the value', function() {
      expect(math.dec(3)).to.eql(2);
      expect(math.dec(2)).to.eql(1);
    });
  });

  describe('#randomInt', function() {
    it('should return a random integer', function() {
      expect(math.randomInt(1)(3)).to.be.within(1, 3);
    });
  });

  describe('#randomFloat', function() {
    it('should return a random float', function() {
      expect(math.randomFloat(1)(3)).to.be.within(1, 3);
    });
  });
});
