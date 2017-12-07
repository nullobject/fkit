'use strict'

var assert = require('chai').assert
var math = require('../src/math')

describe('math', function () {
  describe('#add', function () {
    it('should add the values', function () {
      assert.equal(math.add(2)(1), 3)
    })
  })

  describe('#sub', function () {
    it('should subtract the values', function () {
      assert.equal(math.sub(2)(1), -1)
    })
  })

  describe('#mul', function () {
    it('should multiply the values', function () {
      assert.equal(math.mul(2)(1), 2)
    })
  })

  describe('#div', function () {
    it('should divide the values', function () {
      assert.equal(math.div(2)(1), 0.5)
    })
  })

  describe('#mod', function () {
    it('should modulo the values', function () {
      assert.equal(math.mod(2)(1), 1)
    })
  })

  describe('#max', function () {
    it('should handle numbers', function () {
      assert.equal(math.max(1)(2), 2)
      assert.equal(math.max(2)(1), 2)
      assert.equal(math.max(2)(2), 2)
    })

    it('should handle strings', function () {
      assert.equal(math.max('a')('b'), 'b')
      assert.equal(math.max('b')('a'), 'b')
      assert.equal(math.max('b')('b'), 'b')
    })
  })

  describe('#min', function () {
    it('should handle numbers', function () {
      assert.equal(math.min(1)(2), 1)
      assert.equal(math.min(2)(1), 1)
      assert.equal(math.min(2)(2), 2)
    })

    it('should handle strings', function () {
      assert.equal(math.min('a')('b'), 'a')
      assert.equal(math.min('b')('a'), 'a')
      assert.equal(math.min('b')('b'), 'b')
    })
  })

  describe('#negate', function () {
    it('should negate the value', function () {
      assert.equal(math.negate(1), -1)
      assert.equal(math.negate(-1), 1)
    })
  })

  describe('#eq', function () {
    it('should compare the values', function () {
      var a = {}
      var b = {}

      assert.isFalse(math.eq(1)(2))
      assert.isTrue(math.eq(2)(2))

      assert.isFalse(math.eq('lorem')('ipsum'))
      assert.isTrue(math.eq('lorem')('lorem'))

      assert.isFalse(math.eq(a)(b))
      assert.isTrue(math.eq(a)(a))
    })
  })

  describe('#neq', function () {
    it('should compare the values', function () {
      var a = {}
      var b = {}

      assert.isTrue(math.neq(1)(2))
      assert.isFalse(math.neq(2)(2))

      assert.isTrue(math.neq('lorem')('ipsum'))
      assert.isFalse(math.neq('lorem')('lorem'))

      assert.isTrue(math.neq(a)(b))
      assert.isFalse(math.neq(a)(a))
    })
  })

  describe('#gt', function () {
    it('should compare the values', function () {
      assert.isTrue(math.gt(1)(2))
      assert.isFalse(math.gt(2)(1))
      assert.isFalse(math.gt(2)(2))
    })
  })

  describe('#gte', function () {
    it('should compare the values', function () {
      assert.isTrue(math.gte(1)(2))
      assert.isFalse(math.gte(2)(1))
      assert.isTrue(math.gte(2)(2))
    })
  })

  describe('#lt', function () {
    it('should compare the values', function () {
      assert.isFalse(math.lt(1)(2))
      assert.isTrue(math.lt(2)(1))
      assert.isFalse(math.lt(2)(2))
    })
  })

  describe('#lte', function () {
    it('should compare the values', function () {
      assert.isFalse(math.lte(1)(2))
      assert.isTrue(math.lte(2)(1))
      assert.isTrue(math.lte(2)(2))
    })
  })

  describe('#inc', function () {
    it('should increment the value', function () {
      assert.equal(math.inc(1), 2)
      assert.equal(math.inc(2), 3)
    })
  })

  describe('#dec', function () {
    it('should decrement the value', function () {
      assert.equal(math.dec(3), 2)
      assert.equal(math.dec(2), 1)
    })
  })

  describe('#randomInt', function () {
    it('should return a random integer', function () {
      var n = math.randomInt(1)(3)
      assert.isAtLeast(n, 1)
      assert.isAtMost(n, 3)
    })
  })

  describe('#randomFloat', function () {
    it('should return a random float', function () {
      var n = math.randomFloat(1)(3)
      assert.isAtLeast(n, 1)
      assert.isAtMost(n, 3)
    })
  })
})
