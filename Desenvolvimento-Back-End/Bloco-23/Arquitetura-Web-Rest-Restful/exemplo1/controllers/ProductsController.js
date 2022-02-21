const productModel = require('../models/Products');

const listAll = (_req, res) => {
  try {
    const data = productModel.getAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Ops... Algo deu errado' });
  }
};

module.exports = {
    listAll
}