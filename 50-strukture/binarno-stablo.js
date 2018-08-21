class Cvor {
  constructor(vrednost) {
    this.vrednost = vrednost
    this.levo = null
    this.desno = null
  }
}

class Stablo {
  constructor(vrednost) {
    this.koren = new Cvor(vrednost)
  }

  dodaj(vrednost, cvor = this.koren) {
    if (vrednost === cvor.vrednost) return
    const strana = vrednost > cvor.vrednost ? 'desno' : 'levo'
    if (!cvor[strana]) cvor[strana] = new Cvor(vrednost)
    else this.dodaj(vrednost, cvor[strana])
  }

  ispisi(cvor = this.koren) {
    if (!cvor) return
    this.ispisi(cvor.levo)
    console.log(cvor.vrednost)
    this.ispisi(cvor.desno)
  }

  ispisiNeredjano(cvor = this.koren) {
    if (!cvor) return
    console.log(cvor.vrednost)
    this.ispisi(cvor.levo)
    this.ispisi(cvor.desno)
  }

  ispisiPoSirini(cvor = this.koren) {
    const red = cvor ? [cvor] : []
    while (red.length) {
      const cvor = red.shift()
      console.log(cvor.vrednost)
      if (cvor.levo) red.push(cvor.levo)
      if (cvor.desno) red.push(cvor.desno)
    }
  }

  ispisiPoDubini(cvor = this.koren) {
    const stog = cvor ? [cvor] : []
    while (stog.length) {
      const cvor = stog.pop()
      console.log(cvor.vrednost)
      if (cvor.levo) stog.push(cvor.levo)
      if (cvor.desno) stog.push(cvor.desno)
    }
  }

  ispisiPoDubiniRekurzivno(cvor = this.koren) {
    if (!cvor) return
    console.log(cvor.vrednost)
    this.ispisi(cvor.desno)
    this.ispisi(cvor.levo)
  }
}

const stablo = new Stablo(5)
stablo.dodaj(3)
stablo.dodaj(7)
stablo.dodaj(4)
stablo.dodaj(2)
stablo.dodaj(3) // odbija isti

console.log(JSON.stringify(stablo, null, 4))
console.log('ispisuje redom:')
stablo.ispisi()
console.log('ispisuje neredjano:')
stablo.ispisiNeredjano()
console.log('ispisuje po sirini:')
stablo.ispisiPoSirini()
console.log('ispisuje po dubini:')
stablo.ispisiPoDubini()
