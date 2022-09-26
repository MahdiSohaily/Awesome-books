import Book from './Books.js';

export default class BooktoDom {
  

  static checkStorage(target) {
    const dataStored = localStorage.getItem('books');
    if (dataStored) {
      const books = JSON.parse(dataStored);
      target.innerHTML = '';
      for (let key in books) {
        target.innerHTML += BooktoDom.append(key, books[key]);
      }
      BooktoDom.deleteBook();
    } else {
      target.innerHTML = `<tr> <td colspan="4">Nothing to show </td> <tr>`;
    }
  }
  deleteBook() {
    const delBtn = document.querySelectorAll('.delete-btn');
    delBtn.forEach((element, index) => {
      element.addEventListener('click', () => {
        element.parentNode.parentNode.remove();
        const books = JSON.parse(localStorage.getItem('books'));
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));
      });
    });
  }
}
