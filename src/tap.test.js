import tap from './tap'

describe('#tap', () => {
  it('returns apply the given function to a value and return the value', () => {
    function f (a) {}
    const spy = jest.fn(f)
    expect(tap(spy)(1)).toBe(1)
    expect(spy).toHaveBeenCalledWith(1)
  })
})
