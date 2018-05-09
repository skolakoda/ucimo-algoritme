# http://interactivepython.org/runestone/static/pythonds/BasicDS/ImplementinganUnorderedListLinkedLists.html

class Node:
    def __init__(self,initdata):
        self.data = initdata
        self.next = None

    def getData(self):
        return self.data

    def getNext(self):
        return self.next

    def setData(self,newdata):
        self.data = newdata

    def setNext(self,newnext):
        self.next = newnext


class LinkedList:
    def __init__(self):
        self.head = None

    def add(self,item):
        temp = Node(item)
        temp.setNext(self.head)
        self.head = temp

    def size(self):
        current = self.head
        count = 0
        while current != None:
            count = count + 1
            current = current.getNext()
        return count

    def remove(self,item):
        current = self.head
        previous = None
        while current.getData() != item:
            previous = current
            current = current.getNext()
        if previous == None:
            self.head = current.getNext()
        else:
            previous.setNext(current.getNext())


lista = LinkedList()

lista.add(31)
lista.add(77)
lista.add(17)
lista.add(93)
lista.add(26)
lista.add(54)
print(lista.size())

lista.add(100)
print(lista.size())

lista.remove(54)
print(lista.size())
lista.remove(93)
print(lista.size())
