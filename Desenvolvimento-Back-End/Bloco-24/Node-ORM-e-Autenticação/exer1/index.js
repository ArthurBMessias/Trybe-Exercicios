const bodyParser = require('body-parser');
const express = require('express');
const router = require('./router/routes');
const PORT = 3000;

const app = express();
app.use(bodyParser.json());

app.use('/books', router);

app.listen(PORT, () => console.log('TA OUVINDO! TA TUDO CERTO! LÁ NA 3000'));
