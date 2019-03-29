class Cvor:
    def __init__(self, val):
        self.levo = None
        self.desno = None
        self.data = val


def dodaj(koren, cvor):
    if koren is None:
        koren = cvor
    else:
        if koren.data > cvor.data:
            if koren.levo is None:
                koren.levo = cvor
            else:
                dodaj(koren.levo, cvor)
        else:
            if koren.desno is None:
                koren.desno = cvor
            else:
                dodaj(koren.desno, cvor)


def stampaj_poredjano(koren):
    if not koren:
        return
    stampaj_poredjano(koren.levo)
    print koren.data
    stampaj_poredjano(koren.desno)


def stampaj_neredjano(koren):
    if not koren:
        return
    print koren.data
    stampaj_neredjano(koren.levo)
    stampaj_neredjano(koren.desno)


stablo = Cvor(3)
dodaj(stablo, Cvor(7))
dodaj(stablo, Cvor(1))
dodaj(stablo, Cvor(5))

print "poredjano:"
stampaj_poredjano(stablo)

print "neredjano:"
stampaj_neredjano(stablo)
