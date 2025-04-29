const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const cartController = require('../controllers/cartController');

router.get('/new', productsController.getAddProduct);
router.post('/new', productsController.postAddProduct);
router.get('/', productsController.getAllProducts);
router.post('/add', cartController.addProductToCart);

module.exports = router;
