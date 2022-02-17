const connection = require('./connection');

// const serialize = (authorData) => {
//   return {
//     id: authorData.id,
//     title: title
//   };
// };

const getByAuthorId = (books, id) => {
    const book = books.filter((b) => b.author_id === Number(id));
    return book
    }; 

getAllBooks = async () => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM books ');
  return books;
};

module.exports = {
  getAllBooks,
  getByAuthorId
};
