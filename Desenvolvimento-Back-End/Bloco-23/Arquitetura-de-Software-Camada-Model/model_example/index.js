const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const Author = require('./models/Author');
const Book = require('./models/Book');
const { reset } = require('nodemon');

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findAuthorById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });
  res.status(200).json(author);
});

app.get('/books', async (req, res) => {
  const { author_id } = req.query;
  const books = await Book.getAllBooks();
  const book = await Book.getByAuthorId(books, author_id);

  res.status(200).json(book);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Book.findById(id);

  if (!book) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(book);
});

app.post('/authors', async (req, res) => {
  const { firstName, middleName, lastName } = req.body;
  if (!Author.isValid(firstName, middleName, lastName))
    return res.status(400).json({ message: 'Dados inválidos' });

  await Author.create(firstName, middleName, lastName);
  res.status(201).json({ message: 'Autor criado com sucesso' });
});

app.listen(port, () => console.log(`Example app listening on port port!`));
