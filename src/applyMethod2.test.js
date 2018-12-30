import applyMethod2 from './applyMethod2'

describe('#applyMethod2', () => {
  const spy = jest.fn()
  const target = { hello: spy }

  it('applies a nullary function', () => {
    applyMethod2('hello')()()(target)
    expect(spy).toHaveBeenCalledWith(undefined, undefined)
  })

  it('applies a unary function', () => {
    applyMethod2('hello')(1)(2)(target)
    expect(spy).toHaveBeenCalledWith(1, 2)
  })
})
