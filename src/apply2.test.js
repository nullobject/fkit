import apply2 from './apply2'

describe('apply2', () => {
  function f () {}
  let spy

  beforeEach(() => {
    spy = jest.fn(f)
  })

  it('applies a nullary function', () => {
    apply2(spy)()()
    expect(spy).toHaveBeenCalledWith(undefined, undefined)
  })

  it('applies a unary function', () => {
    apply2(spy)(1)()
    expect(spy).toHaveBeenCalledWith(1, undefined)
  })

  it('applies a binary function', () => {
    apply2(spy)(1)(2)
    expect(spy).toHaveBeenCalledWith(1, 2)
  })
})
