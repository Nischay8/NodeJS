const express = require("express");
const path = require("path");
const { connectToMongoDB } = require("./connect");
const app = express();
const urls = require("./models/url");
const PORT = 8001;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const urlRoute = require("./routes/url");
4;

const staticRoute = require("./routes/statisRouter");

app.use("/url", urlRoute);

app.use("/", staticRoute);

app.get("/url/:shorid", async (req, res) => {
  const shorid = req.params.shorid;
  const entry = await urls.findOne({ shortId: shorid });
 
    res.redirect('https://' + entry.redirectURL)
});

connectToMongoDB("mongodb://localhost:27017/shorturl")
  .then(() => {
    console.log("DataBase is Connected");
  })
  .catch((err) => {
    console.log("Erro While Making Connection to MongoDb", err);
  });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.listen(PORT, () => {
  console.log("Server is Started at POrt", PORT);
});
