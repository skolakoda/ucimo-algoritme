def poredjaj(niz):
    if len(niz) <= 1: return niz

    manje = []
    jednako = []
    vece = []
    pivot = niz[0]
    for x in niz:
        if x < pivot:
            manje.append(x)
        if x == pivot:
            jednako.append(x)
        if x > pivot:
            vece.append(x)
    return poredjaj(manje) + jednako + poredjaj(vece)


print(poredjaj([54, 26, 93, 17, 77, 31, 44, 55, 20]))
