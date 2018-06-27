def obrni(lista):
    if not lista:
        return ([])
    return (obrni(lista[1:]) + [lista[0]])

print(obrni([1,2,3,4,5]))
