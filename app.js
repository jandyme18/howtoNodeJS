const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const products = require('./data/products.json');
const productsRouter = express.Router();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined')); //ไว้ดู log รายละเอียดว่าเข้าจากเครื่องไหน
app.use(express.static(path.join(__dirname, '/public/')));

app.set("views", "./src/views")
app.set("view engine", "ejs")

productsRouter.route("/").get((req, res) => {
    res.render("products",{
        products,
    });
});

productsRouter.route("/").get((req, res) => {
    res.send("Products are here");
});

app.use("/products", productsRouter);

app.get("/", (req, res) => {
    res.render('index', { username: 'jandyme18', customers: ["Catareen", "Tasia", "Frongz"] });
})

app.listen(PORT, () => {
    debug("listening on port" + chalk.red(": " + PORT));
})