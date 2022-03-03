const Book = (sequlize, DataTypes) => {
  const Book = sequlize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
  },
  {
    underscored: true,
    tableName: 'Books'
  });

  return Book;
};

module.exports = Book