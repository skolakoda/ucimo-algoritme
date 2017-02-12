const slucajniNiz = duzina => {
  const niz = []
  for (let i = 0; i < duzina; i++) {
    const broj = Math.round(Math.random() * duzina)
    niz.push(broj)
  }
  return niz
}

const poredjajMehuricima = niz => {
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

const niz = slucajniNiz(30)

console.log('izvorni niz: ')
console.log(niz.join(' '))
const poredjanNiz = poredjajMehuricima(niz)
console.log('poredjan niz: ')
console.log(poredjanNiz.join(' '))
