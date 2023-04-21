-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: hobbies
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `consolas`
--

DROP TABLE IF EXISTS `consolas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consolas` (
  `ID_CONSOLA` varchar(2) NOT NULL,
  `ALIAS` varchar(40) NOT NULL,
  `NOMBRE` varchar(20) NOT NULL,
  PRIMARY KEY (`ID_CONSOLA`,`ALIAS`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consolas`
--

LOCK TABLES `consolas` WRITE;
/*!40000 ALTER TABLE `consolas` DISABLE KEYS */;
/*!40000 ALTER TABLE `consolas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estados`
--

DROP TABLE IF EXISTS `estados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estados` (
  `COD_PROYECTO` varchar(4) NOT NULL,
  `VERSION` varchar(2) NOT NULL,
  `DESCRIPCION` varchar(200) NOT NULL,
  `FECHA` date NOT NULL,
  `PARTE_REALIZADA` varchar(40) NOT NULL,
  `ESTADO` varchar(15) NOT NULL,
  PRIMARY KEY (`COD_PROYECTO`,`VERSION`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estados`
--

LOCK TABLES `estados` WRITE;
/*!40000 ALTER TABLE `estados` DISABLE KEYS */;
/*!40000 ALTER TABLE `estados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hobbie`
--

DROP TABLE IF EXISTS `hobbie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hobbie` (
  `ID_HOBBIE` varchar(3) NOT NULL,
  `NOMBRE` varchar(50) NOT NULL,
  PRIMARY KEY (`ID_HOBBIE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hobbie`
--

LOCK TABLES `hobbie` WRITE;
/*!40000 ALTER TABLE `hobbie` DISABLE KEYS */;
/*!40000 ALTER TABLE `hobbie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `juegos`
--

DROP TABLE IF EXISTS `juegos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `juegos` (
  `ID_JUEGO` varchar(6) NOT NULL,
  `ID_CONSOLA` varchar(2) NOT NULL,
  `NOMBRE` varchar(30) NOT NULL,
  `PUBLICACION` date NOT NULL,
  `ESTADO` varchar(8) DEFAULT NULL,
  `ORIGINAL` enum('SI','NO') DEFAULT NULL,
  `VALORACION` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`ID_JUEGO`,`ID_CONSOLA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `juegos`
--

LOCK TABLES `juegos` WRITE;
/*!40000 ALTER TABLE `juegos` DISABLE KEYS */;
/*!40000 ALTER TABLE `juegos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `libros`
--

DROP TABLE IF EXISTS `libros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `libros` (
  `COD_LIBRO` varchar(16) NOT NULL,
  `ALIAS` varchar(40) NOT NULL,
  `TITULO` varchar(60) NOT NULL,
  `AUTOR` varchar(60) NOT NULL,
  `PAGINAS` varchar(4) NOT NULL,
  `PORTADA` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `LEIDO` enum('SI','NO') NOT NULL,
  `VALORACION` int DEFAULT NULL,
  PRIMARY KEY (`COD_LIBRO`,`ALIAS`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `libros`
--

LOCK TABLES `libros` WRITE;
/*!40000 ALTER TABLE `libros` DISABLE KEYS */;
INSERT INTO `libros` VALUES ('','Ana','Harry Potter (series) 1-6','J. K. Rowling','99','https://covers.openlibrary.org/b/id/279587-S.jpg','SI',5),('0786931493','Jesus Miguel','Stormblade (Dragonlance: Heroes)','Nancy Varian Berberick','352','https://covers.openlibrary.org/b/id/547308-S.jpg','NO',0),('8430973702','Ana','En la línea de fuego','Fernando Pérez Pacho','464','https://covers.openlibrary.org/b/id/13591490-S.jpg','NO',0),('8467871237','Mario','Senda Escondida','Ana Alonso','150','https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg','SI',4),('9788420419688','Ana','Falcó','Arturo Pérez-Reverte','296','https://covers.openlibrary.org/b/id/7876643-S.jpg','NO',4),('9788420419688','Mario','Falcó','Arturo Pérez-Reverte','296','https://covers.openlibrary.org/b/id/7876643-S.jpg','SI',2),('9788420454665','Ana','Línea de fuego','Arturo Pérez-Reverte','672','https://covers.openlibrary.org/b/id/10473632-S.jpg','NO',0),('9788420454665','Mario','Línea de fuego','Arturo Pérez-Reverte','672','https://covers.openlibrary.org/b/id/10473632-S.jpg','SI',2),('9788466320535','Ana','El capitán Alatriste','Arturo Pérez-Reverte','240','https://covers.openlibrary.org/b/id/10087995-S.jpg','NO',0),('9788466320535','Jesus Miguel','El capitán Alatriste','Arturo Pérez-Reverte','240','https://covers.openlibrary.org/b/id/10087995-S.jpg','SI',4),('9788467047752','Ana','El espartano','Javier Negrete','1008','https://covers.openlibrary.org/b/id/8100980-S.jpg','NO',0),('9788467047752','Mario','El espartano','Javier Negrete','1008','https://covers.openlibrary.org/b/id/8100980-S.jpg','SI',5),('9788492819171','Mario','Tatuaje','Ana Alonso','427','https://covers.openlibrary.org/b/id/9034999-S.jpg','SI',4),('9789506441746','Ana','El nombre del viento','ROTHFUSS','880','https://covers.openlibrary.org/b/id/12339516-S.jpg','SI',4);
/*!40000 ALTER TABLE `libros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paginas_web`
--

DROP TABLE IF EXISTS `paginas_web`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paginas_web` (
  `ID_PAGINA` varchar(6) NOT NULL,
  `URL` varchar(200) NOT NULL,
  `Nombre` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paginas_web`
--

LOCK TABLES `paginas_web` WRITE;
/*!40000 ALTER TABLE `paginas_web` DISABLE KEYS */;
/*!40000 ALTER TABLE `paginas_web` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `practica`
--

DROP TABLE IF EXISTS `practica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `practica` (
  `ALIAS` varchar(40) NOT NULL,
  `ID_HOBBIE` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `practica`
--

LOCK TABLES `practica` WRITE;
/*!40000 ALTER TABLE `practica` DISABLE KEYS */;
/*!40000 ALTER TABLE `practica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proyectos`
--

DROP TABLE IF EXISTS `proyectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proyectos` (
  `COD_PROYECTO` varchar(4) NOT NULL,
  `ALIAS` varchar(40) NOT NULL,
  `ORIGINAL` enum('Si','NO') NOT NULL,
  `FOTO` varchar(40) DEFAULT NULL,
  `F_INICIO` date NOT NULL,
  `F_FIN` date NOT NULL,
  `BOCETO` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`COD_PROYECTO`,`ALIAS`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyectos`
--

LOCK TABLES `proyectos` WRITE;
/*!40000 ALTER TABLE `proyectos` DISABLE KEYS */;
/*!40000 ALTER TABLE `proyectos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `relacion`
--

DROP TABLE IF EXISTS `relacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `relacion` (
  `ID_PAGINA` varchar(6) NOT NULL,
  `ID_HOBBIE` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `relacion`
--

LOCK TABLES `relacion` WRITE;
/*!40000 ALTER TABLE `relacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `relacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `relacionadas`
--

DROP TABLE IF EXISTS `relacionadas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `relacionadas` (
  `ID_HOBBIE` varchar(3) NOT NULL,
  `COD_TIENDA` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `relacionadas`
--

LOCK TABLES `relacionadas` WRITE;
/*!40000 ALTER TABLE `relacionadas` DISABLE KEYS */;
/*!40000 ALTER TABLE `relacionadas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rutas`
--

DROP TABLE IF EXISTS `rutas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rutas` (
  `ID_RUTA` varchar(3) NOT NULL,
  `ALIAS` varchar(40) NOT NULL,
  `NOMBRE` varchar(60) NOT NULL,
  `Duracion` varchar(10) NOT NULL,
  `DIFICULTAD` varchar(10) NOT NULL,
  `VALORACION` varchar(2) DEFAULT NULL,
  `PROVINCIA` varchar(30) NOT NULL,
  `LOCALIDAD` varchar(30) NOT NULL,
  `REALIZADA` enum('SI','NO') NOT NULL,
  PRIMARY KEY (`ID_RUTA`,`ALIAS`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rutas`
--

LOCK TABLES `rutas` WRITE;
/*!40000 ALTER TABLE `rutas` DISABLE KEYS */;
/*!40000 ALTER TABLE `rutas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sugerencias`
--

DROP TABLE IF EXISTS `sugerencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sugerencias` (
  `COD_Sugerencia` varchar(2) NOT NULL,
  `ALIAS` varchar(40) NOT NULL,
  `APARTADO` varchar(40) NOT NULL,
  `TEXTO` varchar(200) NOT NULL,
  PRIMARY KEY (`COD_Sugerencia`),
  KEY `ALIAS` (`ALIAS`),
  CONSTRAINT `sugerencias_ibfk_1` FOREIGN KEY (`ALIAS`) REFERENCES `usuarios` (`ALIAS`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sugerencias`
--

LOCK TABLES `sugerencias` WRITE;
/*!40000 ALTER TABLE `sugerencias` DISABLE KEYS */;
/*!40000 ALTER TABLE `sugerencias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tiendas`
--

DROP TABLE IF EXISTS `tiendas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tiendas` (
  `COD_TIENDA` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `LOCALIDAD` varchar(30) NOT NULL,
  `PROVINCIA` varchar(30) NOT NULL,
  `NOMBRE` varchar(40) NOT NULL,
  `DIRECCION` varchar(80) NOT NULL,
  `TELEFONO` varchar(14) DEFAULT NULL,
  PRIMARY KEY (`COD_TIENDA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tiendas`
--

LOCK TABLES `tiendas` WRITE;
/*!40000 ALTER TABLE `tiendas` DISABLE KEYS */;
/*!40000 ALTER TABLE `tiendas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `ALIAS` varchar(40) NOT NULL,
  `F_NACIMIENTO` date NOT NULL,
  `LOCALIDAD` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `EMAIL` varchar(40) NOT NULL,
  `CONTRASEÑA` varchar(100) NOT NULL,
  `FOTO` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ALIAS`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES ('Administrador','1989-11-09','Cuenca','jes11989@hotmail.com','$2y$10$wOD.y3zTnqWAGbgtiwabxeG8XhKxP4IzZ2zbR/G5BKKszxXnxo7X2',NULL),('Ana','1994-09-27','Cuenca','jes11989@hotmail.com','$2y$10$5AjvviebbxqFoeiZ3WHNMOLkAhXvT8Cv4sm5/KakcJ9N0BvLUYoH6','./fotoPerfiles/Ana.png'),('Aquaman1989','1966-06-06','Cuenca','jes11989@hotmail.com','$2y$10$WIppTWSBkq42i7CmwuHhheKGszSSroLVoZGObTI407EJu/DZWbx/S','./fotoPerfiles/Aquaman1989.png'),('Jesus Miguel','1989-11-09','Toledo','jes11989@hotmail.com','$2y$10$5AjvviebbxqFoeiZ3WHNMOLkAhXvT8Cv4sm5/KakcJ9N0BvLUYoH6','./fotoPerfiles/Jesus Miguel.jpeg'),('Mario','1999-10-17','Guadalajara','jes11989@hotmail.com','$2y$10$PsrUcVwuG9OXNVQqdrFxmOd1cUL5UgAUYWkcLI2AkCpIcPaxwaYOO','./fotoPerfiles/Mario.jpeg');
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

-- Dump completed on 2023-04-14  8:42:38
