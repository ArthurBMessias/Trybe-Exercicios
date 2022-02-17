const mysql = require('mysql2/promise');

//forma de reutilizar conecção ao mysql
const connection = mysql.createPool({
    user: 'arthur',
    password: '2509Trybe*',
    host:'localhost',
    database:'exercises_example'

});

module.exports = connection;