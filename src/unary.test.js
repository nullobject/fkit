import unary from './unary'

describe('unary', () => {
  it('returns a unary function', () => {
    const spy = jest.fn()
    unary(spy)(1, 2, 3)
    expect(spy).toHaveBeenCalledWith(1)
  })
})
