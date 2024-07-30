const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

const bookController = require("./bookController");
const userController = require("./userController");

dotenv.config();
const app = express();

// built-in middleware
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use((req, res, next) => {
  console.log("Middleware func.");
  next();
});

app.use((req, res, next) => {
  req.programmer = "Ammar";
  console.log("add coder to req");

  next();
});

const validateBook = (req, res, next) => {
  if (!req.body.title || !req.body.author || !req.body.price) {
    return res.status(400).json({
      status: "fail",
      message: "title, author and price are required!",
    });
  }

  next();
};

app.param("id", (req, res, next, val) => {
  console.log(`param id is: ${val}`);

  next();
});

// books routes
app
  .route("/api/books")
  .get(bookController.getAllBooks)
  .post(validateBook, bookController.addBook);

app
  .route("/api/books/:id")
  .get(bookController.getBook)
  .delete(bookController.deleteBook)
  .patch(validateBook, bookController.updateBook);

// users routes
app
  .route("/api/users")
  .get(userController.getAllUsers)
  .post(userController.addUser);

app
  .route("/api/users/:id")
  .get(userController.getUser)
  .delete(userController.deleteUser)
  .patch(userController.updateUser);

const port = process.env.PORT || 4444;
app.listen(port, () => {
  console.log("Server running on port 4444");
});
