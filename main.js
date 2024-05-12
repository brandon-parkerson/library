const myLibrary = [];
const card = document.querySelector(".card");
card.innerHTML = "";
addToLibrary();

function Book(title, author, pages, readStatus) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;

    this.info = function() {
        //let readStatusStr = this.readStatus ? "read" : "no";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    };
};
let theHobbit = new Book("JRR Tolkein", "The Hobbit", 295, "read");
let myBook = new Book("Brandon Parkerson", "My Life", 200, "read");
// console.log(theHobbit.info());
myLibrary.push(theHobbit);
myLibrary.push(myBook);


function addToLibrary() {
    // Take input
    let title = prompt("Title: ");
    let author = prompt("Author: ");
    let pages = prompt("Pages: ");
    let readStatus = prompt("Read status (read or not read yet): ");
    // Push inputs to array
    //myLibrary.push(title, author, pages, readStatus);
    let newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
};






for (let i = 0; i < myLibrary.length; i++) {
    let paragraph = document.createElement("p");
    console.log(myLibrary[i]);
    let currentBook = myLibrary[i];
    paragraph.innerText = currentBook.info();
    card.appendChild(paragraph);
};


