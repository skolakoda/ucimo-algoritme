# https://www.hackerrank.com/challenges/the-grid-search/

matrica = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    [0, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
]

obrazac = [
    [8, 7, 6, 5, 4, 3],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1]
]


def obrazac_u_matrici(matrica, obrazac):
    def proveri_obrazac(start_i, start_j):
        for i in range(len(obrazac)):
            for j in range(len(obrazac[0])):
                if obrazac[i][j] != matrica[i+start_i][j+start_j]:
                    return False
        return True

    for i in range(len(matrica) - len(obrazac) + 1):
        for j in range(len(matrica[0]) - len(obrazac[0]) + 1):
            if proveri_obrazac(i, j):
                return True
    return False


print(obrazac_u_matrici(matrica, obrazac))
