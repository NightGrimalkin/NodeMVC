const express = require("express");
const registrationRouter = express.Router();
const registrationService = require("../ControllerService/RegistrationService");

registrationRouter.get("/registration", (req, res) => {
  res.render("registrationPage.ejs");
});

registrationRouter.post("/registration/auth", async (req, res) => {
    await registrationService.registerUser(req,res)
});

module.exports = registrationRouter;
