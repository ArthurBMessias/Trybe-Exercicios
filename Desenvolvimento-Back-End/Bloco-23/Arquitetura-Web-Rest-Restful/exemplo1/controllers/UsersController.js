const userModel = require('../models/Users');

const listAll = (_req, res) => {
  try {
    const data = userModel.getAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Ops... Algo deu errado' });
  }
};


module.exports = {
    listAll
}