import div from './div'

describe('#div', () => {
  it('divides the values', () => {
    expect(div(2)(1)).toEqual(0.5)
  })
})
