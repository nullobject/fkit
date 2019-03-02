export default function fold (f, s, as) {
  return Array.from(as).reduce(f, s)
}
