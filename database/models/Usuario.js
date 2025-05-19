module.exports = function (sequelize, dataTypes) {
    let alias = "User";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        email: {
            type: dataTypes.STRING(255),
        },
        contrasenia: {
            type: dataTypes.STRING(255),
        },
        fecha_nacimiento: {
            type: dataTypes.DATE,
        },
        nro_documento: {
            type: dataTypes.INTEGER,
        },
        foto_perfil: {
            type: dataTypes.STRING(255),
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        deletedAt: {
            type: dataTypes.DATE,
        }
    }

    let config = {
        tableName: "usuarios",
    }

    let User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        
        User.hasMany(models.Product, {        
            as: "productos",                    
            foreignKey: "usuario_id"
        }); 
    
        User.hasMany(models.Comment, {
            as: "comentarios",
            foreignKey: "usuario_id"
        });
    }
        return User;
}