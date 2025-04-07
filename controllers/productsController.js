const db = require("../db/dataBase");
const productsController = {
    index: (req, res) => res.render("products.ejs", {nombreProducto: db.productos[0].nombre,
         descripcionProducto: db.productos[0].descripcion,
        imagenProducto: db.productos[0].imagen,
        comentariosProducto: db.productos[0].comentarios}),

    add: (req, res) => res.render("product-add.ejs", { usuario: db.perfil.usuario }),


};


module.exports = productsController;

