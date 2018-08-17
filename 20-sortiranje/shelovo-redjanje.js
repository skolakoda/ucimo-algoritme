// https://skolakoda.org/shelovo-redjanje
const slucajniNiz = require('../utils/slucajniNiz')

function shellsort(niz) {
  for (let gap = niz.length / 2; gap > 0; gap /= 2)
    for (let i = gap; i < niz.length; i++)
      for (let j = i - gap; j >= 0 && niz[j] > niz[j + gap]; j -= gap)
        [niz[j], niz[j + gap]] = [niz[j + gap], niz[j]]
  return niz
}

console.log(shellsort(slucajniNiz(20)))
