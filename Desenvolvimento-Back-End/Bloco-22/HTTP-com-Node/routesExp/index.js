const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

const langs = ['HTML', 'CSS', 'JS', 'React'];

app.get('/langs', (_req, res) => {
  res.send(langs);
});

app.post('/langs', (req, res) => {
    const { name } = req.body;
    langs.push('Node.js');
    res.send(`Linguagem ${name} adicionada com sucesso!`)

})

app.listen(3000, () => console.log('App rodando na porta 3000!'));
