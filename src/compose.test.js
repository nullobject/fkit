import compose from './compose'

describe('compose', () => {
  it('composes two functions', () => {
    function f (a) { return a / 2 }
    function g (a) { return a + 2 }
    const h = compose(f, g)
    expect(h(1)).toEqual(f(g(1)))
  })

  it('composes any number of functions', () => {
    function f (a) { return a / 2 }
    function g (a) { return a + 2 }
    function h (a) { return a * 2 }
    const i = compose(f, g, h)
    expect(i(1)).toEqual(f(g(h(1))))
  })
})
