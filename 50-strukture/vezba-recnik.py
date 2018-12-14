# https://www.hackerrank.com/challenges/ctci-ransom-note/
# jel prvi tekst sadrži reči iz drugog

def checkMagazine(magazine, note):
    magazine = magazine.split()
    note = note.split()
    recnik = {}
    for w in magazine:
        recnik[w] = 1 if not w in recnik else recnik[w] + 1
    for n in note:
        if n in recnik and recnik[n]:
            recnik[n] = recnik[n] - 1
        else:
            return "No"
    return "Yes"


print(checkMagazine("give me one grand today night", "give one grand today"))