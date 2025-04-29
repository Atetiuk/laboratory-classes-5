const Product = require('../models/Product');
const Cart = require('../models/cart');

exports.getAddProduct = (req, res) => {
  res.render('add-product', {
    headTitle: 'Add Product',   
    cartCount: Cart.getProductsQuantity(),
    menuLinks: [
      { path: '/products', label: 'Products' },
      { path: '/products/new', label: 'Add Product' }
    ],
    activeLinkPath: '/products/new'
  });
};

exports.postAddProduct = (req, res) => {
  const { name, description, price } = req.body;
  const newProduct = new Product(name, description, parseFloat(price));
  Product.add(newProduct);
  res.redirect('/products/new');
};

exports.getAllProducts = (req, res) => {
  const products = Product.getAll();
  res.render('products', { products, cartCount: Cart.getProductsQuantity() });
};
