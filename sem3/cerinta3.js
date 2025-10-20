const formatString = (s, ...format) => {

    let modified = s
    for (let i = 0; i < format.length; i++) {
        if (modified.indexOf('{' + i + '}') !== -1) {
            modified = modified.replace('{' + i + '}', format[i])
        }
    }
    return modified
}

console.log(formatString("this is a {0} string  and we've {1} it ", 'nice', 'modified'))

//-----------------------CERINTA 3-----------------------

const modifica_propozitie = (template, values) => {
  let result = template;
  for (const key in values) {
    const placeholder = `{${key}}`;
    result = result.replace(placeholder, values[key]);
  }
  return result;
};

const propzitie = "un {substantiv} este {adjectiv}";
const valori = {
  substantiv: "căluț",
  adjectiv: "drăguț"
};

const rezultat = modifica_propozitie(propzitie, valori);
console.log(rezultat);
