// jednim prolaskom kroz niz pronadji najmanji i donajmanji broj

niz = require('../utils/slucajniNiz')()
najmanji = donajmanji = Infinity

niz.map(trenutni => {
  if (trenutni < najmanji) donajmanji = najmanji, najmanji = trenutni
  else if (trenutni < donajmanji && trenutni != najmanji) donajmanji = trenutni
})

poruka = (donajmanji == Infinity) ? 'Nema donajmanjeg'
  : `Najmanji element je ${najmanji}, a donajmanji je ${donajmanji}`
console.log(poruka)
