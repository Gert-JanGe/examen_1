const book1 = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 218,
  isAvailable: true,
};

const book2 = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  pages: 281,
  isAvailable: false,
};

const book3 = {
  title: "1984",
  author: "George Orwell",
  pages: 328,
  isAvailable: true,
}

function borrowBook(book, borrower) {
  if (book.isAvailable) {
    book.isAvailable = false;
    return `${borrower} heeft "${book.title}" geleend.`;
  } else {
    return `"${book.title}" is momenteel niet beschikbaar.`;
  }
}

function returnBook(book) {
  book.isAvailable = true;
  return `"${book.title}" is teruggebracht en nu weer beschikbaar.`;
}

function bookSummary(book) {
  return `${book.title} geschreven door ${book.author}, ${book.pages} pagina's. Beschikbaar: ${book.isAvailable ? 'Ja' : 'Nee'}`;
}

function getAvailableBooks(books) {
  return books.filter(book => book.isAvailable);
}

// Testcode
console.log(bookSummary(book1));
console.log(borrowBook(book1, 'Alice'));
console.log(bookSummary(book2));
console.log(returnBook(book1));
console.log(bookSummary(book3));
console.log(getAvailableBooks([book1, book2, book3]));
