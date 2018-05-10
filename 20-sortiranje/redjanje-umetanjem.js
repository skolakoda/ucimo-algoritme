// https://skolakoda.org/redjanje-umetanjem
const slucajniNiz = require('../utils/slucajniNiz')

function redjajUmetanjem(niz) {
  for (let i = 1; i < niz.length; i++) {
    let j
    const trenutni = niz[i]
    for (j = i; j > 0 && niz[j-1] > trenutni; j--)
      niz[j] = niz[j-1]
    niz[j] = trenutni
  }
  return niz
}

console.log(redjajUmetanjem(slucajniNiz(20)))
