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

  describe('#values', () => {
    it('returns the values of the given object', () => {
      const result = obj.values(target)
      expect(result).toEqual(['Jane', 20, { city: 'Melbourne', country: 'Australia' }, spy])
    })
  })
})
