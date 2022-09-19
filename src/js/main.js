const form = document.querySelector('form');
const title = document.getElementById('book-title');
const author = document.getElementById('book-Author');
const books = [];


function Book(title, author) {
  this.title = title;
  this.author = author;
}
