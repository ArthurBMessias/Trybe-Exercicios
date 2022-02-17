const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const User = require('./models/User');

const port = 3000;

app.use(bodyParser.json());

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!User.isValidUser(firstName, lastName, email, password))
    return res.status(400).json({ message: 'Dados inválidos' });
  if (!User.isValidPassword(password))
    return res.status(400).json({
      message:
        'Password deve ter mais que 6 caracteres e possuir letras e números',
    });
  await User.create(firstName, lastName, email, password);
  res.status(201).json({ message: 'Usuário criado com sucesso!' });
});

app.get('/user', async (_req, res) => {
  const users = await User.read();
  res.status(200).json(users);
});

app.listen(port, () => console.log('Ouvindo na porta 3000 TA ONLINE!'));
