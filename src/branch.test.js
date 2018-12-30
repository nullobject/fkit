import branch from './branch'

describe('#branch', () => {
  const f = jest.fn()
  const g = jest.fn()
  const a = {}

  it('returns f(a) if p(a) is true', () => {
    const p = jest.fn(() => true)
    branch(p, f, g, a)
    expect(p).toHaveBeenCalledWith(a)
    expect(f).toHaveBeenCalledWith(a)
  })

  it('returns g(a) if p(a) is false', () => {
    const p = jest.fn(() => false)
    branch(p, f, g, a)
    expect(p).toHaveBeenCalledWith(a)
    expect(g).toHaveBeenCalledWith(a)
  })
})
