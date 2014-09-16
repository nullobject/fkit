'use strict';

var logic = require('../src/logic');

describe('logic', function() {
  describe('#and', function() {
    it('should AND the values', function() {
      expect(logic.and(false)(false)).to.be.false;
      expect(logic.and(false)(true)).to.be.false;
      expect(logic.and(true)(false)).to.be.false;
      expect(logic.and(true)(true)).to.be.true;
    });
  });

  describe('#or', function() {
    it('should OR the values', function() {
      expect(logic.or(false)(false)).to.be.false;
      expect(logic.or(false)(true)).to.be.true;
      expect(logic.or(true)(false)).to.be.true;
      expect(logic.or(true)(true)).to.be.true;
    });
  });

  describe('#not', function() {
    it('should NOT the value', function() {
      expect(logic.not(false)).to.be.true;
      expect(logic.not(true)).to.be.false;
    });
  });

  describe('#branch', function() {
    var p = sinon.stub().returns(true),
        f = sinon.spy(),
        g = sinon.spy(),
        a = {};

    it('should return f(a) if p(a) is true', function() {
      logic.branch(p.returns(true), f, g, a);
      expect(p.calledWithExactly(a)).to.be.true;
      expect(f.calledWithExactly(a)).to.be.true;
    });

    it('should return g(a) if p(a) is false', function() {
      logic.branch(p.returns(false), f, g, a);
      expect(p.calledWithExactly(a)).to.be.true;
      expect(g.calledWithExactly(a)).to.be.true;
    });
  });
});
