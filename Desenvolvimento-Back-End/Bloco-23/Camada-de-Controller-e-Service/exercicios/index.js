const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./controllers/cepController')
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.json());
app.use('/cep', routes)

const PORT = 3000;

app.get('/ping', (_req, res) => {
  return res.status(200).json({ message: 'pong' });
});

app.listen(PORT, console.log(`Estou online na porta ${PORT}`));
