const db = require("../db/dataBase");
const DB = require("../database/models")

let User = db.User


const userController = {
    login: (req, res) => res.render('login.ejs'),

    register: (req, res) => res.render('register.ejs'),

    profile: (req, res) => res.render('profile.ejs', { usuario: db.perfil.usuario, 
        correo: db.perfil.email, 
        foto: db.perfil.fotoPerfil,
        nombreProducto: db.productos[0].nombre,
        descripcionProducto: db.productos[0].descripcion,
       imagenProducto: db.productos[0].imagen,
       comentariosProducto: db.productos[0].comentarios,
       productos: db.productos}),
        
       prueba: (req, res) => {
        DB.Product.findAll()
            .then(productos => {
                res.send(productos); 
            })
            .catch(error => {
                res.send('Error: ' + error);
            });
    }
}

module.exports = userController





