const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");
const { MENU_LINKS } = require("../constants/navigation");

router.get("/", (req, res) => {
  res.render("home", {
    headTitle: "Home",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/",
    cartCount: Cart.getProductsQuantity()
  });
});

module.exports = router;
