-- MariaDB dump 10.19  Distrib 10.6.12-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: u720382761_hobbie
-- ------------------------------------------------------
-- Server version	10.6.12-MariaDB-cll-lve

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blacklist`
--

DROP TABLE IF EXISTS `blacklist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blacklist` (
  `CASTIGOS` int(11) NOT NULL AUTO_INCREMENT,
  `ALIAS` varchar(40) NOT NULL,
  `FEC_TOPE` date NOT NULL,
  `MOTIVO` varchar(150) NOT NULL,
  PRIMARY KEY (`ALIAS`,`CASTIGOS`) USING BTREE,
  KEY `CASTIGOS` (`CASTIGOS`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blacklist`
--

LOCK TABLES `blacklist` WRITE;
/*!40000 ALTER TABLE `blacklist` DISABLE KEYS */;

/*!40000 ALTER TABLE `blacklist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hobbie`
--

DROP TABLE IF EXISTS `hobbie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hobbie` (
  `COD_HOBBIE` varchar(3) NOT NULL,
  `NOMBRE` varchar(50) NOT NULL,
  PRIMARY KEY (`COD_HOBBIE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hobbie`
--

LOCK TABLES `hobbie` WRITE;
/*!40000 ALTER TABLE `hobbie` DISABLE KEYS */;

/*!40000 ALTER TABLE `hobbie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `libros`
--

DROP TABLE IF EXISTS `libros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `libros` (
  `COD_LIBRO` varchar(16) NOT NULL,
  `ALIAS` varchar(40) NOT NULL,
  `TITULO` varchar(100) NOT NULL,
  `AUTOR` varchar(200) NOT NULL,
  `PAGINAS` varchar(4) NOT NULL,
  `PORTADA` varchar(100) NOT NULL,
  `LEIDO` enum('SI','NO') NOT NULL,
  `VALORACION` int(11) DEFAULT NULL,
  `EDITORIAL` varchar(60) NOT NULL,
  `COMENTARIO` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`COD_LIBRO`,`ALIAS`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `libros`
--

LOCK TABLES `libros` WRITE;
/*!40000 ALTER TABLE `libros` DISABLE KEYS */;

/*!40000 ALTER TABLE `libros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `practica`
--

DROP TABLE IF EXISTS `practica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `practica` (
  `ALIAS` varchar(40) NOT NULL,
  `COD_HOBBIE` varchar(3) NOT NULL,
  PRIMARY KEY (`ALIAS`,`COD_HOBBIE`),
  KEY `FK_hobbie` (`COD_HOBBIE`),
  CONSTRAINT `FK_Usuario` FOREIGN KEY (`ALIAS`) REFERENCES `usuarios` (`ALIAS`) ON DELETE CASCADE,
  CONSTRAINT `FK_hobbie` FOREIGN KEY (`COD_HOBBIE`) REFERENCES `hobbie` (`COD_HOBBIE`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `practica`
--

LOCK TABLES `practica` WRITE;
/*!40000 ALTER TABLE `practica` DISABLE KEYS */;

/*!40000 ALTER TABLE `practica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sugerencias`
--

DROP TABLE IF EXISTS `sugerencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sugerencias` (
  `COD_Sugerencia` int(11) NOT NULL AUTO_INCREMENT,
  `ALIAS` varchar(40) NOT NULL,
  `APARTADO` varchar(40) NOT NULL,
  `TEXTO` text NOT NULL,
  PRIMARY KEY (`COD_Sugerencia`),
  KEY `ALIAS` (`ALIAS`),
  CONSTRAINT `sugerencias_ibfk_1` FOREIGN KEY (`ALIAS`) REFERENCES `usuarios` (`ALIAS`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tiendas` (
  `COD_TIENDA` varchar(6) NOT NULL,
  `LOCALIDAD` varchar(30) NOT NULL,
  `PROVINCIA` varchar(30) NOT NULL,
  `NOMBRE` varchar(40) NOT NULL,
  `DIRECCION` varchar(80) NOT NULL,
  `TELEFONO` varchar(14) DEFAULT NULL,
  `COD_HOBBIE` varchar(3) NOT NULL,
  `LOGO` varchar(300) NOT NULL,
  `WEB` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`COD_TIENDA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tiendas`
--

LOCK TABLES `tiendas` WRITE;
/*!40000 ALTER TABLE `tiendas` DISABLE KEYS */;

/*!40000 ALTER TABLE `tiendas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tiene`
--

DROP TABLE IF EXISTS `tiene`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tiene` (
  `COD_TIENDA` varchar(6) NOT NULL,
  `COD_HOBBIE` varchar(3) NOT NULL,
  PRIMARY KEY (`COD_TIENDA`,`COD_HOBBIE`),
  KEY `FK_hobbieTienda` (`COD_HOBBIE`,`COD_TIENDA`) USING BTREE,
  CONSTRAINT `FK_Tienda` FOREIGN KEY (`COD_TIENDA`) REFERENCES `tiendas` (`COD_TIENDA`) ON DELETE CASCADE,
  CONSTRAINT `FK_hobbieTienda` FOREIGN KEY (`COD_HOBBIE`) REFERENCES `hobbie` (`COD_HOBBIE`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tiene`
--

LOCK TABLES `tiene` WRITE;
/*!40000 ALTER TABLE `tiene` DISABLE KEYS */;

/*!40000 ALTER TABLE `tiene` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `ALIAS` varchar(40) NOT NULL,
  `F_NACIMIENTO` date NOT NULL,
  `LOCALIDAD` varchar(30) DEFAULT NULL,
  `EMAIL` varchar(40) NOT NULL,
  `CONTRASEÑA` varchar(100) NOT NULL,
  `FOTO` varchar(100) DEFAULT NULL,
  `ESTADO` enum('OK','Pendiente','Banneado') DEFAULT 'Pendiente',
  `F_REGISTRO` date NOT NULL,
  PRIMARY KEY (`ALIAS`),
  UNIQUE KEY `Unico` (`EMAIL`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;

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

-- Dump completed on 2023-06-08 17:38:11
