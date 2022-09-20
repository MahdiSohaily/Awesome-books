import Book from './modules/Books.js';
import BooktoDom from './modules/BookController.js';
// DOM Address to run handel events
const form = document.querySelector('form');
const title = document.getElementById('book-title');
const author = document.getElementById('book-Author');
const listContainer = document.querySelector('.books-list');

window.addEventListener('load', () => {
  BooktoDom.checkStorage(listContainer);
});

form.addEventListener('submit', () => {
  const bookTitle = title.value;
  const bookAuthor = author.value;
  const newBook = new Book(bookTitle, bookAuthor);
  newBook.addBook();
  BooktoDom.checkStorage(listContainer);
  title.value = '';
  author.value = '';
});
