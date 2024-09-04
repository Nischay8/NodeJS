const http = require("http");
const fs = require("fs");

const url = require("url");
const express = require("express");
const exp = require("constants");

const app = express();
const myserver = http.createServer(app);

app.get("/", (req, res) => {
  return res.send("Hello From HomePage");
});

app.get("/about", (req, res) => {
  return res.send("Hello From About Page");
});

// fs.appendFile("log.txt", log, (err, data) => {
//   switch (myurl.pathname) {
//     case "/":
//       res.end("Homepage");
//       break;
//     case "/about":
//       const qp = myurl.query.name;
//       res.end(`Hi ${qp}`);
//       break;
//     default:
//       res.end("404 Not Found");
//   }
// });
// });

myserver.listen(8000, () => {
  console.log("Server is Started");
});
