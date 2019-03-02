import sub from './sub'

describe('sub', () => {
  it('subtracts the values', () => {
    expect(sub(2)(1)).toEqual(-1)
  })
})
