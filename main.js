const newBookBtn = document.querySelector(".new-book-btn");
const form = document.querySelector("#form");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const bookReadStatus = document.querySelector("#read-status");
const submit = document.querySelector("#submit");

const myLibrary = [];



newBookBtn.addEventListener("click", () => {
  form.style.display = "flex";
});



function Book(title, author, pages, readStatus) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
};

submit.addEventListener("click", (event) => {
  event.preventDefault();

  const title = bookTitle.value;
  const author = bookAuthor.value;
  const pages = bookPages.value;
  const readStatus = bookReadStatus.checked; // Check if checkbox is checked

  const newBook = new Book(title, author, pages, readStatus);
  myLibrary.push(newBook);
  form.reset();
  form.style.display = "none";
  console.log(myLibrary);
});
