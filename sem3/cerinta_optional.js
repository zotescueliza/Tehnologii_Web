const calculeazaMedia = (numbers) => {
  const suma = numbers.reduce((accumulator, current) => accumulator + current, 0);
  const media = suma / numbers.length;
  return media;
};

const numere = [10, 20, 30, 40, 50];

const media = calculeazaMedia(numere);
console.log("Media numerelor este:", media);
