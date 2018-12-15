// https://www.hackerrank.com/challenges/js10-loops/
// ispisati samoglasnike pa suglasnike iz strune u zasebnoj liniji
// jednim prolaskom kroz petlju

function samoglasnici_i_suglasnici(s) {
  let suglasnici = ""
  for (let i = 0; i < s.length; i++) {
    if ("aeiou".includes(s[i]))
      console.log(s[i])
    else
      suglasnici += s[i] + "\n"
  }
  console.log(suglasnici)
}

samoglasnici_i_suglasnici("javascriptloops")