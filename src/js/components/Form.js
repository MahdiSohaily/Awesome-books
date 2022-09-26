import Book from '../modules/Books.js';

export default class Form {
  // constructor function to set HTML data of the corresponding page
  constructor() {
    this._content = `
        <section class="card relative" aria-labelledby="project-name">
            <div class="data-form">
                <h2 class="text-center secondary-header">Add a new book</h2>
                <form action="javascript:void(0)" method="post" class="form">
                    <div class="form-control my-3">
                        <input class="input-form border" type="text" required minlength="3" name="title" id="book-title" aria-label="book-title" placeholder="Title">
                    </div>
                    <div class="form-control my-3">
                        <input class="input-form border" type="text" required minlength="3" name="author" id="book-Author" aria-label="book-Author" placeholder="Author">
                    </div>
                    <div class="form-control my-3">
                        <button type="submit" class="btn border">Add
                            <img width="20" height="20" class="icon" src="./src/icon/submit-icon.svg" alt="submit-icon">
                        </button>
                    </div>
                </form>
                </div><p class='message'></p>
        </section>
        `;
  }

  // getter function to get data of this page to be displayed when intended
  get content() {
    return this._content;
  }

  // a function to check gor the form submission
  active = () => {
    const form = document.querySelector('form');
    const title = document.getElementById('book-title');
    const author = document.getElementById('book-Author');

    form.addEventListener('submit', () => {
      const bookTitle = title.value;
      const bookAuthor = author.value;
      const newBook = new Book(bookTitle, bookAuthor);
      newBook.addBook();
      this.successMessage('New Data Inserted Successfully');
      title.value = '';
      author.value = '';
    });
  }

  successMessage = (message) => {
    const submitMessage = document.querySelector('.message');
    submitMessage.classList.add('showMessage');
    setTimeout(() => {
      submitMessage.classList.remove('showMessage')
    }, 2000)
    submitMessage.innerHTML = message;
  }
}
