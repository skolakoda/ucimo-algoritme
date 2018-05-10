def nadjiNajmanji(niz):
    min = niz[0]
    for x in range(len(niz)-1):
        if niz[x] < min:
            min = niz[x]
    return min


print(nadjiNajmanji([54,26,93,17,77,31,44,55,20]))
