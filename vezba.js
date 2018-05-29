const lonely = a => a.reduce((a,b) => {
    console.log(a, b)
    return a ^ b
})

console.log(lonely([3, 2, 2, 3, 4, 4, 1, 5, 5]))
