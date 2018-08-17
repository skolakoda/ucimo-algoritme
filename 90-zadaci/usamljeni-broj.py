# u nizu parova, jedan broj nema para. nadji ga
# https://www.hackerrank.com/challenges/lonely-integer/problem

def usamljeni_broj_naivno(arr):
    arr.sort()
    if len(arr) == 1:
        return arr[0]
    if arr[0] != arr[1]:
        return arr[0]
    for i in range(1, len(arr) - 1):
        if arr[i] != arr[i - 1] and arr[i] != arr[i + 1]:
            return arr[i]
    if arr[len(arr) - 1] != arr[len(arr) - 2]:
        return arr[len(arr) - 1]


def usamljeni_broj_xor(arr):
    v = 0
    for i in range(len(arr)):
        v = v ^ arr[i]
    return v


def usamljeni_broj_reduce(arr):
    return reduce((lambda x, y: x ^ y), arr)


print(usamljeni_broj_naivno([2, 2, 3, 3, 4, 4, 1, 5, 5]))
print(usamljeni_broj_xor([2, 2, 3, 3, 4, 4, 1, 5, 5]))
print(usamljeni_broj_reduce([2, 2, 3, 3, 4, 4, 1, 5, 5]))
