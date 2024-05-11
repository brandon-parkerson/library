const myLibrary = [];

function Book(title, author, pages, readStatus ) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = this.readStatus;

    this.info = function() {
        let readStatusStr = this.readStatus ? "read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatusStr}`;
    };
};
let theHobbit = new Book("JRR Tolkein", "The Hobbit", 295, false);
console.log(theHobbit.info());

function addToLibrary() {
    //
};