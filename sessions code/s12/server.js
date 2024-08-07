const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const bookRouter = require("./routes/bookRoutes");
const userRouter = require("./routes/userRoutes");

dotenv.config();
const app = express();

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("Connected to the DB"));

// const book1 = new Book({ title: "book1", price: 100, author: "Ammar" });
// const book3 = new Book({ price: -100, author: "Ammar" });
// book3
//   .save()
//   .then(() => console.log("Book saved"))
//   .catch((err) => console.log(err));

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes
app.use("/api/books", bookRouter);
app.use("/api/users", userRouter);

const port = process.env.PORT || 4444;
app.listen(port, () => {
  console.log("Server running on port 4444");
});
