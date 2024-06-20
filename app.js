const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const productsRouter = express.Router();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined')); //ไว้ดู log รายละเอียดว่าเข้าจากเครื่องไหน
app.use(express.static(path.join(__dirname, '/public/')));

app.set("views", "./src/views")
app.set("view engine", "ejs")


productsRouter.route("/").get((req, res) => {
    res.render("products");
});


// productsRouter.route("/").get((req, res) => {
//     res.render("products"),{
//         products: [
//             {productTitle: 'Dish soap', productDescription: 'Formulation 1 Super Clean Dish Soap', productPrice: '45'},
//             {productTitle: 'Dish soap 2', productDescription: 'Formulation 2 Super Clean Dish Soap', productPrice: '65'},
//             {productTitle: 'Dish soap 3', productDescription: 'Formulation 3 Super Clean Dish Soap', productPrice: '35'},
//             {productTitle: 'Dish soap 4', productDescription: 'Formulation 4 Super Clean Dish Soap', productPrice: '55'}
//         ],
//     }
// });

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