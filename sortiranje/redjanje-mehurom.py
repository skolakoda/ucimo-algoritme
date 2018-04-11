niz = [12, 5, 32, 13, 8, 9, 65, 0]
print niz, "inicijalno"
duzina = len(niz) - 1

while True:
    menjano = False
    for i in range(duzina):
        naredni = i + 1
        if niz[i] > niz[naredni]:
            niz[i], niz[naredni] = niz[naredni], niz[i]
            menjano = True
    if not menjano:
        break

print niz, "sortirano"
