# Binarni niz cifara nastaje ovako: na početku se napiše 0, a zatim se niz produžava sledećim postupkom: napisani deo se doda sdesna zamenjujući 0 sa 1 i obrnuto, tj. 0, 01, 0110, 01101001 ...
# Napisati program koji računa n-tu cifru binarnog niza

def obrni_bitove(niz):
    bitovi = list(niz)
    for n in range(len(bitovi)):
        bitovi[n] = '0' if bitovi[n] == '1' else '1'
    return "".join(bitovi)

def binarni_niz(n, niz = '0'):
    if len(niz) > n:
        return niz[n]
    return binarni_niz(n, niz + obrni_bitove(niz))

print(binarni_niz(8))
