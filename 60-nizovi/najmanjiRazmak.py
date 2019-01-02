# https://www.hackerrank.com/challenges/minimum-distances/
# nadji najmanji razmak izmedju istih brojeva u nizu ili vrati -1

def najmanjiRazmak(niz):
    indeksi = {}
    min = len(niz)
    for i in range(len(niz)):
        n = niz[i]
        if n in indeksi:
            razmak = i - indeksi[n]
            if razmak < min:
                min = razmak
        indeksi[n] = i
    return min if min < len(niz) else -1


print(najmanjiRazmak([7, 1, 3, 4, 1, 7]))
