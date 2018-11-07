import * as build from '../../src/list/build'

describe('list.build', () => {
  describe('#array', () => {
    it('returns a new array', () => {
      expect(build.array(0)).toEqual([])
      expect(build.array(3)).toEqual([undefined, undefined, undefined])
    })
  })

  describe('#string', () => {
    it('returns a new string', () => {
      expect(build.string(0)).toBe('')
      expect(build.string(3)).toBe('   ')
    })
  })

  describe('#pair', () => {
    it('returns a pair of values', () => {
      expect(build.pair(1)(2)).toEqual([1, 2])
    })
  })

  describe('#range', () => {
    it('returns an array of numbers', () => {
      expect(build.range(1)(3)).toEqual([1, 2, 3])
      expect(build.range(1)(1)).toEqual([1])
    })
  })

  describe('#replicate', () => {
    it('handles a number', () => {
      expect(build.replicate(0)(1)).toEqual([])
      expect(build.replicate(3)(1)).toEqual([1, 1, 1])
    })

    it('handles an array of numbers', () => {
      expect(build.replicate(0)([1])).toEqual([])
      expect(build.replicate(3)([1])).toEqual([[1], [1], [1]])
    })

    it('handles an array of strings', () => {
      expect(build.replicate(0)(['a'])).toEqual([])
      expect(build.replicate(3)(['a'])).toEqual(['a', 'a', 'a'])
    })

    it('handles a string', () => {
      expect(build.replicate(0)('a')).toBe('')
      expect(build.replicate(3)('a')).toBe('aaa')
    })
  })

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

  describe('#shuffle', () => {
    it('handles an empty array', () => {
      expect(build.shuffle([])).toEqual([])
    })

    it('handles an empty string', () => {
      expect(build.shuffle('')).toBe('')
    })

    it('handles an array of numbers', () => {
      const result = build.shuffle([1, 2, 3])
      expect(result).toEqual(expect.arrayContaining([1, 2, 3]))
    })

    it('handles an array of strings', () => {
      const result = build.shuffle(['a', 'b', 'c'])
      expect(result).toEqual(expect.arrayContaining(['a', 'b', 'c']))
    })

    it('handles a string', () => {
      const result = build.shuffle('abc')
      expect(result.split('')).toEqual(expect.arrayContaining(['a', 'b', 'c']))
    })
  })
})
