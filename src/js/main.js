import Book from './modules/Books.js';
import BookController from './modules/BookController.js';
import List from './components/List.js';
import Contact from './components/Contact.js';
import Form from './components/Form.js';
// DOM Address to run handel events
const form = document.querySelector('form');
const title = document.getElementById('book-title');
const author = document.getElementById('book-Author');
const listContainer = document.querySelector('.books-list');

window.addEventListener('load', () => {
  BookController.checkStorage(listContainer);
});

form.addEventListener('submit', () => {
  const bookTitle = title.value;
  const bookAuthor = author.value;
  const newBook = new Book(bookTitle, bookAuthor);
  newBook.addBook();
  BookController.checkStorage(listContainer);
  title.value = '';
  author.value = '';
});
