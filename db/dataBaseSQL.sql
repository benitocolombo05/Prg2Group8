CREATE DATABASE mi_base_de_datos_final;
USE mi_base_de_datos_final;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    contrasenia VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    nro_documento INT NOT NULL UNIQUE,
    foto_perfil VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    imagen VARCHAR(255) NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT NOT NULL,
    usuario_id INT NOT NULL,
    texto TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (producto_id) REFERENCES productos(id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

INSERT INTO usuarios (email, contrasenia, fecha_nacimiento, nro_documento, foto_perfil) VALUES
('Agustin12@digitalhouse.com', 'password123', '1990-01-01', 12345678, '/images/users/sopa.jpeg'),
('tung@mail.com', 'clave123', '1991-02-02', 22345678, '/images/users/TungTungTungSahur.webp'),
('martin@mail.com', 'clave123', '1992-03-03', 32345678, '/images/users/images.jpeg'),
('benito@mail.com', 'clave123', '1993-04-04', 42345678, '/images/users/dybala.jpg'),
('tomas@mail.com', 'clave123', '1994-05-05', 52345678, '/images/users/ronaldo.jpg'),
('emilio@mail.com', 'clave123', '1995-06-06', 62345678, '/images/users/dino.png'),
('agustina@mail.com', 'clave123', '1996-07-07', 72345678, '/images/users/tini.webp'),
('francisca@mail.com', 'clave123', '1997-08-08', 82345678, '/images/users/taylor.jpeg'),
('juan@mail.com', 'clave123', '1998-09-09', 92345678, '/images/users/ricky.jpg');

INSERT INTO productos (usuario_id, imagen, nombre, descripcion) VALUES
(1, '/images/products/img-cafetera-moulinex.jpg', 'Cafetera', 'Descubre el placer de un café perfecto con esta cafetera automática de alta gama...'),
(1, '/images/products/airfry.webp', 'Thermomix', 'Robot de cocina multifuncional que mezcla, tritura, cocina al vapor...'),
(1, '/images/products/Cacerola.jpg', 'Olla Essen', 'Olla de aluminio fundido con recubrimiento antiadherente...'),
(1, '/images/products/download.jpeg', 'Air fyer', 'Freidora de aire que cocina con poco o nada de aceite...'),
(1, '/imagenes/products/default-image.png', 'Producto 5', 'Descripcion producto 5'),
(1, '/imagenes/products/default-image.png', 'Producto 6', 'Descripcion producto 6'),
(1, '/imagenes/products/default-image.png', 'Producto 7', 'Descripcion producto 7'),
(1, '/imagenes/products/default-image.png', 'Producto 8', 'Descripcion producto 8'),
(1, '/imagenes/products/default-image.png', 'Producto 9', 'Descripcion producto 9'),
(1, '/imagenes/products/default-image.png', 'Producto 10', 'Descripcion producto 10');

INSERT INTO comentarios (producto_id, usuario_id, texto) VALUES
(1, 2, 'Excelente producto, muy recomendado!'),
(1, 3, 'No era lo que esperaba, medio pelo.'),
(1, 4, 'Me encantó, superó mis expectativas.'),

(2, 5, 'Gran producto!'),
(2, 6, 'Lo volvería a comprar sin dudas.'),
(2, 7, 'Ideal para regalar, a todos les gustó.'),

(3, 3, 'No era lo que esperaba, medio pelo.'),
(3, 2, 'Excelente producto, muy recomendado!'),
(3, 4, 'Buena calidad por el precio.'),

(4, 2, 'Excelente producto, muy recomendado!'),
(4, 3, 'No era lo que esperaba, medio pelo.'),
(4, 5, 'Cumple con lo prometido, lo recomiendo.'),

(5, 6, 'El diseño es hermoso, tal como en la foto.'),
(5, 7, 'Tuve un problema y lo resolvieron al toque.'),
(5, 8, 'Lo volvería a comprar sin dudas.'),

(6, 9, 'Ideal para regalar, a todos les gustó.'),
(6, 2, 'Buena calidad por el precio.'),
(6, 3, 'Excelente producto, muy recomendado!'),

(7, 4, 'Cumple con lo prometido, lo recomiendo.'),
(7, 5, 'No era lo que esperaba, medio pelo.'),
(7, 6, 'Gran producto!'),

(8, 7, 'Me encantó, superó mis expectativas.'),
(8, 8, 'Excelente producto, muy recomendado!'),
(8, 9, 'No era lo que esperaba, medio pelo.'),

(9, 2, 'Gran producto!'),
(9, 3, 'Tuve un problema y lo resolvieron al toque.'),
(9, 4, 'Lo volvería a comprar sin dudas.'),

(10, 5, 'El diseño es hermoso, tal como en la foto.'),
(10, 6, 'Ideal para regalar, a todos les gustó.'),
(10, 7, 'Buena calidad por el precio.');