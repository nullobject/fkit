import {assert} from 'chai'
import * as math from '../src/math'

describe('math', () => {
  describe('#add', () => {
    it('adds the values', () => {
      assert.equal(math.add(2)(1), 3)
    })
  })

  describe('#sub', () => {
    it('subtracts the values', () => {
      assert.equal(math.sub(2)(1), -1)
    })
  })

  describe('#mul', () => {
    it('multiplies the values', () => {
      assert.equal(math.mul(2)(1), 2)
    })
  })

  describe('#div', () => {
    it('divides the values', () => {
      assert.equal(math.div(2)(1), 0.5)
    })
  })

  describe('#mod', () => {
    it('modulos the values', () => {
      assert.equal(math.mod(2)(1), 1)
    })
  })

  describe('#max', () => {
    it('handles numbers', () => {
      assert.equal(math.max(1)(2), 2)
      assert.equal(math.max(2)(1), 2)
      assert.equal(math.max(2)(2), 2)
    })

    it('handles strings', () => {
      assert.equal(math.max('a')('b'), 'b')
      assert.equal(math.max('b')('a'), 'b')
      assert.equal(math.max('b')('b'), 'b')
    })
  })

  describe('#min', () => {
    it('handles numbers', () => {
      assert.equal(math.min(1)(2), 1)
      assert.equal(math.min(2)(1), 1)
      assert.equal(math.min(2)(2), 2)
    })

    it('handles strings', () => {
      assert.equal(math.min('a')('b'), 'a')
      assert.equal(math.min('b')('a'), 'a')
      assert.equal(math.min('b')('b'), 'b')
    })
  })

  describe('#clamp', () => {
    it('clamps the number', () => {
      assert.equal(math.clamp(1)(3)(0), 1)
      assert.equal(math.clamp(1)(3)(1), 1)
      assert.equal(math.clamp(1)(3)(2), 2)
      assert.equal(math.clamp(1)(3)(4), 3)
    })
  })

  describe('#negate', () => {
    it('negates the value', () => {
      assert.equal(math.negate(1), -1)
      assert.equal(math.negate(-1), 1)
    })
  })

  describe('#eq', () => {
    it('compares the values', () => {
      const a = {}
      const b = {}

      assert.isFalse(math.eq(1)(2))
      assert.isTrue(math.eq(2)(2))

      assert.isFalse(math.eq('lorem')('ipsum'))
      assert.isTrue(math.eq('lorem')('lorem'))

      assert.isFalse(math.eq(a)(b))
      assert.isTrue(math.eq(a)(a))
    })
  })

  describe('#neq', () => {
    it('compares the values', () => {
      const a = {}
      const b = {}

      assert.isTrue(math.neq(1)(2))
      assert.isFalse(math.neq(2)(2))

      assert.isTrue(math.neq('lorem')('ipsum'))
      assert.isFalse(math.neq('lorem')('lorem'))

      assert.isTrue(math.neq(a)(b))
      assert.isFalse(math.neq(a)(a))
    })
  })

  describe('#gt', () => {
    it('compares the values', () => {
      assert.isTrue(math.gt(1)(2))
      assert.isFalse(math.gt(2)(1))
      assert.isFalse(math.gt(2)(2))
    })
  })

  describe('#gte', () => {
    it('compares the values', () => {
      assert.isTrue(math.gte(1)(2))
      assert.isFalse(math.gte(2)(1))
      assert.isTrue(math.gte(2)(2))
    })
  })

  describe('#lt', () => {
    it('compares the values', () => {
      assert.isFalse(math.lt(1)(2))
      assert.isTrue(math.lt(2)(1))
      assert.isFalse(math.lt(2)(2))
    })
  })

  describe('#lte', () => {
    it('compares the values', () => {
      assert.isFalse(math.lte(1)(2))
      assert.isTrue(math.lte(2)(1))
      assert.isTrue(math.lte(2)(2))
    })
  })

  describe('#even', () => {
    it('tests whether a value is even', () => {
      assert.isFalse(math.even(1))
      assert.isTrue(math.even(2))
      assert.isFalse(math.even(3))
    })
  })

  describe('#odd', () => {
    it('tests whether a value is odd', () => {
      assert.isTrue(math.odd(1))
      assert.isFalse(math.odd(2))
      assert.isTrue(math.odd(3))
    })
  })

  describe('#inc', () => {
    it('increments the value', () => {
      assert.equal(math.inc(1), 2)
      assert.equal(math.inc(2), 3)
    })
  })

  describe('#dec', () => {
    it('decrements the value', () => {
      assert.equal(math.dec(3), 2)
      assert.equal(math.dec(2), 1)
    })
  })

  describe('#randomInt', () => {
    it('returns a random integer', () => {
      const n = math.randomInt(1)(3)
      assert.isAtLeast(n, 1)
      assert.isAtMost(n, 3)
    })
  })

  describe('#randomFloat', () => {
    it('returns a random float', () => {
      const n = math.randomFloat(1)(3)
      assert.isAtLeast(n, 1)
      assert.isAtMost(n, 3)
    })
  })
})
