const express = require("express");
const cartRouter = express.Router();
const cartService = require("../ControllerService/CartService");

cartRouter.get("/cart", (req, res) => {
  cartService.displayCart(req, res);
});

cartRouter.post("/cart/add", async (req, res) => {
  await cartService.addProductToCart(req, res);
});

module.exports = cartRouter;
