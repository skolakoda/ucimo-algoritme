def qsort(arr):
    if len(arr) <= 1:
        return arr

    return qsort([x for x in arr[1:] if x < arr[0]]) + [arr[0]] + qsort([x for x in arr[1:] if x >= arr[0]])

print(qsort([54, 26, 93, 17, 77, 31, 44, 55, 20]))
