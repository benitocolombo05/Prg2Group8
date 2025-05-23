const db = require("../db/dataBase");
const DB = require("../database/models")


const mainController = {
    index: function (req, res) {
        DB.Product.findAll({
            include: [{
            model: DB.Comment,
            as: 'comentarios' 
            },
            {
                model: DB.User,
                as: 'usuario'
            }],
            
        })
            .then(function (productos) {
                return res.render('index.ejs', { productos: productos });
            })
    }
}

module.exports = mainController;