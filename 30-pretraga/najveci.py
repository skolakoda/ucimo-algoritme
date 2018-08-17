def najveci(niz):
    max = niz[0]
    for x in range(len(niz)-1):
        if niz[x] > max:
            max = niz[x]
    return max


print(najveci([54,26,93,17,77,31,44,55,20]))
