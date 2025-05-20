const db = require("../db/dataBase");
const DB = require("../database/models")
const bcrypt = require("bcryptjs")

let User = db.User


const userController = {
    login: (req, res) => res.render('login.ejs'),

    register: (req, res) => res.render('register.ejs'),

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
        DB.User.create({
            email: req.body.email,
            nombre: req.body.usuario,
            fecha_nacimiento: req.body.fechaNacimiento,
            nro_documento: parseInt(req.body.nroDocumento),
            foto_perfil: req.body.fotoPerfil,
            contrasenia: bcrypt.hashSync(req.body.contrasenia, 10)
        })
            .then(function () {
                return res.redirect("/users/login");
            })
            .catch(function (error) {
                console.error("Error al crear el usuario:");

                // 1. Mostrar el mensaje general del error
                console.error("Mensaje:", error.message);

                // 2. Mostrar errores específicos de validación de Sequelize (si los hay)
                if (error.errors && error.errors.length > 0) {
                    error.errors.forEach((e, i) => {
                        console.error(` - Error ${i + 1}:`);
                        console.error(`   - Campo: ${e.path}`);
                        console.error(`   - Tipo: ${e.validatorKey}`);
                        console.error(`   - Mensaje: ${e.message}`);
                    });
                }

                // 3. Mandar respuesta útil al cliente
                res.status(500).send("Hubo un error al registrar el usuario. Revisá la consola para más detalles.");
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
            .catch(function(error) {
        console.error("Error en login:", error);
        res.status(500).send("hubo un error con la base de datos o el servidor");
    });
    }
}

module.exports = userController




