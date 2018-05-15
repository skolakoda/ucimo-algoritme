import turtle

olovka = turtle.Turtle()
prozor = turtle.Screen()

olovka.left(90)
olovka.color("green")

def drvo(duzina):
    if duzina < 5: return
    olovka.forward(duzina)
    olovka.right(20)
    drvo(duzina-15)
    olovka.left(40)
    drvo(duzina-15)
    olovka.right(20)
    olovka.backward(duzina)


drvo(75)
prozor.exitonclick()
