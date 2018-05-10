def binarnaPretraga(niz, clan):
    donji = 0
    gornji = len(niz)-1

    while donji <= gornji:
        sredina = (donji + gornji) // 2
        if clan == niz[sredina]:
            return True
        if clan < niz[sredina]:
            gornji = sredina - 1
        else:
            donji = sredina + 1

    return False


lista = [0, 1, 2, 8, 13, 17, 19, 32, 42,]

print(binarnaPretraga(lista, 3))
print(binarnaPretraga(lista, 13))
