def selection_sort(niz):
    for i in reversed(range(len(niz))):
        maxIndex = 0
        for j in range(1, i + 1):
            if niz[j] > niz[maxIndex]:
                maxIndex = j
        niz[i], niz[maxIndex] = niz[maxIndex], niz[i]
    return niz


print(selection_sort([54, 26, 93, 17, 77, 31, 44, 55, 20]))
