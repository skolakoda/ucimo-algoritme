class Cvor:
    def __init__(self, vrednost):
        self.l = None
        self.r = None
        self.v = vrednost


class Stablo:
    def __init__(self):
        self.koren = None

    def dodaj(self, vrednost):
        if(self.koren == None):
            self.koren = Cvor(vrednost)
        else:
            self._dodaj(vrednost, self.koren)

    def _dodaj(self, vrednost, cvor):
        if(vrednost < cvor.v):
            if(cvor.l != None):
                self._dodaj(vrednost, cvor.l)
            else:
                cvor.l = Cvor(vrednost)
        else:
            if(cvor.r != None):
                self._dodaj(vrednost, cvor.r)
            else:
                cvor.r = Cvor(vrednost)

    def nadji(self, vrednost):
        if(self.koren != None):
            return self._nadji(vrednost, self.koren)
        else:
            return None

    def _nadji(self, vrednost, cvor):
        if(vrednost == cvor.v):
            return cvor
        elif(vrednost < cvor.v and cvor.l != None):
            self._nadji(vrednost, cvor.l)
        elif(vrednost > cvor.v and cvor.r != None):
            self._nadji(vrednost, cvor.r)

    def stampaj(self):
        if(self.koren != None):
            self._stampaj(self.koren)

    def _stampaj(self, cvor):
        if(cvor != None):
            self._stampaj(cvor.l)
            print str(cvor.v) + ' '
            self._stampaj(cvor.r)


stablo = Stablo()
stablo.dodaj(3)
stablo.dodaj(4)
stablo.dodaj(0)
stablo.dodaj(8)
stablo.dodaj(2)

stablo.stampaj()

print (stablo.nadji(3)).v
print (stablo.nadji(10))
