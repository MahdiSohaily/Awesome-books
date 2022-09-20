export default class Book {
  constructor(title, author) {
    this._title = title;
    this._author = author;
  }

  get title() {
    return this._title;
  }
  get author() {
    this._author;
  }

  addBook(storedBooks) {
    storedBooks.push(this);
    localStorage.setItem('books', JSON.stringify(storedBooks));
    console.log(localStorage.getItem('books'));
  }
}
