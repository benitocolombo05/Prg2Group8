const db = require("../db/dataBase");
const DB = require("../database/models")
const bcrypt = require("bcryptjs")



const userController = {
    login: function (req, res) {
        if (req.session.user != undefined){
            return res.redirect("/users/myprofile")
        } else {
            return res.render("login", { error: null })
        }
    
    
    },
    register: function (req, res) {
        if (req.session.user != undefined){
            return res.redirect("/users/myprofile")
        } else {
            return res.render("register", { error: null })
        }
    
    
    },
    
    myprofile: function (req, res) {
        DB.User.findByPk(req.session.user.id, {
            include: [{
                model: DB.Product,
                as: "productos",
            },
            {
                model: DB.Comment,
                as: "comentarios"
            }]
        })
            .then(function (user) {
                return res.render('profile', { usuario: user });
            });
    },
    profile: function (req, res) {
        DB.User.findByPk(req.params.id, {
            include: [{
                model: DB.Product,
                as: "productos",
            },
            {
                model: DB.Comment,
                as: "comentarios"
            }]
        })
            .then(function (user) {
                return res.render('profile', { usuario: user });
            });
    },


    pruebaDatabase: (req, res) => {
        DB.User.findAll()
            .then(productos => {
                res.send(productos);
            })
            .catch(error => {
                res.send('Error: ' + error);
            });
    },
    registerProcessor: function (req, res) {
        if (!req.body.usuario) {
            return res.render("register", { error: "El usuario es obligatorio" })
        }

        if (!req.body.email) {
            return res.render("register", { error: "El email es obligatorio" })
        }

        if (!req.body.contrasenia || req.body.contrasenia.length < 3) {
            return res.render("register", { error: "La contraseña debe tener al menos 3 caracteres" })
        }
        DB.User.findOne({
            where: { email: req.body.email }
        })
            .then(function (usuarioExistente) {
                if (usuarioExistente) {
                    return res.render("register", { error: "Email existente." })
                }
                else {
                    return DB.User.create({
                        email: req.body.email,
                        nombre: req.body.usuario,
                        fecha_nacimiento: req.body.fechaNacimiento,
                        nro_documento: parseInt(req.body.nroDocumento),
                        foto_perfil: req.body.fotoPerfil,
                        contrasenia: bcrypt.hashSync(req.body.contrasenia, 10)
                    })
                }
            })

            .then(function (usuarioCreado) {
                if (usuarioCreado) {
                    return res.redirect("/users/login");
                }
            })
            .catch(function (error) {
                console.error(error);
            });
    },
    loginProcessor: function (req, res) {
        DB.User.findOne({
            where: { email: req.body.usuario }
        })
            .then(function (user) {
                if (!user) {
                    return res.render("login", { error: "Email incorrecto" })
                }

                let check = bcrypt.compareSync(req.body.contrasenia, user.contrasenia);

                if (!check) {
                    return res.render("login", { error: "Contraseña incorrecta" })
                }
                req.session.user = {
                    id: user.id,
                    email: user.email,
                    usuario: user.nombre,
                }
                if ((check) && (req.body.recordarme)) {
                    res.cookie('usuario', {
                        id: user.id,
                        email: user.email,
                        usuario: user.nombre
                    }, { maxAge: 1000 * 60 * 2 })

                }

                return res.redirect("/");
            })
            .catch(function (error) {
                console.error(error);
            });
    },
    logout: function (req, res) {
        req.session.destroy(),
            res.clearCookie("usuario")
        res.redirect("/")


    }
}


module.exports = userController




