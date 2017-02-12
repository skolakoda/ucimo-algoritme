const slucajniNiz = duzina => {
  const niz = []
  for (let i = 0; i < duzina; i++) {
    const broj = Math.round(Math.random() * duzina)
    niz.push(broj)
  }
  return niz
}

module.exports = slucajniNiz
