const connection = require('./connection');

getAllBooks = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM books '
  );
  return books;
};

const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id,
});

const getByAuthorId = (books, id) => {
  const book = books.filter((b) => b.author_id === Number(id));
  return book;
};

const findById = async (id) => {
  const query =
  "SELECT id, title, author_id FROM model_example.books WHERE id = ?";
  
  const [bookData] = await connection.execute(query, [id]);
  
  if (bookData.length === 0) return null;
  
  return bookData.map(serialize)[0];
  }; 


module.exports = {
  getAllBooks,
  getByAuthorId,
  findById,
};
