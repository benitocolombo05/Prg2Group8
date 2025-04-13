const db = require("../db/dataBase");
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
        
    
}

module.exports = userController





