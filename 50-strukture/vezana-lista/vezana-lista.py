
class Clan:
    def __init__(self, vrednost):
        self.vrednost = vrednost
        self.sledeci = None


class Lista:
    def __init__(self):
        self.glava = None

    def dodaj(self, vrednost):
        temp = Clan(vrednost)
        temp.sledeci = self.glava
        self.glava = temp

    def ispisi(self):
        trenutni = self.glava
        while trenutni:
            print(trenutni.vrednost)
            trenutni = trenutni.sledeci


lista = Lista()

lista.dodaj('Mirko')
lista.dodaj('Slavko')
lista.dodaj('Fadil')
lista.dodaj('Spanac')
lista.ispisi()
