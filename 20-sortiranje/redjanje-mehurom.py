def redjajMehurom(niz):
    menjano = True
    while menjano:
        menjano = False
        for x in range(len(niz) - 1):
            if niz[x] > niz[x+1]:
                niz[x], niz[x+1] = niz[x+1], niz[x]
                menjano = True
    return niz

print(redjajMehurom([54,26,93,17,77,31,44,55,20]))
