const express = require("express");
const shopRouter = express.Router();
const shopService = require("../ControllerService/ShopService");

shopRouter.get("/shop", async (req, res) => {
  await shopService.displayProducts(req, res);
});

module.exports = shopRouter;
