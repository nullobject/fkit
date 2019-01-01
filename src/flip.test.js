import flip from './flip'

describe('#flip', () => {
  it('flips the arguments for the given function', () => {
    function f (a, b) {}
    const spy = jest.fn(f)
    flip(spy)('hello')('world')
    expect(spy).toHaveBeenCalledWith('world', 'hello')
  })
})
