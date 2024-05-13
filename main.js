const newBookBtn = document.querySelector(".new-book-btn");
const form = document.querySelector("#form");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const bookReadStatus = document.querySelector("#read-status");
const submit = document.querySelector("#submit");

const myLibrary = [];



newBookBtn.addEventListener("click", addBookToLibrary);



function Book(title, author, pages, readStatus) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
};

function addBookToLibrary() {
  // do stuff here
    form.style.display = "flex";
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    let readStatus = bookReadStatus.value;

    let newBook = new Book(title, author, pages, readStatus);
    
    submit.addEventListener("click", function(event){
        event.preventDefault();
        myLibrary.push(newBook);
        form.reset();
        console.log(myLibrary);
    });
    
    //myLibrary.push(newBook);


};
