class Cvor {
  constructor(val) {
    this.data = val
    this.left = null
    this.right = null
  }
}

class BinarnoStabloPretrage {

  constructor() {
    this.koren = null
  }

  insertNode(val) {
    const cvor = new Cvor(val)

    if (!this.koren) {
      this.koren = cvor
    } else {
      let trenutniCvor = this.koren
      while (trenutniCvor) {
        if (val < trenutniCvor.data) {
          if (!trenutniCvor.left) {
            trenutniCvor.left = cvor
            break
          } else {
            trenutniCvor = trenutniCvor.left
          }
        } else if (val > trenutniCvor.data) {
          if (!trenutniCvor.right) {
            trenutniCvor.right = cvor
            break
          } else {
            trenutniCvor = trenutniCvor.right
          }
        } else {
          console.log('Ignoring this value as the stablo supposed to be a tree containing UNIQUE values')
          break
        }
      }
    }
  }
}

const stablo = new BinarnoStabloPretrage()

stablo.insertNode(8)
stablo.insertNode(3)
stablo.insertNode(10)
stablo.insertNode(1)
stablo.insertNode(6)
stablo.insertNode(14)
stablo.insertNode(4)
stablo.insertNode(7)
stablo.insertNode(13)

console.log(stablo)
