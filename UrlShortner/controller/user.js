const User = require("../models/user");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../service/auth");
async function handelUserSignUp(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.render("/");
}

async function handelUserLogin(req, res) {
  const { email, password } = req.body;
  const loginuser = await User.findOne({ email, password });
  console.log(loginuser);
  if (!loginuser)
    return res.render("login", {
      error: "Invalid Username or Password",
    });

  const token = setUser(loginuser);
  res.cookie("uid", token);
  return res.redirect("/");
}

module.exports = {
  handelUserSignUp,
  handelUserLogin,
};
