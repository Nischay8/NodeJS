const mongoose = require("mongoose");

async function connectMongoDb() {
  return mongoose
    .connect("mongodb://localhost:27017/youtube-app-1")
    .then(() => console.log("MongoDb Connected"))
    .catch((err) => console.log("Mongo Erro"));
}

module.exports = {
  connectMongoDb,
};
