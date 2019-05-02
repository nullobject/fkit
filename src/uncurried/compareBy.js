export default function compareBy (f, a, b) {
  const a_ = f(a)
  const b_ = f(b)

  if (a_ > b_) {
    return 1
  } else if (a_ < b_) {
    return -1
  } else {
    return 0
  }
}
