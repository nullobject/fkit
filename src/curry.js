export default function curry (f) {
  const arity = f.length

  const g = oldArgs => {
    return (...args) => {
      const newArgs = oldArgs.concat((args.length > 0) ? args : undefined)

      // If we have enough args, then apply the function.
      return (newArgs.length >= arity) ? f.apply(undefined, newArgs) : g(newArgs)
    }
  }

  return (arity <= 1) ? f : g([])
}
