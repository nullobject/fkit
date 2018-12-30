import applyMethod3 from './applyMethod3'

describe('#applyMethod3', () => {
  const spy = jest.fn()
  const target = { hello: spy }

  it('applies a nullary function', () => {
    applyMethod3('hello')()()()(target)
    expect(spy).toHaveBeenCalledWith(undefined, undefined, undefined)
  })

  it('applies a unary function', () => {
    applyMethod3('hello')(1)(2)(3)(target)
    expect(spy).toHaveBeenCalledWith(1, 2, 3)
  })
})
