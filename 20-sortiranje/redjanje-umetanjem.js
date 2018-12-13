// https://skolakoda.org/redjanje-umetanjem
const slucajniNiz = require('../utils/slucajniNiz')

function redjajUmetanjem(niz) {
  for (let i = 1; i < niz.length; i++) {
    let j
    for (j = i; j > 0 && niz[j-1] > niz[i]; j--)
      niz[j] = niz[j-1]
    niz[j] = niz[i]
  }
  return niz
}

console.log(redjajUmetanjem(slucajniNiz(20)))
