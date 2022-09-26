export default class Book {
  constructor(title, author) {
    this._title = title;
    this._author = author;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  addBook() {
    let dataStored = [];
    let books = [];
    if (localStorage.getItem('books')) {
      dataStored = localStorage.getItem('books');
      books = JSON.parse(dataStored);
    }
    books.push(this);
    localStorage.setItem('books', JSON.stringify(books));
  }
}
