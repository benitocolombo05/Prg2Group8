const db = require("../db/dataBase");
const DB = require("../database/models")
const bcrypt = require("bcryptjs")

let User = db.User


const userController = {
    login: (req, res) => res.render('login.ejs'),

    register: (req, res) => res.render('register.ejs', { error: null }),

    profile: (req, res) => res.render('profile.ejs', {
        usuario: db.perfil.usuario,
        correo: db.perfil.email,
        foto: db.perfil.fotoPerfil,
        nombreProducto: db.productos[0].nombre,
        descripcionProducto: db.productos[0].descripcion,
        imagenProducto: db.productos[0].imagen,
        comentariosProducto: db.productos[0].comentarios,
        productos: db.productos
    }),

    prueba: (req, res) => {
        DB.User.findAll()
            .then(productos => {
                res.send(productos);
            })
            .catch(error => {
                res.send('Error: ' + error);
            });
    },
    registerProcessor: function (req, res) {
        // Procesar el formulario y guardar el nuevo usuario
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
                    return res.send("email inexistente");
                }

                let check = bcrypt.compareSync(req.body.contrasenia, user.contrasenia);

                if (!check) {
                    return res.send("pusiste mal la contraseña zapallo");
                }

                return res.redirect("/");
            })
            .catch(function (error) {
                console.error(error);
            });
    }
}

module.exports = userController




