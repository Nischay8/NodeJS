const { getUser } = require("../service/auth");

async function restrictToLoggedinUserOnly(req, res, next) {
  const userId = req.cookies.uid;

  if (!userId) return res.redirect("/signin");

  const user = getUser(userId);

  if (!user) return res.redirect("/signin");

  req.user = user;
  next();
}

module.exports = {
  restrictToLoggedinUserOnly,
};
