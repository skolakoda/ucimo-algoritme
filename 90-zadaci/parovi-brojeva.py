# https://www.hackerrank.com/challenges/sock-merchant/problem
# pronadji koliko ima parova brojeva u nizu

def sockMerchant(ar):
    pairs = 0
    colors = {}
    for x in ar:
        if not colors.get(x):
            colors[x] = True
        else:
            pairs = pairs + 1
            colors[x] = False
    return pairs

print(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]))