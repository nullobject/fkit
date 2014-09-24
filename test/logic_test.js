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

  describe('#whereAll', function() {
    it('should apply the list of predicate functions', function() {
      function f(a) { return a >= 1; }
      function g(a) { return a >= 2; }
      function h(a) { return a >= 3; }
      expect(logic.whereAll([f, g, h])(0)).to.be.false;
      expect(logic.whereAll([f, g, h])(1)).to.be.false;
      expect(logic.whereAll([f, g, h])(2)).to.be.false;
      expect(logic.whereAll([f, g, h])(3)).to.be.true;
      expect(logic.whereAll([f, g, h])(4)).to.be.true;
    });
  });

  describe('#whereAny', function() {
    it('should apply the list of predicate functions', function() {
      function f(a) { return a >= 1; }
      function g(a) { return a >= 2; }
      function h(a) { return a >= 3; }
      expect(logic.whereAny([f, g, h])(0)).to.be.false;
      expect(logic.whereAny([f, g, h])(1)).to.be.true;
      expect(logic.whereAny([f, g, h])(2)).to.be.true;
      expect(logic.whereAny([f, g, h])(3)).to.be.true;
      expect(logic.whereAny([f, g, h])(4)).to.be.true;
    });
  });
});
