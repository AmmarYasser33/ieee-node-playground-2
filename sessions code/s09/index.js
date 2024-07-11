const bookController = require("./bookController");

const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/books", bookController.getAllBooks);
app.get("/api/books/:id", bookController.getBook);
app.post("/api/books", bookController.addBook);
app.delete("/api/books/:id", bookController.deleteBook);
app.patch("/api/books/:id", bookController.updateBook);

const port = 4444;
app.listen(port, () => {
  console.log("Server running on port 4444");
});

/*
const mathModule = require("./mathOp");

const result = mathModule.add(7, 3);
console.log(result);

mathModule.PI * 3;
*/

// TASK
// 5 routes ---> /users

const users = [
  { id: 1, name: "Ammar Yasser", email: "ammar@me.io" },
  { id: 2, name: "Omar Yasser", email: "omar@me.io" },
  { id: 3, name: "Mai Yasser", email: "mai@me.io" },
];
