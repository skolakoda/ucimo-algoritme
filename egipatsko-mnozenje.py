# https://sr.wikipedia.org/wiki/%D0%95%D0%B3%D0%B8%D0%BF%D0%B0%D1%82%D1%81%D0%BA%D0%BE_%D0%BC%D0%BD%D0%BE%D0%B6%D0%B5%D1%9A%D0%B5

def russian(a, b):
	x = a; y = b
	z = 0
	while x > 0:
		if x % 2 == 1: z = z + y
		y = y << 1
		x = x >> 1
	return z
