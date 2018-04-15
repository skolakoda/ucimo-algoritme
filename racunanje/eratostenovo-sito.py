# https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

def find_primes(n):
  primes = []
  composites = set()

  for i in range (2, n+1):
    if i not in composites:
      primes.append(i)
      for j in range(i*i, n+1, i):
        composites.add(j)
  return primes

print(find_primes(100))
