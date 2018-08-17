# http://www.geeksforgeeks.org/to-find-smallest-and-second-smallest-element-in-an-array/
# https://www.tutorialcup.com/array/first-second-smallest.htm

import sys

def print2Smallest(arr):

    first = second = sys.maxint
    for i in range(0, len(arr)):

        if arr[i] < first:
            second = first
            first = arr[i]

        elif (arr[i] < second and arr[i] != first):
            second = arr[i];

    if (second == sys.maxint):
        print "Nema donajmanjeg"
    else:
        print "Najmanji element je", first, "a donajmanji je", second


arr = [12, 13, 1, 10, 34, 1]
print2Smallest(arr)
