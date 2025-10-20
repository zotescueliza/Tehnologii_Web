const sampleDictionary = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'lazy', 'dog']

const sampleText = `
    best
    read
    on
    windy
    nights
`
const checkAcrostic = (text, dictionary) => {
    const candidate = text.split('\n').filter(e => e).map(e => e.trim()).map(e => e[0]).join('')

    return dictionary.indexOf(candidate) !== -1
}

console.log(checkAcrostic(sampleText, sampleDictionary))


//-------------------CERINTA 5-------------------
const cenzureaza = (text, dictionary) => {
  const words = text.split(" ");
  const result = words.map(word => {
    if (dictionary.includes(word)) {
      if (word.length > 2) {
        return word[0] + "*".repeat(word.length - 2) + word[word.length - 1];
      } else {
        return word;
      }
    } else {
      return word;
    }
  });
  return result.join(" ");
};
const text = "javascript este minunat";
const dictionar = ["este"];

const rezultat = cenzureaza(text, dictionar);
console.log(rezultat);

