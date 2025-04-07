const db = {
    perfil: {
        email: "Agustin12@digitalhouse.com",
        usuario: "Agustin",
        contrasena: "password123",
        fechaNacimiento: "1990-01-01",
        nroDocumento: 12345678,
        fotoPerfil: "/images/products/images.png"
    },
    productos: [
        {
            id: 1,
            nombre: "Cafetera",
            descripcion: "Descubre el placer de un café perfecto con esta cafetera automática de alta gama. Su sistema de extracción de alta presión garantiza un sabor intenso y un aroma inigualable en cada taza. Con un diseño moderno y compacto, se adapta a cualquier cocina y permite preparar desde un espresso fuerte hasta un cappuccino cremoso gracias a su espumador de leche integrado. Su depósito de agua de gran capacidad evita recargas constantes y su compatibilidad con café molido y cápsulas ofrece mayor versatilidad. Disfruta de la calidad de una cafetería en la comodidad de tu hogar.",
            precio: 1000,
            imagen: "/images/products/img-cafetera-moulinex.jpg",
            comentarios: [
                {
                    usuario: "zapallo",
                    texto: "Excelente producto, muy recomendado!",
                    imagenPerfil: "/images/products/default-image.png"
                },
                {
                    usuario: "tecnonauta",
                    texto: "No era lo que esperaba, medio pelo.",
                    imagenPerfil: "/images/products/default-image.png"
                }
            ]
        },
        {
            id: 2,
            nombre: "Producto 2",
            descripcion: "Descripcion producto 2",
            precio: 1500,
            imagen: "/imagenes/products/default-image.png",
            comentarios: [
                {
                    usuario: "comprador3",
                    texto: "Gran producto!",
                    imagenPerfil: "/images/products/default-image.png"
                }
            ]
        },
        {
            id: 3,
            nombre: "Producto 3",
            descripcion: "Descripcion producto 3",
            precio: 1200,
            imagen: "/imagenes/products/default-image.png",
            comentarios: [{
                usuario: "comprador1",
                texto: "Excelente producto, muy recomendado!",
                imagenPerfil: "/images/products/default-image.png"
            },
            {
                usuario: "comprador2",
                texto: "No era lo que esperaba, medio pelo.",
                imagenPerfil: "/imagenes/products/default-image.png"
            }]
        },
        {
            id: 4,
            nombre: "Producto 4",
            descripcion: "Descripcion producto 4",
            precio: 1800,
            imagen: "/imagenes/products/default-image.png",
            comentarios: [{
                usuario: "comprador1",
                texto: "Excelente producto, muy recomendado!",
                imagenPerfil: "/imagenes/products/default-image.png"
            },
            {
                usuario: "comprador2",
                texto: "No era lo que esperaba, medio pelo.",
                imagenPerfil: "/imagenes/products/default-image.png"
            }]
        },
        {
            id: 5,
            nombre: "Producto 5",
            descripcion: "Descripcion producto 5",
            precio: 2200,
            imagen: "/imagenes/products/default-image.png",
            comentarios: [{
                usuario: "comprador1",
                texto: "Excelente producto, muy recomendado!",
                imagenPerfil: "/imagenes/products/default-image.png"
            },
            {
                usuario: "comprador2",
                texto: "No era lo que esperaba, medio pelo.",
                imagenPerfil: "/imagenes/products/default-image.png"
            }]
        },
        {
            id: 6,
            nombre: "Producto 6",
            descripcion: "Descripcion producto 6",
            precio: 2500,
            imagen: "/imagenes/products/default-image.png",
            comentarios: [{
                usuario: "comprador1",
                texto: "Excelente producto, muy recomendado!",
                imagenPerfil: "/imagenes/products/default-image.png"
            },
            {
                usuario: "comprador2",
                texto: "No era lo que esperaba, medio pelo.",
                imagenPerfil: "/imagenes/products/default-image.png"
            }]
        },
        {
            id: 7,
            nombre: "Producto 7",
            descripcion: "Descripcion producto 7",
            precio: 1300,
            imagen: "/imagenes/products/default-image.png",
            comentarios: [{
                usuario: "comprador1",
                texto: "Excelente producto, muy recomendado!",
                imagenPerfil: "/imagenes/products/default-image.png"
            },
            {
                usuario: "comprador2",
                texto: "No era lo que esperaba, medio pelo.",
                imagenPerfil: "/imagenes/products/default-image.png"
            }]
        },
        {
            id: 8,
            nombre: "Producto 8",
            descripcion: "Descripcion producto 8",
            precio: 1750,
            imagen: "/imagenes/products/default-image.png",
            comentarios: [{
                usuario: "comprador1",
                texto: "Excelente producto, muy recomendado!",
                imagenPerfil: "/imagenes/products/default-image.png"
            },
            {
                usuario: "comprador2",
                texto: "No era lo que esperaba, medio pelo.",
                imagenPerfil: "/imagenes/products/default-image.png"
            }]
        },
        {
            id: 9,
            nombre: "Producto 9",
            descripcion: "Descripcion producto 9",
            precio: 2000,
            imagen: "/imagenes/products/default-image.png",
            comentarios: [{
                usuario: "comprador1",
                texto: "Excelente producto, muy recomendado!",
                imagenPerfil: "/imagenes/products/default-image.png"
            },
            {
                usuario: "comprador2",
                texto: "No era lo que esperaba, medio pelo.",
                imagenPerfil: "/imagenes/products/default-image.png"
            }]
        },
        {
            id: 10,
            nombre: "Producto 10",
            descripcion: "Descripcion producto 10",
            precio: 2800,
            imagen: "/imagenes/products/default-image.png",
            comentarios: [{
                usuario: "comprador1",
                texto: "Excelente producto, muy recomendado!",
                imagenPerfil: "/imagenes/products/default-image.png"
            },
            {
                usuario: "comprador2",
                texto: "No era lo que esperaba, medio pelo.",
                imagenPerfil: "/imagenes/products/default-image.png"
            }]
        }
    ]
};

module.exports = db;
