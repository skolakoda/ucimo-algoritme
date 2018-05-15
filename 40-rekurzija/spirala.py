import turtle

olovka = turtle.Turtle()
prozor = turtle.Screen()

def crtaj(duzina):
    if duzina > 0:
        olovka.forward(duzina)
        olovka.right(90)
        crtaj(duzina-5)

crtaj(200)
prozor.exitonclick()
