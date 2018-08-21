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

  dodaj(vrednost, koren = this.koren) {
    if (vrednost === koren.vrednost) return
    const strana = vrednost > koren.vrednost ? 'desno' : 'levo'
    if (!koren[strana]) koren[strana] = new Cvor(vrednost)
    else this.dodaj(vrednost, koren[strana])
  }

  ispisi(koren = this.koren) {
    if (!koren) return
    this.ispisi(koren.levo)
    console.log(koren.vrednost)
    this.ispisi(koren.desno)
  }

  ispisiNeredjano(koren = this.koren) {
    if (!koren) return
    console.log(koren.vrednost)
    this.ispisi(koren.levo)
    this.ispisi(koren.desno)
  }

  ispisiPoSirini(koren = this.koren) {
    const red = koren ? [koren] : []
    while (red.length) {
      const cvor = red.shift()
      console.log(cvor.vrednost)
      if (cvor.levo) red.push(cvor.levo)
      if (cvor.desno) red.push(cvor.desno)
    }
  }

  ispisiPoDubini(koren = this.koren) {
    const stog = koren ? [koren] : []
    while (stog.length) {
      const cvor = stog.pop()
      console.log(cvor.vrednost)
      if (cvor.levo) stog.push(cvor.levo)
      if (cvor.desno) stog.push(cvor.desno)
    }
  }

  ispisiPoDubiniRekurzivno(koren = this.koren) {
    if (!koren) return
    console.log(koren.vrednost)
    this.ispisi(koren.desno)
    this.ispisi(koren.levo)
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
