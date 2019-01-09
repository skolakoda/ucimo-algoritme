function saberiCifre(x) {
  if (x == 0) return 0
  return x % 10 + saberiCifre(Math.floor(x / 10))
}

console.log(saberiCifre (11231))
