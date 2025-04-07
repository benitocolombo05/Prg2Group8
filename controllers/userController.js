const db = require("../db/dataBase");
const userController = {
    login: (req, res) => res.render('login.ejs'),
    register: (req, res) => res.render('register.ejs'),
    profile: (req, res) => res.render('profile.ejs', { usuario: db.perfil.usuario, 
        correo: db.perfil.email, 
        foto: db.perfil.fotoPerfil }),
    buscar: (req, res) => res.render('search-results.ejs'),
}

module.exports = userController





