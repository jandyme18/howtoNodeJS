const express = require('express');
const productsRouter = express.Router();
const products = require('../data/products.json');

productsRouter.route("/").get((req, res) => {
    res.render("products", { products });
});

productsRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    const product = products.find(p => p.id === id);
    if (product) {
        res.render("product", { product });
    } else {
        res.status(404).send('Product not found');
    }
});

module.exports = productsRouter;