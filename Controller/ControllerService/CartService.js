const session = require("express-session");
const productService = require("../../Model/ModelService/ProductService");

const addProductToCart = async (req, res) => {
  const productName = req.body.productName;
  const product = await productService.getProduct(productName);
  if (req.session.items == undefined) {
    req.session.items = JSON.stringify([product]);
    res.send("ok");
  } else {
    const products = JSON.parse(req.session.items);
    const filtered = products.filter((e) => e.name === product.name);
    if (filtered.length > 0) {
      res.send("ok");
    } else {
      products.push(product);
      req.session.items = JSON.stringify(products);
      res.send("ok");
    }
  }
};

const displayCart = (req, res) => {
  if (req.session.items != undefined) {
    const products = JSON.parse(req.session.items);
    let price = 0;
    products.forEach((element) => {
      price += parseInt(element.price);
    });
    res.render("cart.ejs", { products: products, price: price });
  } else {
    res.send("brak przedmiotów w koszyku");
  }
};

module.exports = { addProductToCart, displayCart };
