def redjajUmetanjem(niz):
    for i in range(len(niz)):
        trenutni = niz[i]
        j = i
        while j > 0 and niz[j - 1] > trenutni:
            niz[j] = niz[j - 1]
            j = j - 1
        niz[j] = trenutni
    return niz


print(redjajUmetanjem([54, 26, 93, 17, 77, 31, 44, 55, 20]))
