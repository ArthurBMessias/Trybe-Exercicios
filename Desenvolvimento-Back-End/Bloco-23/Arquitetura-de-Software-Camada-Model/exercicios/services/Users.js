const User = require('../models/User');

const isValid = (firstname, lastname, email, password) => {
  if (!firstname || !lastname || !email) {
    return false;
  }

  if (password.length < 6) {
    return false;
  }

  if (typeof password !== 'string') {
    return false;
  }

  return true;
};

const getUsers = async () => {
  const users = await User.getUsers();
  return users;
};

const findUser = async () => {
  const user = await User.findUser();
  return user;
};

const createUser = async (firstName, lastName, email, password) => {
  const validUser = isValid(firstName, lastName, email, password);
  if (!validUser) return false;
  const newUser = await User.createUser(firstName, lastName, email, password);
  return newUser;
};

module.exports = {
  getUsers,
  findUser,
  createUser,
};
