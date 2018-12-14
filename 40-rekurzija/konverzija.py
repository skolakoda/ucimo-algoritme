# http://interactivepython.org/runestone/static/pythonds/Recursion/pythondsConvertinganIntegertoaStringinAnyBase.html
# konverzija u drugi brojcani sistem

osnova = 2
znaci = "0123456789ABCDEF"

def prevedi(n):
    if n < osnova:
        return znaci[n]
    return prevedi(n // osnova) + znaci[n % osnova]

print(prevedi(1453))
