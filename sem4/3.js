function fibGen() {
    const cache = [1, 1]
    const fib = (index) => {
        if (index < cache.length) {
            console.log('found ' + index)
            return cache[index]
        } else {
            console.log('calculated ' + index)
            cache[index] = fib(index - 1) + fib(index - 2)
            return cache[index]
        }
    }
    return fib
}

const fib = fibGen()
console.log(fib(1))
console.log(fib(5))
console.log(fib(3))


function powGen() {
    const cache = {}  

    const pow = (base, exp) => {
        const key = `${base}^${exp}`

        if (key in cache) {
            console.log('found ' + key)
            return cache[key]
        } else {
            console.log('calculated ' + key)
            if (exp === 0) {
                cache[key] = 1
            } else if (exp === 1) {
                cache[key] = base
            } else {
                cache[key] = base * pow(base, exp - 1)
            }
            return cache[key]
        }
    }

    return pow
}

const pow = powGen()

console.log(pow(2, 3))  
console.log(pow(2, 5))  
console.log(pow(2, 3))  
console.log(pow(3, 4))  
