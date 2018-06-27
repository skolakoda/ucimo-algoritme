def saberiDo(x):
    if (x == 1): return 1
    return x + saberiDo(x - 1)

print(saberiDo(10))
