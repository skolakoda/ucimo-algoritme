def sum_pairs(nums, sum):
    exist = set()
    for n in nums:
        if sum - n in exist:
            return [sum - n, n]
        exist.add(n)

print(sum_pairs([1, 4, 8, 7, 3, 15], 8))
