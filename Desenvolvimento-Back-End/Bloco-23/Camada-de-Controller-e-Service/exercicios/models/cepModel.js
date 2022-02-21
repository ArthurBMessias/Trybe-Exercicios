const connection = require('./connection');

const add = async (cep, logradouro, bairro, localidade, uf) => {
  const [result] = await connection.execute('INSERT INTO cep_lookup VALUES (?, ?, ?, ?, ?)', [cep, logradouro, bairro, localidade, uf], cep)[0];

  const newCep = {
      id: result.insertId,
      cep,
      logradouro,
      bairro,
      localidade,
      uf
  }


  return newCep;
};

const find = async (cep) => {
    const [result] = await connection.execute('SELECT cep FROM cep_lookup.ceps WHERE cep=?', [cep])
    return result[0]
}


module.exports = {
  add,
  find,
};
