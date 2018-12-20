// https://www.codewars.com/kata/directions-reduction/
// dati su nam pravci da stignemo do željenog cilja, ali ima puno bespotrebnog šetanja
// ukloni sve suprotne pravce iz niza, kako se ne bi bespotrebno šetali

function redukujPravce(pravci) {
  const suprotno = {
    'SEVER': 'JUG', 'ISTOK': 'ZAPAD', 'JUG': 'SEVER', 'ZAPAD': 'ISTOK'
  }
  return pravci.reduce((redukovano, pravac) => {
    if (redukovano[redukovano.length - 1] === suprotno[pravac])
      redukovano.pop()
    else
      redukovano.push(pravac)
    return redukovano
  }, [])
}

console.log(redukujPravce(["SEVER", "JUG", "JUG", "ISTOK", "ZAPAD", "SEVER", "ZAPAD"])) // ["ZAPAD"]
console.log(redukujPravce(["SEVER", "ZAPAD", "JUG", "ISTOK"])) // ["SEVER", "ZAPAD", "JUG", "ISTOK"]
console.log(redukujPravce(["SEVER", "JUG", "ISTOK", "ZAPAD", "ISTOK", "ZAPAD"])) // []
