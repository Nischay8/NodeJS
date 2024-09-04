const User = require("../models/user");

async function handelGetAllUser(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}

async function getUserById(req, res) {
  const Users = await User.findById(req.params.id);
  if (!Users) return res.status(404).json({ error: "User not Found" });
  res.json(Users);
}

async function handelUpdateUserByid(req, res) {
  await User.findByIdAndUpdate(req.params.id, { lastName: "Updated" });
  return res.json({ message: "Success" });
}

async function handelDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({
    message: "Success",
  });
}

async function handelCreateNewUser(req, res) {
  const body = req.body;
  console.log(body);
  const result = await User.create({
    first_name: body.first_name,
    lastName: body.last_name,
    email: body.email,
    job_title: body.job_title,
    gender: body.gender,
  });
  console.log(result);
  return res.status(201).json({ msg: "Success", id: result._id });
}

module.exports = {
  handelGetAllUser,
  getUserById,
  handelUpdateUserByid,
  handelDeleteUserById,
  handelCreateNewUser,
};
