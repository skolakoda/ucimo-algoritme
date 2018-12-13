# https://www.hackerrank.com/challenges/ctci-array-left-rotation/

def pomeriLevo(niz, i):
    novNiz = []
    while not len(novNiz) == len(niz):
        novNiz.append(niz[i])
        i = (i + 1) % len(niz)
    return novNiz


print(pomeriLevo([1, 2, 3, 4, 5], 4))