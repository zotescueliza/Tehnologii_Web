// const checkPrime = (n) => {
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (!(n % i)) {
//             return false
//         }
//     }
//     return true
// }

// if (process.argv.length <= 2) {
//     console.log('not enough parameters')
// } else {
//     console.log(checkPrime(parseInt(process.argv[2])))
// }

const fibonacci = (n) => { 
    if (n < 2) return n
    let a = 0, b = 1
    for (let i = 2; i <= n; i++) b = a + b, a = b - a
    return b
}

if (process.argv.length <= 2) {
    console.log('not enough parameters')
} else {
    console.log(fibonacci(parseInt(process.argv[2])))
}
