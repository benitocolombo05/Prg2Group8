const DB = require("../database/models")
const db = require("../db/dataBase");

let Product = db.Product

const productsController = {
    index: (req, res) => res.render("products.ejs", {
        nombreProducto: db.productos[0].nombre,
        descripcionProducto: db.productos[0].descripcion,
        imagenProducto: db.productos[0].imagen,
        comentariosProducto: db.productos[0].comentarios,
        productos: db.productos

      
        
    }),

    add: (req, res) => res.render("product-add.ejs", { usuario: db.perfil.usuario }),

    buscar: (req, res) => res.render('search-results.ejs', 
        {productos: db.productos}
    ),


};


module.exports = productsController;

