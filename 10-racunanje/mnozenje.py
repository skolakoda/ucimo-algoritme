def pomnozi(x, y):
    proizvod = 0
    while x > 0:
        proizvod = proizvod + y
        x = x - 1
    return proizvod

print (pomnozi(110, 10))
