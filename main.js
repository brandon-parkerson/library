const newBookBtn = document.querySelector(".new-book-btn");
const form = document.querySelector("#form");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const bookReadStatus = document.querySelector("#read-status");
const submit = document.querySelector("#submit");
const library = document.querySelector(".library");

const myLibrary = [];

newBookBtn.addEventListener("click", () => {
  form.style.display = "flex";
});

// Book class instead of a book factory function above
class Book {
  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    if (this.readStatus === true) {
      this.readStatus = `already read`;
    } else if (this.readStatus === false) {
      this.readStatus = `have not read`;
    }
  }
  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}`;
  }
}

submit.addEventListener("click", (event) => {
  event.preventDefault();

  const title = bookTitle.value;
  const author = bookAuthor.value;
  const pages = bookPages.value;
  const readStatus = bookReadStatus.checked; // Check if checkbox is checked
  const input = document.querySelector("input[required]");
  let isValid = form.checkValidity();

  if (isValid === false) {
    form.reportValidity();
    
    return;
  }

  const newBook = new Book(title, author, pages, readStatus);
  myLibrary.push(newBook);
  form.reset();
  form.style.display = "none";
  console.log(myLibrary);
  createLibrary();
});

function createLibrary() {
  library.innerHTML = ``;
  myLibrary.forEach((book, index) => {
    let card = document.createElement("div");
    card.innerText = book.info();
    library.appendChild(card);

    let toggleButton = document.createElement("button");
    toggleButton.classList.add("toggle");
    toggleButton.textContent =
      book.readStatus === "already read" ? "Mark as Unread" : "Mark as Read";
    toggleButton.addEventListener("click", () => toggleReadStatus(index));
    card.appendChild(toggleButton);

    let remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.classList.add("remove");
    remove.setAttribute("data-index-number", index);
    remove.addEventListener("click", removeBook);
    card.appendChild(remove);
  });
}

function removeBook(event) {
  let index = event.target.getAttribute("data-index-number");
  myLibrary.splice(index, 1);
  createLibrary();
}

function toggleReadStatus(index) {
  myLibrary[index].readStatus =
    myLibrary[index].readStatus === "already read"
      ? "have not read"
      : "already read";
  createLibrary();
}
