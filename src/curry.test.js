import curry from './curry'

describe('curry', () => {
  it('ignores a nullary function', () => {
    const f = () => {}
    const g = curry(f)
    expect(f).toEqual(g)
  })

  it('ignores a unary function', () => {
    const f = (a) => {}
    const g = curry(f)
    expect(f).toEqual(g)
  })

  it('curries a binary function', () => {
    const f = (a, b) => {}
    const spy = jest.fn(f)
    const g = curry(spy)

    expect(f).not.toEqual(g)

    g('hello')('world')
    g('hello', 'world')

    expect(spy).toHaveBeenCalledTimes(2)
    expect(spy).toHaveBeenCalledWith('hello', 'world')
  })
})
