def pomnozi(x, y):
    zbir = 0
    while x > 0:
        if x % 2 == 1:  # ako je neparan dodaje na zbir
            zbir += y
        x = x >> 1      # deli sa dva bez ostatka
        y = y << 1      # mnozi sa dva
    return zbir

print (pomnozi(12, 14))
