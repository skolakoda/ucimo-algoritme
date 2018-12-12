def praviNiz(n, arr = []):
  if (n == 0):
      return arr
  arr.append(n)
  return praviNiz(n-1, arr)

print(praviNiz(9))
