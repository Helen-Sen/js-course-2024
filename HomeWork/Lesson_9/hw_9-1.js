const books = [
  { title: "1984", author: "George Orwell", year: 1949, genre: "Dystopia" },
  { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", year: 1997, genre: "Fantasy" },
  { title: "Game of Thrones", author: "George R.R. Martin", year: 1996, genre: "Fantasy" },
  { title: "The Old Man and the Sea", author: "Ernest Hemingway", year: 1952, genre: "Adventure novel" },
  { title: "The Master and Margarita", author: "Mikhail Bulgakov", year: 1967, genre: "Fantasy" },
];

// Display books on the page
function displayBooks(booksArray) {
  const bookList = document.querySelector("#bookList");
  bookList.innerHTML = ""; // Clear the list before reprocessing.

  booksArray.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    const bookTitle = document.createElement("h3");
    bookTitle.textContent = book.title;

    const bookDetails = document.createElement("p");
    bookDetails.textContent = `Author: ${book.author}, Year: ${book.year}, Genre: ${book.genre}`;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => editBook(index);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteBook(index);

    // Add elements to bookDiv
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookDetails);
    bookDiv.appendChild(editButton);
    bookDiv.appendChild(deleteButton);

    // Append bookDiv to the container
    bookList.appendChild(bookDiv);
  });
}

// Function to add a new book
function addBook(title, author, year, genre) {
  const newBook = { title, author, year, genre };
  books.push(newBook);
  displayBooks(books); // Update the display
}

// Function to edit an existing book
function editBook(index) {
  const book = books[index];
  const newTitle = prompt("Enter new title:", book.title);
  const newAuthor = prompt("Enter new author:", book.author);
  const newYear = prompt("Enter new year:", book.year);
  const newGenre = prompt("Enter new genre:", book.genre);

  if (newTitle) book.title = newTitle;
  if (newAuthor) book.author = newAuthor;
  if (newYear) book.year = parseInt(newYear);
  if (newGenre) book.genre = newGenre;

  displayBooks(books); // Update the display
}

// Function to delete a book
function deleteBook(index) {
  books.splice(index, 1); // Remove the book at the given index
  displayBooks(books); // Update the display
}

// Initial display of books
displayBooks(books);

// addBook("New Book", "New Author", 2024, "New Genre");
// editBook(0); // Edit the first book
deleteBook(4); // Delete the 5-th book
