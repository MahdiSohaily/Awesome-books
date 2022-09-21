import Book from './modules/Books.js';
import BookController from './modules/BookController.js';

// Page components
import List from './components/List.js';
import Contact from './components/Contact.js';
import Form from './components/Form.js';
// DOM Address to run handel events

const title = document.getElementById('book-title');
const author = document.getElementById('book-Author');
const listContainer = document.querySelector('.books-list');

// new DOM Elements
const pages = document.querySelectorAll('.list-item');
const container = document.getElementById('app');

window.addEventListener('load', () => {
  BookController.checkStorage(listContainer);
});



for (const item of pages) {
  item.addEventListener('click', (e) => {
    const page = e.target.getAttribute('data-display');
    switch (page) {
      case 'list':
        const myList = new List();
        container.innerHTML = myList.content;
        myList.active();
        myList.deleteBook();
        break;
      case 'form':
        const myForm = new Form();
        container.innerHTML = myForm.content;
        myForm.active();
        break;
      case 'contact':
        const myContact = new Contact();
        container.innerHTML = myContact.content;
        break;
      default:
        const defaultPage = new List();
        container.innerHTML = defaultPage.content;
    }
  });
}
