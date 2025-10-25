const orderCoffee = (type) => {

    const types = {
        REGULAR: 'REGULAR',
        SPECIAL: 'SPECIAL'
    }

    if (Object.values(types).indexOf(type) == -1) {
        throw new Error('coffee error')
    } else {
        console.log(`preparing ${type} coffee`)
    }
}

try {
    orderCoffee('REGULAR')
    orderCoffee('SWEET_COFFEE_NO_SUGAR')
} catch (err) {
    console.warn(err.message)  
}

const increaseSalary = (salaries, percent) => {
    if (!Array.isArray(salaries)) throw new Error('First parameter must be an array');
    if (typeof percent !== 'number') throw new Error('Second parameter must be a number');

    return salaries.map(sal => sal + sal * (percent / 100));
}

try {
    console.log(increaseSalary([3000, 4000, 5000], 10));
    console.log(increaseSalary('not an array', 10)); // va arunca eroare
} catch (err) {
    console.log(err.message);
}

