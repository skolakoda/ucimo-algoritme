const slucajniNiz = (duzina = 20, max = duzina) => Array(duzina).fill()
  .map(() => Math.round(Math.random() * max))

module.exports = slucajniNiz
