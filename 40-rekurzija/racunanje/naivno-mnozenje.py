# x sluzi kao brojac

def pomnozi(x, y):
    if x == 0: 
        return 0
    return y + pomnozi(x-1, y)

print (pomnozi(8, 5))
