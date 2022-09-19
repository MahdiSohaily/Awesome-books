// DOM Address to run handel events
const form = document.querySelector('form');
const title = document.getElementById('book-title');
const author = document.getElementById('book-Author');
const listContainer = document.querySelector('.books-list');
let books = [];

// Check for available data at local storage and displaying them
function checkStorage() {
  let storage = localStorage.getItem('books');
  if (storage) {
    books = JSON.parse(storage);
    for (item of books) {
      listContainer.innerHTML += createElem(item);
    }
  }
}

// Object Constructor function
function Book(title, author) {
  this.title = title;
  this.author = author;
}

// a function to create items template
function createElem({ title, author }) {
  return `
        <div class="list-item">
            <p>${title}</p>
            <p>${author}</p>
            <ahref="javascript:void(0)">Remove</ahref=>
        </div>`;
}

// Load the data in the local storage
window.addEventListener('load', () => {
  checkStorage();
});

// on the form submit new item will be generated
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let bookTitle = title.value;
  let bookAuthor = author.value;
  const item = new Book(bookTitle, bookAuthor);
  books.push(item);
  localStorage.setItem('books', JSON.stringify(books));
  checkStorage();
});

