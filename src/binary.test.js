import binary from './binary'

describe('#binary', () => {
  it('returns a binary function', () => {
    const spy = jest.fn()
    binary(spy)(1, 2, 3)
    expect(spy).toHaveBeenCalledWith(1, 2)
  })
})
