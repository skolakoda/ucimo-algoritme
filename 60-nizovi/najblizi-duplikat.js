// nalazi koji broj ima najblizi duplikat po indexu

najbliziDuplikat = a => {
  skup = new Set()
  for (x of a) {
    if (skup.has(x)) return x
    skup.add(x)
  }
  return -1
}

console.log(najbliziDuplikat([2, 1, 3, 5, 3, 2]))