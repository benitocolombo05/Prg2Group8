const db = {
    perfil: {
        id: 1,
        email: "Agustin12@digitalhouse.com",
        usuario: "Jose Maria ",
        contrasena: "password123",
        fechaNacimiento: "1990-01-01",
        nroDocumento: 12345678,
        fotoPerfil: "/images/users/sopa.jpeg"
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
                    usuario: "Tung",
                    texto: "Excelente producto, muy recomendado!",
                    imagenPerfil: "/images/users/TungTungTungSahur.webp"
                },
                {
                    usuario: "Martin",
                    texto: "No era lo que esperaba, medio pelo.",
                    imagenPerfil: "/images/users/images.jpeg"
                },
                {
                    usuario: "Benito",
                    texto: "Me encantó, superó mis expectativas.",
                    imagenPerfil: "/images/users/dybala.jpg"
                },
                {
                    usuario: "Tomas",
                    texto: "Buena calidad por el precio.",
                    imagenPerfil: "/images/users/ronaldo.jpg"
                },
                {
                    usuario: "Emilio",
                    texto: "Lo volvería a comprar sin dudas.",
                    imagenPerfil: "/images/users/dino.png"
                },
                {
                    usuario: "Agustina",
                    texto: "El diseño es hermoso, tal como en la foto.",
                    imagenPerfil: "/images/users/tini.webp"
                },
                {
                    usuario: "Francisca",
                    texto: "Tuve un problema y lo resolvieron al toque.",
                    imagenPerfil: "/images/users/taylor.jpeg"
                },
                {
                    usuario: "Juan",
                    texto: "Ideal para regalar, a todos les gustó.",
                    imagenPerfil: "/images/users/ricky.jpg"
                }, {
                    usuario: "Tomas",
                    texto: "Cumple con lo prometido, lo recomiendo.",
                    imagenPerfil: "/images/users/sopa.jpeg"
                },
            ]
        },
        {
            id: 2,
            nombre: "Olla arrocera",
            descripcion: "Olla arrocera automática con función de mantenimiento de calor, ideal para preparar arroz perfecto sin esfuerzo. Compacta, segura y fácil de usar todos los días.",
            precio: 1500,
            imagen: "/images/products/Olladearroz.jpeg",
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
            nombre: "Olla Essen",
            descripcion: "Olla de aluminio fundido con recubrimiento antiadherente que conserva el calor y cocina de manera uniforme, permitiendo preparar comidas saludables con menos grasa y energía.",
            precio: 1200,
            imagen: "/images/products/Cacerola.jpg",
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
            nombre: "Air fryer",
            descripcion: "Freidora de aire que cocina con poco o nada de aceite, logrando alimentos crujientes y saludables mediante circulación de aire caliente, perfecta para freír, hornear y asar.",
            precio: 1800,
            imagen: "/images/products/airfry.webp",
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
            nombre: "Horno",
            descripcion: "Horno eléctrico de alta eficiencia con múltiples modos de cocción, ideal para preparar desde pizzas hasta pasteles con una cocción uniforme y precisa.",
            precio: 2200,
            imagen: "/images/products/hornux.jpg",
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
            nombre: "Microondas",
            descripcion: "Microondas digital con funciones automáticas, grill y descongelado inteligente. Diseño compacto y moderno, ideal para cualquier cocina.",
            precio: 2500,
            imagen: "/images/products/microondas.jpg",
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
            nombre: "Thermomix",
            descripcion: "Robot de cocina todo en uno que tritura, cuece, mezcla y pesa con gran precisión. Ideal para ahorrar tiempo y cocinar sin esfuerzo.",
            precio: 1300,
            imagen: "/images/products/tostadora.jpeg",
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
            nombre: "Minipimer",
            descripcion: "Batidora de mano potente y ergonómica con múltiples accesorios. Perfecta para preparar sopas, salsas, licuados y más con facilidad.",
            precio: 1750,
            imagen: "/images/products/minipi.jpg",
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
            nombre: "Olla",
            descripcion: "Olla de gran capacidad, fabricada en acero inoxidable, ideal para cocinar guisos, pastas o caldos de forma práctica y eficiente.",
            precio: 2000,
            imagen: "/images/products/olla.jpeg.jpeg",
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
            nombre: "Heladera",
            descripcion: "Heladera con amplio espacio interior, sistema de enfriamiento eficiente y diseño moderno que se adapta a cualquier cocina.",
            precio: 2800,
            imagen: "/images/products/heladera.jpeg.jpeg",
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
        ,{
            id: 11,
            nombre: "Tostadora industrial",
            descripcion: "Tostadora industrial de alta calidad y tostado parejo para buenos sanguches.",
            precio: 2800,
            imagen: "/images/products/tostadorapro.jpg",
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
            id: 12,
            nombre: "Lavavajillas",
            descripcion: "Lava platos premium de alta eficiencia y lavado rapido para todo tipo de vajilla",
            precio: 2800,
            imagen: "/images/products/lavador.webp",
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
        
    ]
};

module.exports = db;