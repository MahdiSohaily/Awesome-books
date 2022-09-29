export default class List {
  // constructor function to set the data for List of book page
  constructor() {
    this._content = `
        <section class="card" aria-labelledby="project-name">
            <h1 id="project-name" my-3 class="text-center primary-heading">All Awesome Books</h1>
            <table class="table my-3 border">
                <thead>
                    <tr class="border">
                        <th>NO</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody class="books-list">
                    <!-- Books list will be appended here -->
                </tbody>
            </table>
          
        </section>
        `;
  }

  // Getter function to get page content
  get content() {
    return this._content;
  }

  // Function to return stored data in the HTML format
  append = (index, { _title: title, _author: author }) => {
    return `
          <tr class='clearfix'>
            <td>${Number(index) + 1}</td>
            <td>${title}</td>
            <td>${author}</td>
            <td class="actions">
              <a class="icon edit-btn" href="#" data-edit="id=${index}" title="Edit">
                <img width="20" height="20" src="./src/icon/edit-icon.svg" alt="edit-icon">
              </a>
              <a class="icon delete-btn" href="#" id=${index} title="Remove">
                <img width="20" height="20" src="./src/icon/delete-icon.svg" alt="delete-icon">
              </a>
            </td>
          </tr>`;
  };

  // A function to display stored data in the HTML format in the List page
  displayData = () => {
    const dataStored = localStorage.getItem('books');
    const books = JSON.parse(dataStored);
    const listContainer = document.querySelector('.books-list');
    if (books) {
      for (const item in books) {
        listContainer.innerHTML += this.append(item, books[item]);
      }
      this.deleteBook();
    } else {
      listContainer.innerHTML = '<tr><td colspan="4">Nothing to show </td><tr>';
    }
  };

  // A function to delete indicated element from local storage and DOM tree
  deleteBook = () => {
    const delBtn = document.querySelectorAll('.delete-btn');
    const listContainer = document.querySelector('.books-list');
    delBtn.forEach((element, index) => {
      element.addEventListener('click', () => {
        element.parentNode.parentNode.remove();
        const books = JSON.parse(localStorage.getItem('books'));
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));
        listContainer.innerHTML = '';
        this.displayData();
        this.deleteBook();
      });
    });
  };
}
