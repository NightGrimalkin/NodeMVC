const mongoose = require("mongoose");
const Product = require("./../Models/Product");

mongoose.connect("mongodb://localhost:27017/OnlineShop");

const getProducts = async () => {
  try {
    const products = await Product.find().limit(20);
    return products;
  } catch (error) {
    console.log(error.message);
    return -1;
  }
};
const getProduct = async (name) => {
  try {
    const product = await Product.findOne({ name: name });
    return product;
  } catch (error) {
    console.log(error.message);
    return -1;
  }
};

module.exports = {getProducts, getProduct}