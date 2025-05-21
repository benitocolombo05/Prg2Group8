const DB = require("../database/models")
const db = require("../db/dataBase");
const Op = DB.Sequelize.Op;


const productsController = {
    index: function (req, res) {
        return res.render("products.ejs", {
            nombreProducto: db.productos[0].nombre,
            descripcionProducto: db.productos[0].descripcion,
            imagenProducto: db.productos[0].imagen,
            comentariosProducto: db.productos[0].comentarios,
            productos: db.productos
        })
    },

    add: (req, res) => res.render("product-add.ejs", { usuario: db.perfil.usuario }),

    buscar: function (req, res) {
        DB.Product.findAll({
            where: [
                { nombre: { [Op.like]: `%${req.query.search}%` } 
            }],
            include: [{
            model: DB.Comment,
            as: 'comentarios' 
            },{
                model: DB.User,
                as: 'usuario'
            }],
            
        })
            .then(function (productos) {
                return res.render('search-results.ejs', { productos: productos });
            })
    }
};


module.exports = productsController;