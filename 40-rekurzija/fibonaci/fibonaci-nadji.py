def fibonaci(n):
  if (n <= 2): return 1
  return fibonaci(n-1) + fibonaci(n-2)

print(fibonaci(19))
