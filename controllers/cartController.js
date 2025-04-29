const Product = require('../models/Product');
const Cart = require('../models/cart');

exports.addProductToCart = (req, res) => {
  const { name } = req.body;

  try {
    Product.add({ name });
    Cart.add(name);
    res.redirect('/products/new');
  } catch (err) {
    res.status(404).send('Product not found');
  }
};

exports.getProductsCount = (req, res) => {
  res.json({ count: Cart.getProductsQuantity() });
};
