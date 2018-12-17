# https://www.hackerrank.com/challenges/mark-and-toys
# koliko komada igracaka najvise mozemo kupiti za dati iznos

def maximumToys(prices, money):
    prices.sort()
    total = 0
    numToys = 0
    for p in prices:
        if total + p <= money:
            total += p
            numToys += 1
    return numToys

print(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50))