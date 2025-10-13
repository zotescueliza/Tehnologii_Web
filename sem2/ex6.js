// const sampleString = 'the quick brown fox jumps over the lazy dog'

// const getCounts = (text) => {
//     const words = text.split(' ')
//     const result = {}
//     for (let word of words) {
//         if (word in result) {
//             result[word]++
//         } else {
//             result[word] = 1
//         }

//     }
//     for (let word in result) {
//         result[word] /= words.length
//     }
//     return result
// }

// console.log(getCounts(sampleString))

const sampleString = 'the quick brown fox jumps over the lazy dog'

const Frecventalitere = (text) => {
    // Eliminăm spațiile din text
    const litere = text.replace(/ /g, '').split('')
    const rezultat = {}
    for (let litera of litere) {
        if (litera in rezultat) {
            rezultat[litera]++
        } else {
            rezultat[litera] = 1
        }
    }
    const totalLitere = litere.length
    for (let litera in rezultat) {
        rezultat[litera] = rezultat[litera] /totalLitere
    }

    return rezultat
}
console.log(Frecventalitere(sampleString))
