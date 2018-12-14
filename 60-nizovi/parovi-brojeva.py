# https://www.hackerrank.com/challenges/sock-merchant/problem
# pronadji koliko ima parova brojeva u nizu

def sockMerchant(ar):
    total = 0
    pairs = {}
    for x in ar:
        if not pairs.get(x):
            pairs[x] = True
        else:
            total = total + 1
            pairs[x] = False
    return total


"""
def sockMerchant(ar):
    total = 0
    pairs = {}
    for x in ar:
        if pairs.get(x):
            total = total + 1
        pairs[x] = not pairs.get(x)
    return total
"""

print(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]))