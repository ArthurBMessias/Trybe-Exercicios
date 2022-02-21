const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const Validations = require('../services/validations');
const cepModel = require('../models/cepModel');
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

router.get('/:cep', async (req, res) => {
    const { cep } = req.params;
    const findCep = await cepModel.find(cep)
    
    if (!Validations.isValid(cep)) {
    return res.status(400).json({ error: { code: "invalidData", message: "CEP inválido" } })
    }
    
    if(!findCep) {
    return res.status(404).json({ error: { code: "notFound", message: "CEP não encontrado" } })
    }
    
    return res.status(200).json(findCep);
    });

router.post('/', async(req, res) => {
    const { cep, logradouro, bairro, localidade, uf} = req.body;
    const newCep = await cepModel.add(cep, logradouro, bairro, localidade, uf);

    return res.status(201).json(newCep)

})

module.exports = router;
