// const fileSystemModule = require("fs");
// fileSystemModule.writeFile("test.txt", "blaaaaaaaaaaaaaaaa", () => {});

// const slugify = require("slugify");
// // hello world --> hello-world
// const slug = slugify("عمار ياسر");
// console.log(slug);

const express = require("express");
const app = express();

//  /maps   http method --> GET
app.get("/maps", (req, res) => {
  // ..............
  // req.body

  res.status(200).send("maps found");
});

////

app.get("/products", (req, res) => {
  const data = {
    products: ["prod1", "prod1"],
  };

  res.status(200).json(data);
});

//  http://localhost:4444/maps
//  http://127.0.0.1:4444/products

app.listen(4444, "127.0.0.1", () => {
  console.log("server run on port 4444");
});
