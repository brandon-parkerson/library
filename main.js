const myLibrary = [];
const show = document.querySelector("div");

function Book(title, author, pages, readStatus) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;

    this.info = function() {
        let readStatusStr = this.readStatus ? "read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatusStr}`;
    };
};
// let theHobbit = new Book("JRR Tolkein", "The Hobbit", 295, true);
// console.log(theHobbit.info());



function addToLibrary() {
    // Take input
    let title = prompt("Title: ");
    let author = prompt("Author: ");
    let pages = prompt("Pages: ");
    let readStatus = prompt("Read status (true or false): ");
    // Push inputs to array
    //myLibrary.push(title, author, pages, readStatus);
    let newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
};

addToLibrary();

show.innerHTML += myLibrary;