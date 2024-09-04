const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  job_title: {
    type: String,
  },
  gender: {
    type: String,
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
