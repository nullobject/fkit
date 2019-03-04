import applyMethod from './applyMethod'

describe('applyMethod', () => {
  const spy = jest.fn()
  const target = { hello: spy }

  it('applies a nullary function', () => {
    applyMethod('hello')()(target)
    expect(spy).toHaveBeenCalledWith(undefined)
  })

  it('applies a unary function', () => {
    applyMethod('hello')(1)(target)
    expect(spy).toHaveBeenCalledWith(1)
  })
})
