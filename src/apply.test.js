import apply from './apply'

describe('#apply', () => {
  function f () {}
  let spy

  beforeEach(() => {
    spy = jest.fn(f)
  })

  it('applies a nullary function', () => {
    apply(spy)()
    expect(spy).toHaveBeenCalledWith(undefined)
  })

  it('applies a unary function', () => {
    apply(spy)(1)
    expect(spy).toHaveBeenCalledWith(1)
  })
})
