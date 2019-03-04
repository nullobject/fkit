import copy from './copy'

function MyObject () {}
MyObject.prototype.constructor = MyObject

function buildObject () {
  const o = new MyObject()
  o.name = 'Jane'
  o.age = 20
  return o
}

describe('copy', () => {
  const target = buildObject()
  const result = copy(target, { age: 21 })

  it('copies the properties of the given objects', () => {
    expect(result).toEqual({ name: 'Jane', age: 21 })
  })

  it('preserves the prototype of the target object', () => {
    expect(result).toBeInstanceOf(MyObject)
  })
})
