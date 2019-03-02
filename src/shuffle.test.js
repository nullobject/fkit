import shuffle from './shuffle'

describe('shuffle', () => {
  it('handles an empty array', () => {
    expect(shuffle([])).toEqual([])
  })

  it('handles an empty string', () => {
    expect(shuffle('')).toBe('')
  })

  it('handles an array of numbers', () => {
    const result = shuffle([1, 2, 3])
    expect(result).toEqual(expect.arrayContaining([1, 2, 3]))
  })

  it('handles an array of strings', () => {
    const result = shuffle(['a', 'b', 'c'])
    expect(result).toEqual(expect.arrayContaining(['a', 'b', 'c']))
  })

  it('handles a string', () => {
    const result = shuffle('abc')
    expect(result.split('')).toEqual(expect.arrayContaining(['a', 'b', 'c']))
  })
})
