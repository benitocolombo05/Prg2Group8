const db = require("../db/dataBase");
const productsController = {
    index: (req, res) => res.render("products.ejs"),
    add: (req, res) => res.render("product-add.ejs", { usuario: db.perfil.usuario }),


};


module.exports = productsController;

