// Page components
import List from './components/List.js';
import Contact from './components/Contact.js';
import Form from './components/Form.js';
import { DateTime } from "./modules/luxion.js";

// new DOM Elements
const pages = document.querySelectorAll('.list-item');
const container = document.getElementById('app');
const now = DateTime.now();
console.log(now.year)
defaultDisplay();

pages.forEach((item) => {
  item.addEventListener('click', (e) => {
    const page = e.target.getAttribute('data-display');
    switch (page) {
      case 'list':
        {
          defaultDisplay();
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
        defaultDisplay();
      }
    }
  });
});

function defaultDisplay() {
  const myList = new List();
  container.innerHTML = myList.content;
  myList.active();
  myList.deleteBook();
}
