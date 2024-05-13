const myLibrary = [];
const card = document.querySelector(".card");
card.innerHTML = "";
//addToLibrary();
const newBookButton = document.querySelector(".new-button");
const submitButton = document.querySelector(".submit");

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


function addToLibrary() {
    // Display form asking for title, author, num of pages, and read status
    const form = document.createElement("form");
    const titleInput = document.createElement("input");
    titleInput.type = `text`;
    titleInput.name = `title`;
    titleInput.placeholder = `Title`;
    const authorInput = document.createElement("input");
    authorInput.type = `text`;
    authorInput.name = `author`;
    authorInput.placeholder = `Author`;
    const pagesInput = document.createElement("input");
    pagesInput.type = `text`;
    pagesInput.name = `pages`;
    pagesInput.placeholder = `Pages`;
    const readInput = document.createElement("input");
    readInput.type = `text`;
    readInput.name = `read-status`;
    readInput.placeholder = `Read status`;

    const submit = document.createElement(`button`);
    submit.textContent = `Submit`;
    submit.classList.add("submit"); 


    

    form.appendChild(titleInput);
    form.appendChild(authorInput);
    form.appendChild(pagesInput);
    form.appendChild(readInput);
    form.appendChild(submit);
    card.appendChild(form);
    
    // Push inputs to array
    //let newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
    // Display new added book
    let remove = document.createElement("button");
    let index = myLibrary.indexOf(`${newBook}`);
    remove.setAttribute(`data-index-number`, `${index}`);
    remove.classList.add("remove");
    remove.textContent = `Remove`;
    let para = document.createElement("p");
    para.innerText = newBook.info();
    card.appendChild(para);
    card.appendChild(remove);
    
};
for (let i = 0; i < myLibrary.length; i++) {
    let paragraph = document.createElement("p");
    console.log(myLibrary[i]);
    let currentBook = myLibrary[i];
    paragraph.innerText = currentBook.info();
    card.appendChild(paragraph);
};
//submitButton.addEventListener("click", removeBook);




newBookButton.addEventListener("click", addNewBook);

function addNewBook(event) {
    event.preventDefault();
    addToLibrary();
    
};


