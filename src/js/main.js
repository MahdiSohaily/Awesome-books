// Page components
import List from './components/List.js';
import Contact from './components/Contact.js';
import Form from './components/Form.js';

// new DOM Elements
const pages = document.querySelectorAll('.list-item');
const container = document.getElementById('app');
const myList = new List();
container.innerHTML = myList.content;
myList.active();
myList.deleteBook();

pages.forEach((item) => {
  item.addEventListener('click', (e) => {
    const page = e.target.getAttribute('data-display');
    switch (page) {
      case 'list':
        {
          const myList = new List();
          container.innerHTML = myList.content;
          myList.active();
          myList.deleteBook();
        }
        break;
      case 'form':
        {
          const myForm = new Form();
          container.innerHTML = myForm.content;
          myForm.active();
        }

        break;
      case 'contact':
        {
          const myContact = new Contact();
          container.innerHTML = myContact.content;
        }
        break;
      default: {
        const defaultPage = new List();
        container.innerHTML = defaultPage.content;
        defaultPage.active();
        defaultPage.deleteBook();
      }
    }
  });
});
