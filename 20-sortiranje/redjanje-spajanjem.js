const slucajniNiz = require('../utils/slucajniNiz')

function spoji(levo, desno) {
  const result = []
  let i = 0
  let j = 0
  while (i < levo.length && j < desno.length) {
    if (levo[i] < desno[j]) {
      result.push(levo[i])
      i++
    } else {
      result.push(desno[j])
      j++
    }
  }
  return [...result, ...levo.slice(i), ...desno.slice(j)]
}

function redajSpajanjem(niz) {
  if (niz.length === 1) return niz
  const sredina = Math.floor(niz.length / 2)
  const levo = niz.slice(0, sredina)
  const desno = niz.slice(sredina)
  return spoji(redajSpajanjem(levo), redajSpajanjem(desno))
}

console.log(redajSpajanjem(slucajniNiz(20)))
