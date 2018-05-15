# povezuje svaki cvor sa sledecim, a poslednji sa prvim

def napravi_put(cvorovi):
    put = []
    duzina = len(cvorovi)
    for i in range(duzina):
        sledeci_cvor = cvorovi[(i+1) % duzina]
        put.append((cvorovi[i], sledeci_cvor))
    return put

print(napravi_put([3, 4, 5, 6]))

print(napravi_put(['a', 'd', 'm', 'e']))