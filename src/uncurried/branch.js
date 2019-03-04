export default function branch (p, f, g, a) {
  return p(a) ? f(a) : g(a)
}
