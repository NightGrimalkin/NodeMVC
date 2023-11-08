const express = require("express");
const session = require("express-session");
const mainPageRouter = express.Router();

const registrationRouter = require("./RegistrationRouter");
const loginRouter = require("./LoginRouter");
const cartRouter = require("./Cart");
const shopRouter = require("./ShopRouter");

mainPageRouter.use(loginRouter);
mainPageRouter.use(registrationRouter);
mainPageRouter.use(cartRouter);
mainPageRouter.use(shopRouter);

mainPageRouter.get("/", (req, res) => {
  if (req.session.items != undefined) {
    console.log(JSON.parse(req.session.items));
  }
  if (req.session.user_data != undefined) {
    const user = JSON.parse(req.session.user_data);
    console.log(user);
  }
  res.render("homePage.ejs");
});

module.exports = mainPageRouter;
