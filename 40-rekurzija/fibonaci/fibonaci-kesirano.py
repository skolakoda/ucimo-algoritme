keshirano = {}

def fibonaci(n):
    if n in [0, 1]:
        return n
    if n not in keshirano:
        keshirano[n] = fibonaci(n - 1) + fibonaci(n - 2)
    return keshirano[n]

print(fibonaci(50))