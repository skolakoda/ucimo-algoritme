class Clan {
  constructor(podatak) {
    this.podatak = podatak
    this.sledeci = null
  }
}

class Lista {
  constructor(vrednost) {
    this.glava = new Clan(vrednost)
  }

  dodaj(vrednost, trenutni = this.glava) {
    if (!trenutni) return
    if (!trenutni.sledeci) trenutni.sledeci = new Clan(vrednost)
    else this.dodaj(vrednost, trenutni.sledeci)
  }
}

const lista = new Lista('Mirko')
lista.dodaj('Slavko')
lista.dodaj('Fadil')
lista.dodaj('Španac')
console.log(JSON.stringify(lista, null, 4))