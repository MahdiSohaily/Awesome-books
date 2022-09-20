import Book from './Books.js';
function append(index, { _title: title, _author: author }) {
  return `
          <tr >
            <th>${Number(index) + 1}</th>
            <td>${title}</td>
            <td>${author}</td>
            <td class="actions">
              <a class="icon" href="#">
                <img width="20" height="20" src="./src/icon/edit-icon.svg" alt="edit-icon">
              </a>
              <a class="icon delete-btn" href="#" id=${index}>
                <img width="20" height="20" src="./src/icon/delete-icon.svg" alt="delete-icon">
              </a>
            </td>
          </tr>`;
}

function checkStorage(target) {
  const dataStored = localStorage.getItem('books');
  if (dataStored) {
    const books = JSON.parse(dataStored);
    target.innerHTML = '';
    for (let key in books) {
      target.innerHTML += append(key, books[key]);
    }
    deleteBook();
  } else {
    target.innerHTML = `<tr> <td colspan="4">Nothing to show </td> <tr>`;
  }
}

function deleteBook() {
  let delBtn = document.querySelectorAll('.delete-btn');
  delBtn.forEach((e, i) => {
    e.addEventListener('click', () => {
      e.parentNode.parentNode.remove();
      const books = JSON.parse(localStorage.getItem('books'));
      books.splice(i, 1);
      localStorage.setItem('books', JSON.stringify(books));
    });
  });
}
export default { append, checkStorage };
