const userRouter = require("./routes/user");

const express = require("express");

const fs = require("fs");

const { connectMongoDb } = require("./connection");

const { logReqRes } = require("./middelwares/index");

// Connection

const app = express();

app.use(express.urlencoded({ extended: false }));

connectMongoDb();
app.use(logReqRes("log.txt"));

const PORT = 8000;

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log("Server is Started");
});
