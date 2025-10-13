//exemplul video + cerinta 
// let sayHello = (name) => {
//     return `Hello, ${name}!`
// }

// console.log(sayHello(process.argv[0]));
// console.log(sayHello(process.argv[1]));
// console.log(sayHello(process.argv[2]));

let concateare = (propozitie) => {
    return propozitie.join('');
}
console.log(concateare(process.argv.slice(2)));