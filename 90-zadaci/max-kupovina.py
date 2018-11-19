# https://www.hackerrank.com/challenges/electronics-shop/
# pronadji najveci zbir dva člana iz dva niza ili vrati -1
# b je gornji limit

def getMoneySpent(keyboards, drives, b):
    max = 0
    for i in range(len(keyboards)):
        for j in range(len(drives)):
            price = keyboards[i] + drives[j]
            if price > b: 
                continue
            if price > max:
                max = price
    return max if max else -1

print(getMoneySpent([3, 1], [5, 2, 8], 10))