def pomnozi(x, y):
	if x == 0: return 0
	if x % 2 == 0:
		return 2 * pomnozi(x/2, y)
	return y + 2 * pomnozi((x-1)/2, y)

print (pomnozi(4, 7))