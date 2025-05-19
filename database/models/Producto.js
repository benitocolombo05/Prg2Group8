module.exports = function (sequelize, dataTypes) {
    let alias = "Product";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        usuario_id: {
            type: dataTypes.INTEGER,
        },
        imagen: {
            type: dataTypes.STRING(255),
        },
        nombre: {
            type: dataTypes.STRING(255),
        },
        descripcion: {
            type: dataTypes.STRING(),
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
        tableName: "productos",
    }

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        
        Product.belongsTo(models.User, {        /// Cada producto está vinculado a un solo usuario (1:1 desde el lado del producto).
            as: "usuario",                     /// Un usuario puede tener muchos productos. (ahora hay que hacer la relacion en el modelo usuarios).
            foreignKey: "usuario_id"
        }); 
    
    }
    
        return Product;
}