const DB = require("../database/models")
const db = require("../db/dataBase");
const Op = DB.Sequelize.Op;


const productsController = {
    index: function (req, res) {
        console.log(req.params.id)
        DB.Product.findByPk(req.params.id, {
            include: [{
        model: DB.Comment,
        as: 'comentarios',
        include: [{ // incluye el usuario dentro de cada comentario
            model: DB.User,
            as: 'usuario'
        }]
    }, {
        model: DB.User,
        as: 'usuario' // este sería el usuario dueño del producto, si querés mostrarlo también
    }]
        })
        .then(function (producto) {
            return res.render('products.ejs', { productos: producto });
        });
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