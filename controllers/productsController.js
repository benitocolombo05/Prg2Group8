const DB = require("../database/models")

const Op = DB.Sequelize.Op;


const productsController = {
    index: function (req, res) {
        console.log(req.params.id)
        DB.Product.findByPk(req.params.id, {
            include: [{
                model: DB.Comment,
                as: "comentarios",
                include: [{
                    model: DB.User,
                    as: "usuario"
                }]
            }, {
                model: DB.User,
                as: "usuario"
            }]
        })
            .then(function (producto) {
                return res.render('products.ejs', { productos: producto });
            });
    },

    add: function (req, res) {
        return res.render("product-add")
    },
    productProcessor: function (req, res) {
        DB.Product.create({
            usuario_id: req.session.user.id,
            imagen: req.body.img,
            nombre: req.body.prodName,
            descripcion: req.body.description,
        })
        .then(function (prodCreado) {
                if (prodCreado) {
                    return res.redirect("/users/myprofile");
                }
            })
            .catch(function (error) {
                console.error(error);
            });
    },

    buscar: function (req, res) {
        DB.Product.findAll({
            where: [
                {
                    nombre: { [Op.like]: `%${req.query.search}%` }
                }],
            include: [{
                model: DB.Comment,
                as: "comentarios"
            }, {
                model: DB.User,
                as: "usuario"
            }],

        })
            .then(function (productos) {
                return res.render('search-results.ejs', { productos: productos });
            })
    }
};


module.exports = productsController;