// https://skolakoda.org/redjanje-izborom
const slucajniNiz = require('../utils/slucajniNiz')

function redjajIzborom(niz) {
  for (let i = 0; i < niz.length; i++)
    for (let j = i + 1; j < niz.length; j++)
      if (niz[i] > niz[j])
        [niz[i], niz[j]] = [niz[j], niz[i]]
  return niz
}

console.log(redjajIzborom(slucajniNiz(20)))
