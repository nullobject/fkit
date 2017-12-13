import {assert} from 'chai'
import * as logic from '../src/logic'
import sinon from 'sinon'

describe('logic', () => {
  describe('#and', () => {
    it('ANDs the values', () => {
      assert.isFalse(logic.and(false)(false))
      assert.isFalse(logic.and(false)(true))
      assert.isFalse(logic.and(true)(false))
      assert.isTrue(logic.and(true)(true))
    })
  })

  describe('#or', () => {
    it('ORs the values', () => {
      assert.isFalse(logic.or(false)(false))
      assert.isTrue(logic.or(false)(true))
      assert.isTrue(logic.or(true)(false))
      assert.isTrue(logic.or(true)(true))
    })
  })

  describe('#not', () => {
    it('NOTs the value', () => {
      assert.isTrue(logic.not(false))
      assert.isFalse(logic.not(true))
    })
  })

  describe('#branch', () => {
    const p = sinon.stub().returns(true)
    const f = sinon.spy()
    const g = sinon.spy()
    const a = {}

    it('returns f(a) if p(a) is true', () => {
      logic.branch(p.returns(true), f, g, a)
      assert.isTrue(p.calledWithExactly(a))
      assert.isTrue(f.calledWithExactly(a))
    })

    it('returns g(a) if p(a) is false', () => {
      logic.branch(p.returns(false), f, g, a)
      assert.isTrue(p.calledWithExactly(a))
      assert.isTrue(g.calledWithExactly(a))
    })
  })

  describe('#whereAll', () => {
    it('applies the list of predicate functions', () => {
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

  describe('#whereAny', () => {
    it('applies the list of predicate functions', () => {
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
