const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('combined')); //ไว้ดู log รายละเอียดว่าเข้าจากเครื่องไหน
app.use(express.static(path.join(__dirname, '/public/')))

app.get("/", (req,res) => {
    res.send('Hello, Jandy Nat!');
})

app.listen(port, () => {
    debug("listening on port" + chalk.red(": " + port));
})