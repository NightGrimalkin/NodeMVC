const express = require("express");
const loginRouter = express.Router();
const loginService = require("../ControllerService/LoginService");

loginRouter.get("/login", (req, res) => {
  res.render("login.ejs");
});

loginRouter.post("/login/auth", async (req, res) => {
  await loginService.loginUser(req,res);
});
loginRouter.get('/logout',(req,res)=>{
  loginService.logoutUser(req,res);
})

module.exports = loginRouter;
