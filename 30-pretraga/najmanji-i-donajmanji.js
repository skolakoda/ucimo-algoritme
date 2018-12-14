// jednim prolaskom kroz niz pronadji najmanji i donajmanji broj

niz = [2, 3, 4, 5, 44, -2, -33, 33, 11, 22, 33, 44, 2, 3, 4]
najmanji = niz[0] < niz[1] ? niz[0] : niz[1]
donajmanji = niz[0] > niz[1] ? niz[0] : niz[1]

niz.map(trenutni => {
  if (trenutni < najmanji) donajmanji = najmanji, najmanji = trenutni
  else if (trenutni < donajmanji && trenutni != najmanji) donajmanji = trenutni
})

poruka = (donajmanji == najmanji) ? 'Nema donajmanjeg'
  : `Najmanji element je ${najmanji}, a donajmanji je ${donajmanji}`
console.log(poruka)
