def saberi(niz):
    if len(niz) == 1:
        return niz[0]
    return niz[0] + saberi(niz[1:])

print(saberi([1,3,5,7,9]))
