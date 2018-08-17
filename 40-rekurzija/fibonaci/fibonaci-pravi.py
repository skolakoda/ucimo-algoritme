def fibonaci(n):
    if n == 0: return [0]
    if n == 1: return [0, 1]
    niz = fibonaci(n-1)
    niz.append(niz[-1] + niz[-2])
    return niz

print (fibonaci(15))
