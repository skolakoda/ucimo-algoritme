def faktorizacija(n):
    i = 2
    faktori = []
    while i * i <= n:
        if n % i:
            i += 1
        else:
            n //= i
            faktori.append(i)
    if n > 1:
        faktori.append(n)
    return faktori


print(faktorizacija(315))
