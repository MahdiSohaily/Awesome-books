// Page components
import List from './components/List.js';
import Contact from './components/Contact.js';
import Form from './components/Form.js';
import { DateTime } from './modules/luxion.js';

// DOM reference of page interaction API's
const pages = document.querySelectorAll('.list-item');
const container = document.getElementById('app');
const date = document.querySelector('.date');

// Load current date and time using luxion library
const currentDate = DateTime.now();
date.innerHTML = currentDate.toFormat('DDD t');

// function to create new object of default display module
function defaultDisplay() {
  const myList = new List();
  container.innerHTML = myList.content;
  myList.displayData();
}

// call default Display function to load the initial display page on load
defaultDisplay();

// Add event to check user intended page
pages.forEach((item) => {
  item.addEventListener('click', (e) => {
    const page = e.target.getAttribute('data-display');
    switch (page) {
      case 'list':
          defaultDisplay();
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
      default: 
        defaultDisplay();
    }
  });
});
