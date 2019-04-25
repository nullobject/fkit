export default function eqBy (f, a, b) {
  return f(b) === f(a)
}
