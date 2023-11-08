const productService = require("../../Model/ModelService/ProductService");

const displayProducts = async (req, res) => {
  const products = await productService.getProducts();
  res.render("shop.ejs", { products: products });
};

module.exports = { displayProducts };
