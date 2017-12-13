import {assert} from 'chai'
import * as obj from '../src/obj'
import sinon from 'sinon'

const spy = sinon.spy()

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

describe('object', () => {
  const target = buildObject()

  describe('#applyMethod', () => {
    it('applies a nullary function', () => {
      obj.applyMethod('hello')()(target)
      assert.isTrue(spy.calledWithExactly(undefined))
    })

    it('applies a unary function', () => {
      obj.applyMethod('hello')(1)(target)
      assert.isTrue(spy.calledWithExactly(1))
    })
  })

  describe('#applyMethod2', () => {
    it('applies a nullary function', () => {
      obj.applyMethod2('hello')()()(target)
      assert.isTrue(spy.calledWithExactly(undefined, undefined))
    })

    it('applies a unary function', () => {
      obj.applyMethod2('hello')(1)(2)(target)
      assert.isTrue(spy.calledWithExactly(1, 2))
    })
  })

  describe('#applyMethod3', () => {
    it('applies a nullary function', () => {
      obj.applyMethod3('hello')()()()(target)
      assert.isTrue(spy.calledWithExactly(undefined, undefined, undefined))
    })

    it('applies a unary function', () => {
      obj.applyMethod3('hello')(1)(2)(3)(target)
      assert.isTrue(spy.calledWithExactly(1, 2, 3))
    })
  })

  describe('#copy', () => {
    const result = obj.copy(target, {age: 21})

    it('copies the properties of the given objects', () => {
      assert.deepEqual(result, {name: 'Jane', age: 21, address: {city: 'Melbourne', country: 'Australia'}, hello: spy})
    })

    it('preserves the prototype of the target object', () => {
      assert.instanceOf(result, MyObject)
    })
  })

  describe('#get', () => {
    it('returns the property at the given key', () => {
      assert.equal(obj.get('name')(target), 'Jane')
      assert.equal(obj.get('age')(target), 20)
      assert.deepEqual(obj.get('address')(target), {city: 'Melbourne', country: 'Australia'})
      assert.equal(obj.get('hello')(target), spy)
      assert.isUndefined(obj.get('foo')(target))
    })
  })

  describe('#getIn', () => {
    it('returns the property at the given key path', () => {
      assert.equal(obj.getIn(['address', 'city'])(target), 'Melbourne')
      assert.isUndefined(obj.getIn(['foo', 'bar'])(target))
    })
  })

  describe('#set', () => {
    it('sets the given property', () => {
      const result = obj.set('name')('Steve')(target)
      assert.propertyVal(result, 'name', 'Steve')
    })
  })

  describe('#update', () => {
    it('updates the given property', () => {
      const result = obj.update('age')(a => { return a + 1 })(target)
      assert.propertyVal(result, 'age', 21)
    })
  })

  describe('#pick', () => {
    it('copies the given object with the properties', () => {
      const result = obj.pick(['name', 'age'])(target)
      assert.deepEqual(result, {name: 'Jane', age: 20})
    })
  })

  describe('#omit', () => {
    it('copies the given object without the properties', () => {
      const result = obj.omit(['name', 'age', 'address'])(target)
      assert.deepEqual(result, {hello: spy})
    })
  })

  describe('#pairs', () => {
    it('returns the key-value pairs of the given object', () => {
      const result = obj.pairs(target)
      assert.deepEqual(result, [['name', 'Jane'], ['age', 20], ['address', {city: 'Melbourne', country: 'Australia'}], ['hello', spy]])
    })
  })

  describe('#keys', () => {
    it('returns the keys of the given object', () => {
      const result = obj.keys(target)
      assert.deepEqual(result, ['name', 'age', 'address', 'hello'])
    })
  })

  describe('#values', () => {
    it('returns the values of the given object', () => {
      const result = obj.values(target)
      assert.deepEqual(result, ['Jane', 20, {city: 'Melbourne', country: 'Australia'}, spy])
    })
  })
})
