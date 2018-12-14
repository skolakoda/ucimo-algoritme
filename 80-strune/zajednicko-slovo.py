# https://www.hackerrank.com/challenges/two-strings
# jel imaju dva teksta zajedničko slovo

def twoStrings(s1, s2):
    for s in s1:
        if s in s2:
            return "YES"
    return "NO"


print(twoStrings("hello", "world"))