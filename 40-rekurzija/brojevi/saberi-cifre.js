function saberiCifre(n) {
  if (!n) return 0
  let str = String(n)
  let prvaCifra = Number(str[0])
  let ostatak = str.substring(1, str.length)
  return prvaCifra + saberiCifre(ostatak)
}

console.log(saberiCifre(23425493))
