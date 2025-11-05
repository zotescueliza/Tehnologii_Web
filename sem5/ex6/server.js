const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let persoane = [
  { id: 1, name: 'Ana', age: 22 },
  { id: 2, name: 'Ion', age: 25 },
  { id: 3, name: 'Test2', age: 54 }
];


app.get('/api/getList', (req, res) => {
  res.json(persoane);
});

app.get('/api/getList/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const persoana = persoane.find(p => p.id === id);

  if (persoana) {
    res.json(persoana);
  } else {
    res.status(404).json({ message: 'Persoana nu a fost găsită!' });
  }
});

app.post('/api/postList', (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ message: 'Nume și vârstă obligatorii!' });
  }

  const newPersoana = { id: persoane.length + 1, name, age };
  persoane.push(newPersoana);
  res.json({ message: 'Persoana adăugată cu succes!' });
});

app.listen(8000, () => console.log('Serverul rulează pe http://localhost:8000'));
