// Створити масив об’єктів, де кожен об’єкт представляє книгу:
// Кожен об’єкт повинен містити наступні властивості: назва книги, автор, рік видання, жанр.
const books = [
  { title: "1984", author: "George Orwell", year: 1949, genre: "Dystopia" },
  { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", year: 1997, genre: "Fantasy" },
  { title: "Game of Thrones", author: "George R.R. Martin", year: 1996, genre: "Fantasy" },
  { title: "The Old Man and the Sea", author: "Ernest Hemingway", year: 1952, genre: "Adventure novel" },
  { title: "The Master and Margarita", author: "Mikhail Bulgakov", year: 1967, genre: "Fantasy" },
];

// Написати функцію для динамічного виведення книг:
// 	•	Функція повинна перебирати масив книг і для кожної книги створювати HTML-елемент (наприклад, <div>, <p>) із відповідною інформацією.
// 	•	Виведені дані повинні включати назву книги, автора, рік видання та жанр.
function displayBooks(booksArray) {
  // Select the container
  const bookList = document.querySelector("#bookList");

  // Iterate over books and create elements
  booksArray.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    const bookTitle = document.createElement("h3");
    bookTitle.textContent = book.title;

    const bookDetails = document.createElement("p");
    bookDetails.textContent = `Author: ${book.author}, Year: ${book.year}, Genre: ${book.genre}`;

    // Append elements to bookDiv
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookDetails);

    // Append bookDiv to the container
    bookList.appendChild(bookDiv);
  });
}

// Display books on the page
displayBooks(books);
