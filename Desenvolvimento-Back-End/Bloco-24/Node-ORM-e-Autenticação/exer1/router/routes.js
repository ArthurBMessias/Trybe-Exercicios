const express = require('express');
const router = express.Router();
const BookController = require('../controller/bookController')

router.get('/', BookController.getAllBooks);
router.get('/:id', BookController.getBookById);
router.post('/', BookController.createNewBook);
router.post('/:id', BookController.outwriteBook)
router.delete('/:id',BookController.deleteBook )

module.exports = router