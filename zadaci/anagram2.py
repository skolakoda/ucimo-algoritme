def jel_anagram(ime1, ime2):
    if len(ime1) != len (ime2): return False

    lista1 = list(ime1)
    lista1.sort()
    lista2 = list(ime2)
    lista2.sort()

    for x in range(len(ime1)):
        if not lista1[x] == lista2[x]:
            return False
    return True

print( jel_anagram("daman", "amand") )
