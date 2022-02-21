const express = require('express');
const userController = require('./controllers/UsersController');
const productController = require('./controllers/ProductsController');
const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/usuarios', userController.listAll);

app.get('/produtos', productController.listAll);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
