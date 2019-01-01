import applyRight from './applyRight'

describe('#applyRight', () => {
  it('applies a nullary function', () => {
    function f () {}
    const spy = jest.fn(f)
    applyRight()(spy)
    expect(spy).toHaveBeenCalledWith(undefined)
  })

  it('applies a unary function', () => {
    function f (a) {}
    const spy = jest.fn(f)
    applyRight(1)(spy)
    expect(spy).toHaveBeenCalledWith(1)
  })
})
