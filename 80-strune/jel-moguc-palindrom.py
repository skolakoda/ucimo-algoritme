# palindrom je moguce napraviti od svake reci koja ima paran broj svih slova i eventualno jedno neparno


def jelMogucPalindrom(rec):
    return sum([rec.count(i) % 2 for i in set(rec)]) <= 1


def jelMogucPalindromRazlozeno(rec):
    slova = set(rec)
    ostaci = [rec.count(i) % 2 for i in slova]
    brojNeparnih = sum(ostaci)
    return brojNeparnih <= 1


print(jelMogucPalindrom("milovanavoliana"))
print(jelMogucPalindromRazlozeno("milovanavoliana"))
