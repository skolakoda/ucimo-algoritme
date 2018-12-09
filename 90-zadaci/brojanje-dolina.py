# https://www.hackerrank.com/challenges/counting-valleys/
# dolina je podniz koji ima isti broj spustanja (D) i penjanja (U)

def countingValleys(s):
    valleys = 0
    level = 0
    for a in s:
        if a is "D":
            level += 1
        if a is "U":
            level -= 1
            if level == 0:
                valleys += 1
    return valleys


print(countingValleys(["U", "D", "D", "D", "U", "D", "U", "U"]))
