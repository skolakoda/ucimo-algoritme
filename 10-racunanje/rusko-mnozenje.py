"""
https://en.wikipedia.org/wiki/Ancient_Egyptian_multiplication
"""

def pomnozi(x, y):
	zbir = 0
	while x > 0:
		if x % 2 == 1: # ako je neparan
			zbir += y
		y = y << 1	# mnozi sa dva
		x = x >> 1	# deli sa dva bez ostatka
	return zbir

print (pomnozi(4, 7))