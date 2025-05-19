module.exports = function (sequelize, dataTypes) {
    let alias = "Comment";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        producto_id: {
            type: dataTypes.INTEGER,
        },
        usuario_id: {
            type: dataTypes.INTEGER,
        },
        texto: {
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
        tableName: "comentarios",
    }

    let Comment = sequelize.define(alias, cols, config);
 
    Comment.associate = function(models) {
        
        Comment.belongsTo(models.Product, {     /// chicos: un comentario pertenece a un producto.
            as: "producto",
            foreignKey: "producto_id"
        });
        
        Comment.belongsTo(models.User, {
        as: "usuario",
        foreignKey: "usuario_id"
    });

    
    
    }
    
        return Comment;
}