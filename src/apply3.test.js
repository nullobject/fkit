import apply3 from './apply3'

describe('apply3', () => {
  function f () {}
  let spy

  beforeEach(() => {
    spy = jest.fn(f)
  })

  it('applies a nullary function', () => {
    apply3(spy)()()()
    expect(spy).toHaveBeenCalledWith(undefined, undefined, undefined)
  })

  it('applies a unary function', () => {
    apply3(spy)(1)()()
    expect(spy).toHaveBeenCalledWith(1, undefined, undefined)
  })

  it('applies a binary function', () => {
    apply3(spy)(1)(2)()
    expect(spy).toHaveBeenCalledWith(1, 2, undefined)
  })

  it('applies a ternary function', () => {
    apply3(spy)(1)(2)(3)
    expect(spy).toHaveBeenCalledWith(1, 2, 3)
  })
})
