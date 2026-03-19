const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Servir la GUI estática
app.use('/gui', express.static('public'));

// Endpoint liviano (latencia base)
app.get('/', (req, res) => {
  res.send('OK');
});

// Endpoint CPU-bound (stress test)
app.get('/cpu', (req, res) => {
  let x = 0;
  for (let i = 0; i < 5e7; i++) x += i;
  res.send({ result: x });
});

// Endpoint IO-bound (simulación de espera)
app.get('/io', async (req, res) => {
  await new Promise(resolve => setTimeout(resolve, 50));
  res.send('IO done');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});