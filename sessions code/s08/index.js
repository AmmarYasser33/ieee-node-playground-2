const books = [
  { id: 1, title: "book 1", author: "Ammar" },
  { id: 2, title: "book 2", author: "Omar" },
  { id: 3, title: "book 3", author: "Ammar" },
  { id: 4, title: "book 4", author: "Ahmed" },
  { id: 5, title: "book 5", author: "Ammar" },
];

// return all books - return book by id - delete book - update book - add book

const express = require("express");
const app = express();

// GET /books
app.get("/books", (req, res) => {
  res.status(200).json({
    status: "success",
    data: books,
  });

  // res.status(200).send(books);
});

// GET /books/id
app.get("/books/:id", (req, res) => {
  const id = req.params.id;

  const book = books.find((book) => book.id === +id);

  if (!book) {
    res.status(404).json({
      status: "fail",
      message: "Book not found",
    });
  }

  res.status(200).json({
    status: "success",
    data: book,
  });
});

app.listen(4444, () => {
  console.log("Server running on port 4444");
});
