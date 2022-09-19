// DOM Address to run handel events
const form = document.querySelector('form');
const title = document.getElementById('book-title');
const author = document.getElementById('book-Author');
const listContainer = document.querySelector('.books-list');
let books = [];

// a function to create items template
function createElem({ title, author }) {
  return `
        <div class="list-item">
            <span>${title}</span>
            <span>${author}</span>
            <button class="remove-button">Remove</button>
        </div>`;
}

// Check for available data at local storage and displaying them
function checkStorage() {
  const storage = localStorage.getItem('books');
  if (storage) {
    books = JSON.parse(storage);
    books.forEach((item) => {
      listContainer.innerHTML += createElem(item);
    });
    const removeBtn = document.querySelectorAll('.remove-button');
    removeBtn.forEach((e, i) => {
      e.addEventListener('click', () => {
        e.parentNode.remove();
        books.splice(i, 1);
        localStorage.setItem('books', JSON.stringify(books));
      });
    });
  }
}

// Object Constructor function
function Book(title, author) {
  this.title = title;
  this.author = author;
}

// Load the data in the local storage
window.addEventListener('load', () => {
  checkStorage();
});

// on the form submit new item will be generated
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookTitle = title.value;
  const bookAuthor = author.value;
  const item = new Book(bookTitle, bookAuthor);
  books.push(item);
  localStorage.setItem('books', JSON.stringify(books));
  listContainer.innerHTML = '';
  checkStorage();
});
