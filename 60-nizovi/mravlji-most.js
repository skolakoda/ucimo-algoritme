// https://www.codewars.com/kata/ant-bridge/

const antBridge = function(a, terrain) {
  const ants = [...a]
  for (let i = 0; i < terrain.length; i++)
    if (terrain[i] == "." || terrain[i+1] == "." || terrain[i-1] == ".") 
      ants.unshift(ants.pop())
  return ants.join("")
}

console.log(antBridge("GFEDCBA", "------------...-----------")) // EDCBAGF