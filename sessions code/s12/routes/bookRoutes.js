const express = require("express");
const router = express.Router();

const bookController = require("../controllers/bookController");

const validateBook = (req, res, next) => {
  if (!req.body.title || !req.body.author || !req.body.price) {
    return res.status(400).json({
      status: "fail",
      message: "title, author and price are required!",
    });
  }

  next();
};

router
  .route("/")
  .get(bookController.getAllBooks)
  .post(validateBook, bookController.addBook);

router
  .route("/:id")
  .get(bookController.getBook)
  .delete(bookController.deleteBook)
  .patch(validateBook, bookController.updateBook);

module.exports = router;
