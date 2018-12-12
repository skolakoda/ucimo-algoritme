def stepenuj(broj, stepen):
  if (stepen == 1):
    return broj
  return broj * stepenuj(broj, stepen - 1)


print(stepenuj(2, 3))
print(stepenuj(10, 3))
