// jednim prolaskom kroz niz pronadji najmanji i donajmanji broj
niz = [2, 3, 4, 5, 44, 33, 11, 22, 33, 44, 2, 3, 4]
najmanji = donajmanji = Infinity

niz.map(trenutni => {
  if (trenutni < najmanji) donajmanji = najmanji, najmanji = trenutni
  else if (trenutni < donajmanji && trenutni != najmanji) donajmanji = trenutni
})

poruka = (donajmanji == Infinity) ? 'Nema donajmanjeg'
  : `Najmanji element je ${najmanji}, a donajmanji je ${donajmanji}`
console.log(poruka)
