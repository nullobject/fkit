import add from './add'

describe('add', () => {
  it('adds the values', () => {
    expect(add(2)(1)).toEqual(3)
  })
})
