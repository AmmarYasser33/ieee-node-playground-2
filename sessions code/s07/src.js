// function sayHello(name) {
//   console.log(`Hi, ${name}`);
// }

// sayHello("Ammar");

// const os = require("os");

// console.log("free mem: ", os.freemem());
// console.log("total mem: ", os.totalmem());

/*
const fs = require("fs/promises");

console.log("strat");

// const textOutput = fs.readFileSync("./text.txt", "utf8");
// console.log(textOutput);

fs.readFile("./text.txt", "utf8", (err, data) => {
  console.log(data);
});

console.log("end");
*/

/*
const fs = require("fs/promises");

// fs.readFile("./text.txt", "utf8")
//   .then((content) => {
//     console.log(`file content: ${content}`);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// Async/Await
async function readFile() {
  try {
    const content = await fs.readFile("./text.txt", "utf8");
    console.log(`file content: ${content}`);
  } catch (err) {
    console.log(err.message);
  }
}

readFile();
*/

/*
// Hello World --> hello-world
// بناء منزل --> benaa-manzel

const slugify = require("slugify");

const out = slugify("بناء منزل");
console.log(out);
*/

const http = require("http");

const server = http.createServer((req, res) => {
  const path = req.url;

  if (path === "/") res.write("Home page");
  else if (path === "/products") res.write("Products.....");
  else {
    res.statusCode = 404;
    res.write("Page not found");
  }

  res.end();
});

server.listen(8080, () => {
  console.log("Server on port 8080");
});
