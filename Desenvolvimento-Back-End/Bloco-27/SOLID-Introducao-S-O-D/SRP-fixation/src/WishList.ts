type Book = {
  book: string;
  author: string;
  genre: string;
};

class WishList {
  private wishlist: Book[];

  constructor(book: Book) {
    this.wishlist = [book];
  }

  addToWishList(book: Book): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }
}

const newBook = new WishList({
  book: 'Fantasia',
  author: 'Gabriel',
  genre: 'Erotic',
});

newBook.addToWishList({
  book: 'Fantasia 2',
  author: 'Gabriel 2',
  genre: 'Erotic Super',
});

newBook.showWishlist();
