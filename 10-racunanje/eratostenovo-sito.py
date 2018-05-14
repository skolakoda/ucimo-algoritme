def nadji_proste_brojeve(n):
    prosti = set()
    slozeni = set()

    for i in range(2, n + 1):
        if i not in slozeni:
            prosti.add(i)
            for j in range(i * i, n + 1, i):
                slozeni.add(j)
    return prosti

print(nadji_proste_brojeve(100))
