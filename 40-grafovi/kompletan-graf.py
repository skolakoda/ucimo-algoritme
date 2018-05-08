# https://en.wikipedia.org/wiki/Complete_graph n(n − 1) / 2 

def povezi(cvorovi):
	grane = []
	duzina = len(cvorovi)
	for i in range(duzina):
		for j in range(duzina):
			if (i < j):
				grane.append([cvorovi[i], cvorovi[j]])
	return grane

cvorovi = [2, 4, 5]
print(povezi(cvorovi))
