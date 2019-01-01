import variadic from './variadic'

describe('#variadic', () => {
  describe('with a unary function', () => {
    function f (a) {}
    let spy

    beforeEach(() => {
      spy = jest.fn(f)
    })

    it('handles an argument', () => {
      variadic(spy)(1)
      expect(spy).toHaveBeenCalledWith([1])
    })

    it('handles a list of arguments', () => {
      variadic(spy)(1, [2, 3])
      expect(spy).toHaveBeenCalledWith([1, [2, 3]])
    })

    it('handles an array of arguments', () => {
      variadic(spy)([1, [2, 3]])
      expect(spy).toHaveBeenCalledWith([1, [2, 3]])
    })
  })

  describe('with a binary function', () => {
    function f (a, b) {}
    let spy

    beforeEach(() => {
      spy = jest.fn(f)
    })

    it('handles an argument', () => {
      variadic(spy)(1)
      expect(spy).toHaveBeenCalledWith(1, [])
    })

    it('handles a list of arguments', () => {
      variadic(spy)(1, 2, 3)
      expect(spy).toHaveBeenCalledWith(1, [2, 3])
    })

    it('handles an array of arguments', () => {
      variadic(spy)([1, [2, 3]])
      expect(spy).toHaveBeenCalledWith([1, [2, 3]], [])
    })
  })
})
