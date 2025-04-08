const db = require("../db/dataBase");

const mainController = {
    index: (req, res) => res.render("index.ejs", {productos: db.productos}),
}

module.exports = mainController;