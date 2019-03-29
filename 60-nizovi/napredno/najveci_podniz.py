# https://en.wikipedia.org/wiki/Maximum_subnizay_problem

def nadji_najveci_podniz(niz):
    podniz = najveci_podniz = 0
    for x in niz:
        podniz = max(0, podniz + x)
        najveci_podniz = max(najveci_podniz, podniz)
    return najveci_podniz

print(nadji_najveci_podniz([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
