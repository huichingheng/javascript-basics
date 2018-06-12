var assertEquals = require("./assert-helper");

var books = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    isAvailable: true
  },
  {
    author: "JRR Tolkkien",
    title: "Lord of the Rings",
    isAvailable: true
  },
  {
    author: "JK Rowling",
    title: "Harry Potter",
    isAvailable: false
  }
];

/* 1. Define a function listTitles(booksArray) that takes in an array of book objects
       and returns an array of titles (strings) */
function listTitles(booksArray) {
  return booksArray.map(function(books) {
    return books.title
  })
}

// Assertions (do not change)
assertEquals(listTitles(books), ['The Road Ahead', 'Lord of the Rings', 'Harry Potter'])

/* 2. Define a function listAuthors(booksArray) that takes in an array of book objects
       and returns an array of authors (strings) */

function listAuthors(booksArray) {
  return booksArray.map(function(books) {
    return books.author
  })
}

// Assertions (do not change)
assertEquals(listAuthors(books), ['Bill Gates', 'JRR Tolkkien', 'JK Rowling'])

/* 3. Define a more general function listValues(booksArray, key) that takes in an array
       of book objects and returns an array of authors (strings) */

function listValues(booksArray, key) {
  const {author, title, isAvailable} = books;
    if (key === author) {
      return author;
    } else if (key === title) {
        return title;
      } else if (key === isAvailable) {
         return isAvailable;
      }
  }
  return booksArray.map(function(books,key) {
  return books.key
}


// Assertions (do not change)
assertEquals(listValues(books, 'author'), ['Bill Gates', 'JRR Tolkkien', 'JK Rowling'])
assertEquals(listValues(books, 'title'), ['The Road Ahead', 'Lord of the Rings', 'Harry Potter'])

// 4. Define a function getAvailableBooks(booksArray) that returns a list of available books

function getAvailableBooks(booksArray) {
  return booksArray.filter(function(books,isAvailable) {
    return isAvailable === true });
  return bookArray.map(function(books){
    return book.title 
  })

    }


// Assertions (do not change)
assertEquals(getAvailableBooks(books), ['The Road Ahead', 'Lord of the Rings'])
