import uncurry from './uncurry'

describe('#uncurry', () => {
  it('uncurries a binary function', () => {
    function f (a, b) {}
    const spy = jest.fn(f)
    const g = uncurry(spy)

    expect(f).not.toEqual(g)
    g(['hello', 'world'])
    expect(spy).toHaveBeenCalledWith('hello', 'world')
  })
})
