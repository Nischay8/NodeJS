const express = require("express");

const router = express.Router();
const {
  handelGetAllUser,
  getUserById,
  handelUpdateUserByid,
  handelDeleteUserById,
  handelCreateNewUser,
} = require("../controllers/user");

router.get("/", handelGetAllUser);

router.get("/:id", getUserById);

router.patch("/:id", handelUpdateUserByid);

router.delete("/:id", handelDeleteUserById);

router.post("/", handelCreateNewUser);

module.exports = router;
