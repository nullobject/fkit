import * as build from '../../src/list/build'

describe('list.build', () => {
  describe('#sample', () => {
    it('handles an empty array', () => {
      expect(build.sample(2)([])).toEqual([])
    })

    it('handles an empty string', () => {
      expect(build.sample(2)('')).toBe('')
    })

    it('handles an array of numbers', () => {
      const result = build.sample(2)([1, 2, 3])
      expect([1, 2, 3]).toEqual(expect.arrayContaining(result))
    })

    it('handles an array of strings', () => {
      const result = build.sample(2)(['a', 'b', 'c'])
      expect(['a', 'b', 'c']).toEqual(expect.arrayContaining(result))
    })

    it('handles a string', () => {
      const result = build.sample(2)('abc')
      expect(['a', 'b', 'c']).toEqual(expect.arrayContaining(result.split('')))
    })
  })
})
