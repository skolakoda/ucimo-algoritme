def pomnozi(x, y):
    proizvod = 0
    while x > 0:
        proizvod += y
        x -=1
    return proizvod

print (pomnozi(8, 5))