CREATE DATABASE  IF NOT EXISTS `mi_base_de_datos_entrega_final_real` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mi_base_de_datos_entrega_final_real`;
-- MySQL dump 10.13  Distrib 8.0.41, for macos15 (arm64)
--
-- Host: 127.0.0.1    Database: mi_base_de_datos_entrega_final_real
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `producto_id` int NOT NULL,
  `usuario_id` int NOT NULL,
  `texto` text NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `producto_id` (`producto_id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`),
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,1,2,'Excelente producto, muy recomendado!','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(2,1,3,'No era lo que esperaba, medio pelo.','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(3,1,4,'Me encantó, superó mis expectativas.','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(4,2,5,'Gran producto!','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(5,2,6,'Lo volvería a comprar sin dudas.','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(6,2,7,'Ideal para regalar, a todos les gustó.','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(7,3,3,'No era lo que esperaba, medio pelo.','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(8,3,2,'Excelente producto, muy recomendado!','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(9,3,4,'Buena calidad por el precio.','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(10,4,2,'Excelente producto, muy recomendado!','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(11,4,3,'No era lo que esperaba, medio pelo.','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(12,4,5,'Cumple con lo prometido, lo recomiendo.','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(13,5,6,'El diseño es hermoso, tal como en la foto.','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(14,5,7,'Tuve un problema y lo resolvieron al toque.','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(15,5,8,'Lo volvería a comprar sin dudas.','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(16,6,9,'Ideal para regalar, a todos les gustó.','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(17,6,2,'Buena calidad por el precio.','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(18,6,3,'Excelente producto, muy recomendado!','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(19,7,4,'Cumple con lo prometido, lo recomiendo.','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(20,7,5,'No era lo que esperaba, medio pelo.','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(21,7,6,'Gran producto!','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(22,8,7,'Me encantó, superó mis expectativas.','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(23,8,8,'Excelente producto, muy recomendado!','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(24,8,9,'No era lo que esperaba, medio pelo.','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(25,9,2,'Gran producto!','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(26,9,3,'Tuve un problema y lo resolvieron al toque.','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(27,9,4,'Lo volvería a comprar sin dudas.','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(28,10,5,'El diseño es hermoso, tal como en la foto.','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(29,10,6,'Ideal para regalar, a todos les gustó.','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(30,10,7,'Buena calidad por el precio.','2025-05-26 13:06:15','2025-05-26 13:06:15',NULL),(31,1,10,'Hermanooooo!! muy buen producto tengo 4 cafeteras','2025-05-26 13:22:07','2025-05-26 13:22:07',NULL);
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,1,'/images/products/img-cafetera-moulinex.jpg','Cafetera','Descubre el placer de un café perfecto con esta cafetera automática de alta gama. Su sistema de extracción de alta presión garantiza un sabor intenso y un aroma inigualable en cada taza...','2025-05-26 13:06:02','2025-05-26 13:06:02',NULL),(2,1,'/images/products/Olladearroz.jpeg','Olla arrocera','Olla arrocera automática con función de mantenimiento de calor, ideal para preparar arroz perfecto sin esfuerzo...','2025-05-26 13:06:02','2025-05-26 13:06:02',NULL),(3,1,'/images/products/Cacerola.jpg','Olla Essen','Olla de aluminio fundido con recubrimiento antiadherente que conserva el calor y cocina de manera uniforme...','2025-05-26 13:06:02','2025-05-26 13:06:02',NULL),(4,1,'/images/products/airfry.webp','Air fryer','Freidora de aire que cocina con poco o nada de aceite, logrando alimentos crujientes y saludables...','2025-05-26 13:06:02','2025-05-26 13:06:02',NULL),(5,2,'/images/products/hornux.jpg','Horno','Horno eléctrico de alta eficiencia con múltiples modos de cocción, ideal para preparar desde pizzas hasta pasteles...','2025-05-26 13:06:02','2025-05-26 13:06:02',NULL),(6,2,'/images/products/microondas.jpg','Microondas','Microondas digital con funciones automáticas, grill y descongelado inteligente...','2025-05-26 13:06:02','2025-05-26 13:06:02',NULL),(7,2,'/images/products/tostadora.jpeg','Thermomix','Robot de cocina todo en uno que tritura, cuece, mezcla y pesa con gran precisión...','2025-05-26 13:06:02','2025-05-26 13:06:02',NULL),(8,3,'/images/products/minipi.jpg','Minipimer','Batidora de mano potente y ergonómica con múltiples accesorios. Perfecta para preparar sopas, salsas, licuados...','2025-05-26 13:06:02','2025-05-26 13:06:02',NULL),(9,3,'/images/products/olla.jpeg','Olla','Olla de gran capacidad, fabricada en acero inoxidable, ideal para cocinar guisos, pastas o caldos...','2025-05-26 13:06:02','2025-05-26 13:06:02',NULL),(10,3,'/images/products/heladera.jpeg','Heladera','Heladera con amplio espacio interior, sistema de enfriamiento eficiente y diseño moderno...','2025-05-26 13:06:02','2025-05-26 13:06:02',NULL);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contrasenia` varchar(255) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `nro_documento` int NOT NULL,
  `foto_perfil` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `nro_documento` (`nro_documento`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Agustin','Agustin12@digitalhouse.com','password123','1990-01-01',12345678,'/images/users/sopa.jpeg','2025-05-26 13:05:58','2025-05-26 13:05:58',NULL),(2,'Tung','tung@mail.com','clave123','1991-02-02',22345678,'/images/users/TungTungTungSahur.webp','2025-05-26 13:05:58','2025-05-26 13:05:58',NULL),(3,'Martin','martin@mail.com','clave123','1992-03-03',32345678,'/images/users/images.jpeg','2025-05-26 13:05:58','2025-05-26 13:05:58',NULL),(4,'Benito','benito@mail.com','clave123','1993-04-04',42345678,'/images/users/dybala.jpg','2025-05-26 13:05:58','2025-05-26 13:05:58',NULL),(5,'Tomas','tomas@mail.com','clave123','1994-05-05',52345678,'/images/users/ronaldo.jpg','2025-05-26 13:05:58','2025-05-26 13:05:58',NULL),(6,'Emilio','emilio@mail.com','clave123','1995-06-06',62345678,'/images/users/dino.png','2025-05-26 13:05:58','2025-05-26 13:05:58',NULL),(7,'Agustina','agustina@mail.com','clave123','1996-07-07',72345678,'/images/users/tini.webp','2025-05-26 13:05:58','2025-05-26 13:05:58',NULL),(8,'Francisca','francisca@mail.com','clave123','1997-08-08',82345678,'/images/users/taylor.jpeg','2025-05-26 13:05:58','2025-05-26 13:05:58',NULL),(9,'Juan','juan@mail.com','clave123','1998-09-09',92345678,'/images/users/ricky.jpg','2025-05-26 13:05:58','2025-05-26 13:05:58',NULL),(10,'Beno Colombo','colombito@gmail.com','$2b$10$yqDVtaAI9ruwTqLMe94p8uahSAXGGjNL1iPTazeu128R04AXyq7Oe','2005-11-26',46962437,'https://www.eltrecetv.com.ar/resizer/v2/pedro-alfonso-IPOPL5U2HFFKRJJAD6AU6Y5R2M.jpg?auth=2c86faedf1aff9f17d0d86fbcd9333f5695cc41a0a4718d7210103c7461fa749&width=1023','2025-05-26 13:20:12','2025-05-26 13:20:12',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-26 10:36:17
