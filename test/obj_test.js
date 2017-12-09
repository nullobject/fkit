const assert = require('chai').assert
const obj = require('../src/obj')
const sinon = require('sinon')

function f () {}
const spy = sinon.spy(f)

function MyObject () {}
MyObject.prototype.constructor = MyObject

function buildObject () {
  const o = new MyObject()

  o.name = 'Jane'
  o.age = 20
  o.address = {city: 'Melbourne', country: 'Australia'}
  o.hello = spy

  return o
}

describe('object', function () {
  const target = buildObject()

  describe('#applyMethod', function () {
    it('applies a nullary function', function () {
      obj.applyMethod('hello')()(target)
      assert.isTrue(spy.calledWithExactly(undefined))
    })

    it('applies a unary function', function () {
      obj.applyMethod('hello')(1)(target)
      assert.isTrue(spy.calledWithExactly(1))
    })
  })

  describe('#applyMethod2', function () {
    it('applies a nullary function', function () {
      obj.applyMethod2('hello')()()(target)
      assert.isTrue(spy.calledWithExactly(undefined, undefined))
    })

    it('applies a unary function', function () {
      obj.applyMethod2('hello')(1)(2)(target)
      assert.isTrue(spy.calledWithExactly(1, 2))
    })
  })

  describe('#applyMethod3', function () {
    it('applies a nullary function', function () {
      obj.applyMethod3('hello')()()()(target)
      assert.isTrue(spy.calledWithExactly(undefined, undefined, undefined))
    })

    it('applies a unary function', function () {
      obj.applyMethod3('hello')(1)(2)(3)(target)
      assert.isTrue(spy.calledWithExactly(1, 2, 3))
    })
  })

  describe('#copy', function () {
    const result = obj.copy(target, {age: 21})

    it('copies the properties of the given objects', function () {
      assert.deepEqual(result, {name: 'Jane', age: 21, address: {city: 'Melbourne', country: 'Australia'}, hello: spy})
    })

    it('preserves the prototype of the target object', function () {
      assert.instanceOf(result, MyObject)
    })
  })

  describe('#get', function () {
    it('returns the property at the given key', function () {
      assert.equal(obj.get('name')(target), 'Jane')
      assert.equal(obj.get('age')(target), 20)
      assert.deepEqual(obj.get('address')(target), {city: 'Melbourne', country: 'Australia'})
      assert.equal(obj.get('hello')(target), spy)
      assert.isUndefined(obj.get('foo')(target))
    })
  })

  describe('#getIn', function () {
    it('returns the property at the given key path', function () {
      assert.equal(obj.getIn(['address', 'city'])(target), 'Melbourne')
      assert.isUndefined(obj.getIn(['foo', 'bar'])(target))
    })
  })

  describe('#set', function () {
    it('sets the given property', function () {
      const result = obj.set('name')('Steve')(target)
      assert.propertyVal(result, 'name', 'Steve')
    })
  })

  describe('#update', function () {
    it('updates the given property', function () {
      const result = obj.update('age')(function (a) { return a + 1 })(target)
      assert.propertyVal(result, 'age', 21)
    })
  })

  describe('#pick', function () {
    it('copies the given object with the properties', function () {
      const result = obj.pick(['name', 'age'])(target)
      assert.deepEqual(result, {name: 'Jane', age: 20})
    })
  })

  describe('#omit', function () {
    it('copies the given object without the properties', function () {
      const result = obj.omit(['name', 'age', 'address'])(target)
      assert.deepEqual(result, {hello: spy})
    })
  })

  describe('#pairs', function () {
    it('returns the key-value pairs of the given object', function () {
      const result = obj.pairs(target)
      assert.deepEqual(result, [['name', 'Jane'], ['age', 20], ['address', {city: 'Melbourne', country: 'Australia'}], ['hello', spy]])
    })
  })

  describe('#keys', function () {
    it('returns the keys of the given object', function () {
      const result = obj.keys(target)
      assert.deepEqual(result, ['name', 'age', 'address', 'hello'])
    })
  })

  describe('#values', function () {
    it('returns the values of the given object', function () {
      const result = obj.values(target)
      assert.deepEqual(result, ['Jane', 20, {city: 'Melbourne', country: 'Australia'}, spy])
    })
  })
})
