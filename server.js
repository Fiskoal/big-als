const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.port || 3000;

const reservations = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get("/api/reservations", (req, res) => {
  return res.json(reservations);
});

app.post('/api/reservations', (req, res) => {
  const newReservation = req.body;

  console.log(newReservation);

  reservations.push(newReservation);
  
  res.json(newReservation);
})

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));