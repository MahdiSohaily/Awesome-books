import BooktoDom from '../modules/BookController.js';
export default class List {
  constructor() {
    this._content = `
        <section class="card" aria-labelledby="project-name">
            <h1 id="project-name" class="text-center primary-heading">All Awesome Books</h1>
            <table class="table my-3 px-3 py-3 border">
                <thead>
                    <tr>
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

  get content() {
    return this._content;
  }

  active() {
    const dataStored = localStorage.getItem('books');
    const books = JSON.parse(dataStored);
    const listContainer = document.querySelector('.books-list');
    if (books) {
      for (const item in books) {
        listContainer.innerHTML += BooktoDom.append(item, books[item]);
      }
    } else {
      listContainer.innerHTML = `<tr> <td colspan="4">Nothing to show </td> <tr>`;
    }
  }
  
 
}
