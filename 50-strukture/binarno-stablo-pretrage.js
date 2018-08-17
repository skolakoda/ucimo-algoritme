class Cvor {
  constructor(vrednost) {
    this.vrednost = vrednost
    this.levo = null
    this.desno = null
  }
}

class Stablo {
  constructor() {
    this.koren = null
  }

  dodaj(vrednost) {
    const cvor = new Cvor(vrednost)

    if (!this.koren) {
      this.koren = cvor
      return
    }

    let trenutniCvor = this.koren
    while (trenutniCvor) {
      if (vrednost < trenutniCvor.vrednost) {
        if (!trenutniCvor.levo) {
          trenutniCvor.levo = cvor
          break
        } else {
          trenutniCvor = trenutniCvor.levo
        }
      } else {
        if (!trenutniCvor.desno) {
          trenutniCvor.desno = cvor
          break
        } else {
          trenutniCvor = trenutniCvor.desno
        }
      }
    }
  }
}

const stablo = new Stablo()

stablo.dodaj(8)
stablo.dodaj(3)
stablo.dodaj(10)
stablo.dodaj(1)
stablo.dodaj(6)
stablo.dodaj(14)
stablo.dodaj(4)
stablo.dodaj(7)
stablo.dodaj(13)

console.log(stablo)
