const mysql = require('mysql2/promise');

//forma de reutilizar conecção ao mysql
const connection = mysql.createPool({
    user: 'arthur',
    password: '2509Trybe*',
    host:'localhost',
    database:'cep_lookup'

});

module.exports = connection;