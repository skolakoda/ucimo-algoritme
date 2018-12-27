def jelPalindrom(str):
    l = len(str)
    palindrom = True
    for i in range(l):
      palindrom = palindrom and str[i] == str[l-1-i]
    return palindrom


print(jelPalindrom("aabaa"))