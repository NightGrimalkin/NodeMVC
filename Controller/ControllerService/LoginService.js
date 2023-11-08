const bcrypt = require("bcrypt");
const userService = require("../../Model/ModelService/UserService");

const loginUser = async (req, res) => {
  const user = await userService.getUser(req.body.login);
  if (await bcrypt.compare(req.body.password, user.password)) {
    req.session.logged_in = true;
    req.session.user_data = JSON.stringify(user);
    res.cookie("last_login", Date.now(), { maxAge: 900000 });
    res.redirect("/");
  } else {
    req.session.logged_in = false;
    res.redirect("/login");
  }
};

const logoutUser = (req, res) => {
  req.session.logged_in = false;
  req.session.user_data = JSON.stringify("");
  res.redirect("/");
};

module.exports = { loginUser, logoutUser };
