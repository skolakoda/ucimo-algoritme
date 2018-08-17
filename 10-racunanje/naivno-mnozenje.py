def pomnozi(x, y):
    zbir = 0
    while x > 0:
        zbir += y
        x -=1
    return zbir

print (pomnozi(8, 5))
