const express = require('express');

const routes = express.Router();

routes.get('/', (_req, res) => {
  return res.json({ hello: 'Word' });
});

module.exports = routes;