import compose from './compose'

describe('compose', () => {
  it('composes the given functions', () => {
    function f (a) { return a / 2 }
    function g (a) { return a + 2 }
    function h (a) { return a * 2 }
    const i = compose(f, g, h)
    expect(i(1)).toBe(2)
  })
})
