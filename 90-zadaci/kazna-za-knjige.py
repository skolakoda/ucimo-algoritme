# https://www.hackerrank.com/challenges/library-fine/problem

def libraryFine(d1, m1, y1, d2, m2, y2):
    if (y1 < y2):
        return 0
    if (y1 > y2):
        return 10000
    if (m1 < m2):
        return 0
    if (m1 > m2):
        return 500 * (m1 - m2)
    if (d1 > d2):
        return 15 * (d1 - d2)
    return 0

print(libraryFine(28, 2, 2015, 15, 4, 2015))
