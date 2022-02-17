const connection = require('./connection');

const serialize = (userData) => ({
  id: userData.id,
  firstName: userData.first_name,
  lastName: userData.last_name,
  email: userData.email,
  password: userData.password,
});

const isValidUser = (firstname, lastname, email, password) => {
  if (!firstname || !lastname || !email || !password) return false;
  return true;
};

const isValidPassword = (password) => {
  if (password.length < 6 || typeof password !== 'string') return false;
  return true;
};

const create = async (firstname, lastname, email, password) => {
  connection.execute(
    'INSERT INTO users.exercises_example (firstname, lastname, email, password) values (?,?,?,?)',
    [firstname, lastname, email, password]
  );
};

const read = async () => {
    const [users] = await connection.execute('SELECT * FROM exercises_example.users')
    return users.map(serialize)
}

module.exports = {
  create,
  isValidUser,
  isValidPassword,
  read,
};
