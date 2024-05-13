const myLibrary = [];
const card = document.querySelector(".card");



const submitButton = document.querySelector(".submit-btn");

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
//let theHobbit = new Book("JRR Tolkein", "The Hobbit", 295, "read");
//let myBook = new Book("Brandon Parkerson", "My Life", 200, "read");
// console.log(theHobbit.info());
//myLibrary.push(theHobbit);
//myLibrary.push(myBook);


function addToLibrary(newBook) {

    
    
    // Display new added book
    
    let para = document.createElement("p");
    para.innerText = newBook.info();
    card.appendChild(para);
    let remove = document.createElement("button");
    remove.innerText = "Remove";
    remove.classList.add("remove");
    remove.setAttribute("data-index-number", myLibrary.length - 1);
    remove.addEventListener("click", removeBook);
    card.appendChild(remove);
};

function createLibrary() {
    card.innerHTML = "";
    myLibrary.forEach((book, index) => {
        let paragraph = document.createElement("p");
        paragraph.innerText = book.info();
        card.appendChild(paragraph);

        let toggleButton = document.createElement("button");
        toggleButton.textContent = book.readStatus === "read" ? "Mark as Unread" : "Mark as Read";
        toggleButton.setAttribute("data-index-number", index);
        toggleButton.addEventListener("click", toggleReadStatus);
        card.appendChild(toggleButton);

        let remove = document.createElement("button");
        remove.textContent = "Remove";
        remove.classList.add("remove");
        remove.setAttribute("data-index-number", index);
        remove.addEventListener("click", removeBook);
        card.appendChild(remove);
    });
};


function removeBook(event) {
    let index = event.target.getAttribute("data-index-number");
    myLibrary.splice(index, 1);
    createLibrary();
};

function submitHandler(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const title = formData.get("title");
    const author = formData.get("author");
    const pages = formData.get("pages");
    const readStatus = formData.get("read-status");

    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
    addToLibrary(newBook);

    form.reset();
    form.remove();
};


document.addEventListener("DOMContentLoaded", function(){
    const newBookButton = document.querySelector(".new-button");
    newBookButton.addEventListener("click", addNewBook);
}
);


function addNewBook(event) {
    event.preventDefault();
    const form = document.createElement("form");
    form.innerHTML = `
        <input type="text" name="title" placeholder="Title">
        <input type="text" name="author" placeholder="Author">
        <input type="text" name="pages" placeholder="Pages">
        <input type="text" name="read-status" placeholder="Read status">
        <button type="submit">Submit</button>
    `;
    form.addEventListener("submit", submitHandler);
    card.appendChild(form);
};

function toggleReadStatus(event) {
    let index = event.target.getAttribute("data-index-number");
    let book = myLibrary[index];
    book.readStatus = book.readStatus === "read" ? "unread" : "read";
    createLibrary();
};


