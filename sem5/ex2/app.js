const fs = require('fs');
const rimraf = require('rimraf');

//Creează un director numit "exemplu"
fs.mkdirSync('exemplu');
console.log('Director creat.');

//Creează un fișier în acel director
fs.writeFileSync('exemplu/fisier.txt', 'Salut! Acesta este conținutul fișierului.');
console.log('Fișier creat.');

//Așteaptă 5 secunde, apoi șterge directorul
setTimeout(() => {
  rimraf.sync('exemplu');
  console.log('Director șters.');
}, 5000);


// // Șterge directorul imediat (cu tot conținutul său)
// rimraf.sync('exemplu');
// console.log('Director șters.');
