def merge_sort(x):
    if len(x) == 1: return x
    result = []
    mid = len(x) // 2
    left = merge_sort(x[:mid])
    right = merge_sort(x[mid:])

    while (len(left)) and (len(right)):
        if left[0] > right[0]:
            result.append(right.pop(0))
        else:
            result.append(left.pop(0))

    result.extend(left + right)
    return result

print(merge_sort([54, 26, 93, 17, 77, 31, 44, 55, 20]))
