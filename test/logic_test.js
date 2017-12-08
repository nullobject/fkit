const assert = require('chai').assert
const logic = require('../src/logic')
const sinon = require('sinon')

describe('logic', function () {
  describe('#and', function () {
    it('should AND the values', function () {
      assert.isFalse(logic.and(false)(false))
      assert.isFalse(logic.and(false)(true))
      assert.isFalse(logic.and(true)(false))
      assert.isTrue(logic.and(true)(true))
    })
  })

  describe('#or', function () {
    it('should OR the values', function () {
      assert.isFalse(logic.or(false)(false))
      assert.isTrue(logic.or(false)(true))
      assert.isTrue(logic.or(true)(false))
      assert.isTrue(logic.or(true)(true))
    })
  })

  describe('#not', function () {
    it('should NOT the value', function () {
      assert.isTrue(logic.not(false))
      assert.isFalse(logic.not(true))
    })
  })

  describe('#branch', function () {
    const p = sinon.stub().returns(true)
    const f = sinon.spy()
    const g = sinon.spy()
    const a = {}

    it('should return f(a) if p(a) is true', function () {
      logic.branch(p.returns(true), f, g, a)
      assert.isTrue(p.calledWithExactly(a))
      assert.isTrue(f.calledWithExactly(a))
    })

    it('should return g(a) if p(a) is false', function () {
      logic.branch(p.returns(false), f, g, a)
      assert.isTrue(p.calledWithExactly(a))
      assert.isTrue(g.calledWithExactly(a))
    })
  })

  describe('#whereAll', function () {
    it('should apply the list of predicate functions', function () {
      function f (a) { return a >= 1 }
      function g (a) { return a >= 2 }
      function h (a) { return a >= 3 }
      assert.isFalse(logic.whereAll([f, g, h])(0))
      assert.isFalse(logic.whereAll([f, g, h])(1))
      assert.isFalse(logic.whereAll([f, g, h])(2))
      assert.isTrue(logic.whereAll([f, g, h])(3))
      assert.isTrue(logic.whereAll([f, g, h])(4))
    })
  })

  describe('#whereAny', function () {
    it('should apply the list of predicate functions', function () {
      function f (a) { return a >= 1 }
      function g (a) { return a >= 2 }
      function h (a) { return a >= 3 }
      assert.isFalse(logic.whereAny([f, g, h])(0))
      assert.isTrue(logic.whereAny([f, g, h])(1))
      assert.isTrue(logic.whereAny([f, g, h])(2))
      assert.isTrue(logic.whereAny([f, g, h])(3))
      assert.isTrue(logic.whereAny([f, g, h])(4))
    })
  })
})
