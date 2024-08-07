const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book must have a title"],
    unique: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be positive"],
  },
  author: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
