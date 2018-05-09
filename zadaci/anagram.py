def jel_anagram(ime1, ime2):
    if len(ime1) != len (ime2): return False
    for slovo in ime1:
        if slovo in ime2:
            ime2 = ime2.replace(slovo, "", 1)
        else:
            return False
    return True

print( jel_anagram("daman", "amand") )
