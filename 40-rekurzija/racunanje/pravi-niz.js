function praviNiz(n) {
  if (n < 0) return []
  return [n, ...praviNiz(n - 5)]
}

console.log(praviNiz(23))