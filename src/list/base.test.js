import * as base from '../../src/list/base'

describe('list.base', () => {
  describe('#prepend', () => {
    it('handles an empty array', () => {
      expect(base.prepend(1)([])).toEqual([1])
    })

    it('handles an empty string', () => {
      expect(base.prepend('foo')('')).toBe('foo')
    })

    it('handles an array', () => {
      expect(base.prepend(1)([2, 3, 4])).toEqual([1, 2, 3, 4])
      expect(base.prepend([1])([[2, 3], [4, 5, 6]])).toEqual([[1], [2, 3], [4, 5, 6]])
    })

    it('handles a string', () => {
      expect(base.prepend('foo')('bar')).toBe('foobar')
      expect(base.prepend('f')(['oo', 'bar'])).toEqual(['f', 'oo', 'bar'])
    })
  })

  describe('#surround', () => {
    it('handles an empty array', () => {
      expect(base.surround(1)(4)([])).toEqual([1, 4])
    })

    it('handles an empty string', () => {
      expect(base.surround('fo')('ar')('')).toBe('foar')
    })

    it('handles an array', () => {
      expect(base.surround(1)(4)([2, 3])).toEqual([1, 2, 3, 4])
    })

    it('handles a string', () => {
      expect(base.surround('fo')('ar')('ob')).toBe('foobar')
    })
  })

  describe('#head', () => {
    it('handles an empty array', () => {
      expect(base.head([])).toBeUndefined()
    })

    it('handles an empty string', () => {
      expect(base.head('')).toBeUndefined()
    })

    it('handles an array', () => {
      expect(base.head([1, 2, 3])).toBe(1)
    })

    it('handles a string', () => {
      expect(base.head('foo')).toBe('f')
    })
  })

  describe('#last', () => {
    it('handles an empty array', () => {
      expect(base.last([])).toBeUndefined()
    })

    it('handles an empty string', () => {
      expect(base.last('')).toBeUndefined()
    })

    it('handles an array', () => {
      expect(base.last([1, 2, 3])).toBe(3)
    })

    it('handles a string', () => {
      expect(base.last('foo')).toBe('o')
    })
  })

  describe('#init', () => {
    it('handles an empty array', () => {
      expect(base.init([])).toEqual([])
    })

    it('handles an empty string', () => {
      expect(base.init('')).toBe('')
    })

    it('handles an array', () => {
      expect(base.init([1, 2, 3])).toEqual([1, 2])
    })

    it('handles a string', () => {
      expect(base.init('foo')).toBe('fo')
    })
  })

  describe('#tail', () => {
    it('handles an empty array', () => {
      expect(base.tail([])).toEqual([])
    })

    it('handles an empty string', () => {
      expect(base.tail('')).toBe('')
    })

    it('handles an array', () => {
      expect(base.tail([1, 2, 3])).toEqual([2, 3])
    })

    it('handles a string', () => {
      expect(base.tail('foo')).toBe('oo')
    })
  })

  describe('#inits', () => {
    it('handles an empty array', () => {
      expect(base.inits([])).toEqual([[]])
    })

    it('handles an empty string', () => {
      expect(base.inits('')).toEqual([''])
    })

    it('handles an array', () => {
      expect(base.inits([1, 2, 3])).toEqual([[], [1], [1, 2], [1, 2, 3]])
    })

    it('handles a string', () => {
      expect(base.inits('foo')).toEqual(['', 'f', 'fo', 'foo'])
    })
  })

  describe('#tails', () => {
    it('handles an empty array', () => {
      expect(base.tails([])).toEqual([[]])
    })

    it('handles an empty string', () => {
      expect(base.tails('')).toEqual([''])
    })

    it('handles an array', () => {
      expect(base.tails([1, 2, 3])).toEqual([[1, 2, 3], [2, 3], [3], []])
    })

    it('handles a string', () => {
      expect(base.tails('foo')).toEqual(['foo', 'oo', 'o', ''])
    })
  })
})
