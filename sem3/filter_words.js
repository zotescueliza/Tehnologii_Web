const words = [
    "fox",
    "wolf",
    "snake",
    "crocodile",
    "lion",
    "cat",
    "crocodile",
    "horse"
]

const forbiddenWord = "crocodile"
const minLength = 4

const filterWords = (words, forbiddenWord, minLength) => {
    const result = words.filter((word) => {
        if (word !== forbiddenWord && word.length >= minLength) {
            return true
        }
        return false;
    })
    return result
}

console.log(filterWords(words, forbiddenWord, minLength))

//---------------CERINTA 1-------------------------------

const birthYears = [2002, 1999, 2004, 1989, 1975, 2017];
//calculez anul curent
const currentYear = new Date().getFullYear(); 

const ages = birthYears.map((year) => currentYear - year);
console.log(ages); 
const adults = ages.filter((age) => age >= 18);
console.log(adults); 

