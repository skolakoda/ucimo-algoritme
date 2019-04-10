# potrositi sto vise para kupovinom n proizvoda za limitirani budzet
# https://www.codewars.com/kata/best-travel/
import itertools

def choose_best_buy(limit, n, prices):
    best_buy = 0
    combinations = itertools.combinations(prices, n)
    for combination in combinations:
        total = sum(combination)
        if total <= limit and total > best_buy:
             best_buy = total
    return best_buy if best_buy else None

ts = [91, 74, 73, 85, 73, 81, 87]
print(choose_best_buy(230, 3, ts))
