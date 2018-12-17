// vraca niz sa najvecim clanovima svakog podniza

const najveciClanovi = niz => niz.map(a => Math.max(...a))

const niz = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]

console.log(najveciClanovi(niz))