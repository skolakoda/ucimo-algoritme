class Cvor:
    def __init__(self, val):
        self.l_dete = None
        self.d_dete = None
        self.data = val


def dodaj(koren, cvor):
    if koren is None:
        koren = cvor
    else:
        if koren.data > cvor.data:
            if koren.l_dete is None:
                koren.l_dete = cvor
            else:
                dodaj(koren.l_dete, cvor)
        else:
            if koren.d_dete is None:
                koren.d_dete = cvor
            else:
                dodaj(koren.d_dete, cvor)


def stampaj_poredjano(koren):
    if not koren:
        return
    stampaj_poredjano(koren.l_dete)
    print koren.data
    stampaj_poredjano(koren.d_dete)


def stampaj_neredjano(koren):
    if not koren:
        return
    print koren.data
    stampaj_neredjano(koren.l_dete)
    stampaj_neredjano(koren.d_dete)


stablo = Cvor(3)
dodaj(stablo, Cvor(7))
dodaj(stablo, Cvor(1))
dodaj(stablo, Cvor(5))

print "poredjano:"
stampaj_poredjano(stablo)

print "neredjano:"
stampaj_neredjano(stablo)
