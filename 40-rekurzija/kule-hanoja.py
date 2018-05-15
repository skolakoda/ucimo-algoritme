def pomeriDisk(visina, pocetna, cilj, pomocna):
    if visina >= 1:
        pomeriDisk(visina - 1, pocetna, pomocna, cilj)
        print("Pomeri disk sa", pocetna, "na", cilj)
        pomeriDisk(visina - 1, pomocna, cilj, pocetna)

pomeriDisk(3, "A", "B", "C")
