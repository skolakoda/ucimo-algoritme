const slucajniNiz = require('../utils/slucajniNiz')

const poredjajMehuricima = izvorniNiz => {
  const niz = [...izvorniNiz]
  while (true) {
    let imaNeporedjanih = false
    for (let i = niz.length-1; i >= 0; i--) {
      const j = i - 1
      if (niz[j] > niz[i]) {
        [niz[j], niz[i]] = [niz[i], niz[j]]
        imaNeporedjanih = true
      }
    }
    if (!imaNeporedjanih) break
  }
  return niz
}

const niz = slucajniNiz(20)
console.log(niz)

const poredjanNiz = poredjajMehuricima(niz)
console.log(poredjanNiz)
