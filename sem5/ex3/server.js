const express = require('express');
const app = express();

const resurse = [
  { id: 1, nume: 'Carte' },
  { id: 2, nume: 'Pix' },
  { id: 3, nume: 'Caiet' }
];

app.get('/resurse', (req, res) => {
  res.json(resurse);
});

//Endpoint nou: returnează o resursă după ID
app.get('/resurse/:id', (req, res) => {
  // extragem id-ul din URL
  const id = parseInt(req.params.id);

  // căutăm resursa cu acel id
  const resursa = resurse.find(r => r.id === id);
  if (resursa) {
    res.json(resursa);
  } else {
    res.status(404).json({ mesaj: 'Resursa nu a fost găsită!' });
  }
});
app.listen(3000, () => {
  console.log('Serverul rulează pe http://localhost:3000');
});
