def jelImaVelikoSlovo(str, i=0):
    if (i == len(str) - 1):
        return
    if (str[i].isupper()):
        return str[i]
    return jelImaVelikoSlovo(str, i+1)


rezultat = jelImaVelikoSlovo("zdravo Svete")
if (rezultat):
    print(rezultat)
else:
    print("No uppercase letter")
