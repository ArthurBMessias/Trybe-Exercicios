const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost', // Se necessário, substitua pelo seu host, `localhost` é o comum
  user: 'arthur',
  password: '2509Trybe*',
  database: 'rest_exercicios',
});

module.exports = connection;
