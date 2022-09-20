import Book from './Books.js';
import BookController from './BookController.js';
// DOM Address to run handel events
const form = document.querySelector('form');
const title = document.getElementById('book-title');
const author = document.getElementById('book-Author');
const listContainer = document.querySelector('.books-list');
let books = [];

window.addEventListener('load', () => {
  BookController.checkStorage(listContainer, books);
});

form.addEventListener('submit', () => {
  const bookTitle = title.value;
  const bookAuthor = author.value;
  const newBook = new Book(bookTitle, bookAuthor);
  newBook.addBook(books);
  BookController.checkStorage(listContainer, books);
});

listContainer.addEventListener('click', (e) => {
  
  const dom = e.target.id;
  console.log(dom);
});
