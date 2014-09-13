'use strict';

var fn = require('../src/fn');

describe('fn', function() {
  describe('#add', function() {
    it('should add the values', function() {
      expect(fn.add(2)(1)).to.equal(3);
    });
  });

  describe('#sub', function() {
    it('should subtract the values', function() {
      expect(fn.sub(2)(1)).to.equal(-1);
    });
  });

  describe('#mul', function() {
    it('should multiply the values', function() {
      expect(fn.mul(2)(1)).to.equal(2);
    });
  });

  describe('#div', function() {
    it('should divide the values', function() {
      expect(fn.div(2)(1)).to.equal(0.5);
    });
  });

  describe('#mod', function() {
    it('should modulo the values', function() {
      expect(fn.mod(2)(1)).to.equal(1);
    });
  });

  describe('#min', function() {
    it('should compare the values', function() {
      expect(fn.min(1)(2)).to.equal(1);
      expect(fn.min(2)(1)).to.equal(1);
      expect(fn.min(2)(2)).to.equal(2);
    });
  });

  describe('#max', function() {
    it('should compare the values', function() {
      expect(fn.max(1)(2)).to.equal(2);
      expect(fn.max(2)(1)).to.equal(2);
      expect(fn.max(2)(2)).to.equal(2);
    });
  });

  describe('#and', function() {
    it('should AND the values', function() {
      expect(fn.and(false)(false)).to.be.false;
      expect(fn.and(false)(true)).to.be.false;
      expect(fn.and(true)(false)).to.be.false;
      expect(fn.and(true)(true)).to.be.true;
    });
  });

  describe('#or', function() {
    it('should OR the values', function() {
      expect(fn.or(false)(false)).to.be.false;
      expect(fn.or(false)(true)).to.be.true;
      expect(fn.or(true)(false)).to.be.true;
      expect(fn.or(true)(true)).to.be.true;
    });
  });

  describe('#not', function() {
    it('should NOT the value', function() {
      expect(fn.not(false)).to.be.true;
      expect(fn.not(true)).to.be.false;
    });
  });

  describe('#negate', function() {
    it('should negate the value', function() {
      expect(fn.negate(1)).to.equal(-1);
      expect(fn.negate(-1)).to.equal(1);
    });
  });

  describe('#eql', function() {
    it('should compare the values', function() {
      var a = {}, b = {};

      expect(fn.eql(1)(2)).to.be.false;
      expect(fn.eql(2)(2)).to.be.true;

      expect(fn.eql('lorem')('ipsum')).to.be.false;
      expect(fn.eql('lorem')('lorem')).to.be.true;

      expect(fn.eql(a)(b)).to.be.false;
      expect(fn.eql(a)(a)).to.be.true;
    });
  });

  describe('#gt', function() {
    it('should compare the values', function() {
      expect(fn.gt(1)(2)).to.be.true;
      expect(fn.gt(2)(1)).to.be.false;
      expect(fn.gt(2)(2)).to.be.false;
    });
  });

  describe('#gte', function() {
    it('should compare the values', function() {
      expect(fn.gte(1)(2)).to.be.true;
      expect(fn.gte(2)(1)).to.be.false;
      expect(fn.gte(2)(2)).to.be.true;
    });
  });

  describe('#lt', function() {
    it('should compare the values', function() {
      expect(fn.lt(1)(2)).to.be.false;
      expect(fn.lt(2)(1)).to.be.true;
      expect(fn.lt(2)(2)).to.be.false;
    });
  });

  describe('#lte', function() {
    it('should compare the values', function() {
      expect(fn.lte(1)(2)).to.be.false;
      expect(fn.lte(2)(1)).to.be.true;
      expect(fn.lte(2)(2)).to.be.true;
    });
  });

  describe('#inc', function() {
    it('should increment the value', function() {
      expect(fn.inc(1)).to.equal(2);
      expect(fn.inc(2)).to.equal(3);
    });
  });

  describe('#dec', function() {
    it('should decrement the value', function() {
      expect(fn.dec(3)).to.equal(2);
      expect(fn.dec(2)).to.equal(1);
    });
  });

  describe('#branch', function() {
    var p = sinon.stub().returns(true),
        f = sinon.spy(),
        g = sinon.spy(),
        a = {};

    it('should return f(a) if p(a) is true', function() {
      fn.branch(p.returns(true), f, g, a);
      expect(p.calledWithExactly(a)).to.be.true;
      expect(f.calledWithExactly(a)).to.be.true;
    });

    it('should return g(a) if p(a) is false', function() {
      fn.branch(p.returns(false), f, g, a);
      expect(p.calledWithExactly(a)).to.be.true;
      expect(g.calledWithExactly(a)).to.be.true;
    });
  });
});
