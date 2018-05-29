def lonely(arr):
    v = 0
    for i in range(len(arr)):
      v = v ^ arr[i]
    return v

print(lonely([2, 2, 3, 3, 4, 4, 1, 5, 5]))
