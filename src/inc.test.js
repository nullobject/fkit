import inc from './inc'

describe('inc', () => {
  it('increments the value', () => {
    expect(inc(1)).toEqual(2)
    expect(inc(2)).toEqual(3)
  })
})
