const express = require("express");

const app = express();

app.get("/", (req, res) => {
  //   res.end("Hello from Server");
  res.cookie("name", "nischay");
  res.send("Done");
});


app.get("/read", (req, res) => {
    //   res.end("Hello from Server");
    res.send("read router")
  });

app.listen("8000", () => {
  console.log("Server is Running in 8000");
});
