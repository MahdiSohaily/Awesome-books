function append(index, title, author) {
    console.log()
  return `
          <tr>
            <th>${Number(index) + 1}</th>
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
}

function checkStorage(target, books) {
  const dataStored = localStorage.getItem('books');
  if (dataStored) {
    books = JSON.parse(dataStored);
    target.innerHTML = '';
    for (let key in books) {
      console.log(books[key]);
      target.innerHTML += append(key, books[key].title, books[key].author);
    }
  } else {
    target.innerHTML = `<tr> <td colspan="4">Nothing to show </td> <tr>`;
  }
}

export default { append, checkStorage };
