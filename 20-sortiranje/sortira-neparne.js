// sortira samo neparne, parne ostavlja na mestu

function sortirajNeparne(niz) {
  const neparni = niz.filter(x => x % 2).sort((a, b) => a - b)
  return niz.map(x => x % 2 ? neparni.shift() : x)
}

console.log(sortirajNeparne([5, 3, 2, 8, 1, 4]))