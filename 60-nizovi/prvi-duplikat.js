// vrati prvi duplikat ili -1

const prviDuplikat = niz => {
  const skup = new Set()
  for (const x of niz) {
    if (skup.has(x)) return x
    skup.add(x)
  }
  return -1
}

console.log(prviDuplikat([2, 1, 3, 5, 3, 2]))