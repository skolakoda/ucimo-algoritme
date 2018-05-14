function nzd(a, b) {
  while (b != 0)
    [a, b] = [b, a % b]
  return a
}

console.log(nzd(48, 18))
