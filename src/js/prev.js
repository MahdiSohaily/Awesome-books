// DOM Address to run handel events
const form = document.querySelector('form');
const title = document.getElementById('book-title');
const author = document.getElementById('book-Author');
const listContainer = document.querySelector('.books-list');
let books = [];
createElem = ({ title, author }) => {
  return `
          <tr>
            <th>${1}</th>
            <td>${title}</td>
            <td>${author}</td>
            <td class="actions">
              <a class="icon" href="#">
                <img width="20" height="20" src="./src/icon/edit-icon.svg" alt="edit-icon">
              </a>
              <a class="icon" href="#">
                <img width="20" height="20" src="./src/icon/delete-icon.svg" alt="delete-icon">
              </a>
            </td>
          </tr>`;
};

// Check for available data at local storage and displaying them
checkStorage = () => {
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
};

// Object Constructor function
Book = (title, author) => {
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
