def nadjiMin(arr, i, min):
    if (i == len(arr) - 1):
        return min
    if (arr[i] < min):
        min = arr[i]
    return nadjiMin(arr, i + 1, min)


arr = [12, 1234, 45, 67, 1, 33, 22, -1, -22, 33, 1, 2]
print (nadjiMin(arr, 0, arr[0]))
