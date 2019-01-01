import surround from './surround'

describe('#surround', () => {
  it('handles an empty array', () => {
    expect(surround(1)(4)([])).toEqual([1, 4])
  })

  it('handles an empty string', () => {
    expect(surround('fo')('ar')('')).toBe('foar')
  })

  it('handles an array', () => {
    expect(surround(1)(4)([2, 3])).toEqual([1, 2, 3, 4])
  })

  it('handles a string', () => {
    expect(surround('fo')('ar')('ob')).toBe('foobar')
  })
})
