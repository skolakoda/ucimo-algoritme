# pomocu stoga proveravamo da li su zagrade uparene

class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def isEmpty(self):
        return self.items == []


def jelUpareno(znaci):
    stog = Stack()
    for znak in znaci:
        if znak == '(':
            stog.push(znak)
        if znak == ')':
            if stog.isEmpty(): return False
            stog.pop()
    return stog.isEmpty()

print(jelUpareno('(((a + b))(b + a)(()))'))
print(jelUpareno('())('))
