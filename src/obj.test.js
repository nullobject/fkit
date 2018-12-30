import * as obj from '../src/obj'

const spy = jest.fn()

function MyObject () {}
MyObject.prototype.constructor = MyObject

function buildObject () {
  const o = new MyObject()

  o.name = 'Jane'
  o.age = 20
  o.address = { city: 'Melbourne', country: 'Australia' }
  o.hello = spy

  return o
}

describe('object', () => {
  const target = buildObject()

  describe('#set', () => {
    it('sets the given property', () => {
      const result = obj.set('name')('Steve')(target)
      expect(result).toHaveProperty('name', 'Steve')
    })
  })

  describe('#update', () => {
    it('updates the given property', () => {
      const result = obj.update('age')(a => a + 1)(target)
      expect(result).toHaveProperty('age', 21)
    })
  })

  describe('#pick', () => {
    it('copies the given object with the properties', () => {
      const result = obj.pick(['name', 'age'])(target)
      expect(result).toEqual({ name: 'Jane', age: 20 })
    })
  })

  describe('#omit', () => {
    it('copies the given object without the properties', () => {
      const result = obj.omit(['name', 'age', 'address'])(target)
      expect(result).toEqual({ hello: spy })
    })
  })

  describe('#pairs', () => {
    it('returns the key-value pairs of the given object', () => {
      const result = obj.pairs(target)
      expect(result).toEqual([['name', 'Jane'], ['age', 20], ['address', { city: 'Melbourne', country: 'Australia' }], ['hello', spy]])
    })
  })

  describe('#keys', () => {
    it('returns the keys of the given object', () => {
      const result = obj.keys(target)
      expect(result).toEqual(['name', 'age', 'address', 'hello'])
    })
  })

  describe('#values', () => {
    it('returns the values of the given object', () => {
      const result = obj.values(target)
      expect(result).toEqual(['Jane', 20, { city: 'Melbourne', country: 'Australia' }, spy])
    })
  })
})
