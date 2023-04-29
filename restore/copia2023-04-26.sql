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
-- Table structure for table `blacklist`
--

DROP TABLE IF EXISTS `blacklist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blacklist` (
  `ALIAS` varchar(40) NOT NULL,
  `FEC_TOPE` date NOT NULL,
  `MOTIVO` varchar(150) NOT NULL,
  PRIMARY KEY (`ALIAS`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blacklist`
--

LOCK TABLES `blacklist` WRITE;
/*!40000 ALTER TABLE `blacklist` DISABLE KEYS */;
INSERT INTO `blacklist` VALUES ('Batman99','9999-01-01','Correo Electronicojes11989@hotmail.com');
/*!40000 ALTER TABLE `blacklist` ENABLE KEYS */;
UNLOCK TABLES;

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
INSERT INTO `hobbie` VALUES ('1','Lectura');
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
INSERT INTO `libros` VALUES ('','Ana','Harry Potter (series) 1-6','J. K. Rowling','99','https://covers.openlibrary.org/b/id/279587-S.jpg','SI',5),('0156029588','Jesus Miguel','La tabla de Flandes','Arturo Pérez-Reverte','364','https://covers.openlibrary.org/b/id/6606589-M.jpg','NO',0),('060630424X','Jesus Miguel','Viaje Al Centro de La Tierra','Jules Verne','194','https://covers.openlibrary.org/b/id/1315270-M.jpg','SI',4),('0808521403','Ana','The Book of Lost Tales, Part One','J.R.R. Tolkien','418','https://covers.openlibrary.org/b/id/10630171-M.jpg','NO',0),('0833589342','Jesus Miguel','Jurassic Park','Michael Crichton','450','https://covers.openlibrary.org/b/id/1578750-M.jpg','SI',3),('2070623440','Ana','The Tales of Beedle the Bard','Chris Riddell','128','https://covers.openlibrary.org/b/id/7255722-M.jpg','SI',2),('3551559007','Ana','Harry Potter and the Cursed Child','Jack Thorne','343','https://covers.openlibrary.org/b/id/8537045-M.jpg','SI',3),('6257966485','Mario','Moby Dick','Herman Melville','128','https://covers.openlibrary.org/b/id/12259489-M.jpg','NO',0),('8373190732','Jesus Miguel','Territorio comanche','Arturo Pérez-Reverte','141','https://covers.openlibrary.org/b/id/8681011-M.jpg','NO',0),('8408117114','Jesus Miguel','Circo Máximo','Santiago Posteguillo Gomez','1200','https://covers.openlibrary.org/b/id/7263754-M.jpg','SI',4),('8408233858','Jesus Miguel','La cuarta alianza','Gonzalo Giner','506','https://covers.openlibrary.org/b/id/12373006-M.jpg','SI',1),('8408234498','Jesus Miguel','Yo, Julia','Santiago Posteguillo','720','https://covers.openlibrary.org/b/id/13955959-M.jpg','SI',3),('8408257684','Jesus Miguel','La sangre de los libros','Santiago Posteguillo','224','https://covers.openlibrary.org/b/id/14156162-M.jpg','NO',0),('8413141451','Jesus Miguel','Las legiones malditas','Santiago Posteguillo','864','https://covers.openlibrary.org/b/id/13712850-M.jpg','SI',4),('8416638926','Mario','Teo','Lorenza Gentile','0','https://covers.openlibrary.org/b/id/7425025-M.jpg','NO',0),('8420407097','Jesus Miguel','El puente de los asesinos','Arturo Pérez-Reverte','352','https://covers.openlibrary.org/b/id/8188315-M.jpg','NO',0),('8420441708','Jesus Miguel','La carta esférica','Arturo Pérez-Reverte','568','https://covers.openlibrary.org/b/id/7391612-M.jpg','NO',0),('8420460494','Jesus Miguel','El italiano','Arturo Pérez-Reverte','396','https://covers.openlibrary.org/b/id/11981448-M.jpg','SI',3),('8425333296','Jesus Miguel','Aléxandros','Valerio Massimo Manfredi','357','https://covers.openlibrary.org/b/id/13832782-M.jpg','NO',0),('8427216262','Ana','Trilogía Los Juegos del Hambre','Suzanne Collins','1200','https://covers.openlibrary.org/b/id/13941005-M.jpg','SI',5),('8439597886','Ana','The Book of Lost Tales, Part One','Christopher Tolkien','304','https://covers.openlibrary.org/b/id/7302633-M.jpg','NO',0),('8445000683','Jesus Miguel','El Señor de los Anillos III. El Retorno del Rey','J.R.R. Tolkien','606','https://covers.openlibrary.org/b/id/10506398-M.jpg','SI',5),('846637079X','Jesus Miguel','El club Dumas','Arturo Pérez-Reverte','496','https://covers.openlibrary.org/b/id/13556069-M.jpg','NO',0),('8466637680','Jesus Miguel','Las legiones malditas','Santiago Posteguillo Gomez','855','https://covers.openlibrary.org/b/id/6593993-M.jpg','SI',5),('8466639322','Jesus Miguel','Africanus','Santiago Posteguillo Gomez','712','https://covers.openlibrary.org/b/id/12657202-M.jpg','SI',5),('8466640150','Jesus Miguel','africanus el hijo del consul','SANTIAGO POSTEGUILLO','720','https://covers.openlibrary.org/b/id/13887606-M.jpg','SI',4),('8499981666','Jesus Miguel','El jinete del silencio','Gonzalo Giner','720','https://covers.openlibrary.org/b/id/14287258-M.jpg','SI',1),('9500770008','Ana','Línea de fuego','Syria Poletti','168','https://covers.openlibrary.org/b/id/4184403-M.jpg','SI',4),('9700509966','Jesus Miguel','La Vuelta Al Mundo En 80 Dias / Around the World in 80 Days','Jules Verne','177','https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg','SI',3),('9780395082515','Ana','The Book of Lost Tales, Part One','J.R.R. Tolkien','64','https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg','NO',0),('9780753822944','Jesus Miguel','El sol de Breda','Arturo Pérez-Reverte','257','https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg','SI',5),('9780753822944','Mario','El sol de Breda','Arturo Pérez-Reverte','257','https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg','SI',4),('9781417697892','Mario','Death Note, Vol. 1','Takeshi Obata','200','https://covers.openlibrary.org/b/id/1787491-M.jpg','SI',4),('9781436240611','Jesus Miguel','El oro del rey','Arturo Pérez-Reverte','267','https://covers.openlibrary.org/b/id/6393734-M.jpg','SI',3),('9781497697553','Jesus Miguel','The horse healer','Gonzalo Giner','554','https://covers.openlibrary.org/b/id/13261587-M.jpg','NO',0),('9781593077013','Jesus Miguel','300','Frank Miller','108','https://covers.openlibrary.org/b/id/869575-M.jpg','SI',4),('9781644731062','Jesus Miguel','Sidi','Arturo Pérez-Reverte','376','https://covers.openlibrary.org/b/id/9247676-M.jpg','NO',0),('9782205002683','Jesus Miguel','Le Bouclier Arverne','René Goscinny,Albert Uderzo','48','https://covers.openlibrary.org/b/id/973291-M.jpg','NO',0),('9788408176527','Jesus Miguel','Los asesinos del emperador','Santiago Posteguillo','1240','https://covers.openlibrary.org/b/id/12341260-M.jpg','SI',4),('9788420419688','Ana','Falcó','Arturo Pérez-Reverte','296','https://covers.openlibrary.org/b/id/7876643-M.jpg','NO',4),('9788420419688','Mario','Falcó','Arturo Pérez-Reverte','296','https://covers.openlibrary.org/b/id/7876643-M.jpg','SI',2),('9788420454665','Ana','Línea de fuego','Arturo Pérez-Reverte','672','https://covers.openlibrary.org/b/id/10473632-M.jpg','SI',5),('9788420454665','Jesus Miguel','Línea de fuego','Arturo Pérez-Reverte','672','https://covers.openlibrary.org/b/id/10473632-S.jpg','SI',4),('9788420461465','Jesus Miguel','Revolución','Arturo Pérez-Reverte','464','https://covers.openlibrary.org/b/id/12820995-M.jpg','NO',0),('9788420462462','Jesus Miguel','Un día de cólera','Arturo Pérez-Reverte','408','https://covers.openlibrary.org/b/id/13952395-M.jpg','NO',0),('9788425334191','Jesus Miguel','Alexandros','Valerio Massimo Manfredi','565','https://covers.openlibrary.org/b/id/1046998-M.jpg','NO',0),('9788445077344','Jesus Miguel','Tales from the Perilous Realm','J.R.R. Tolkien','192','https://covers.openlibrary.org/b/id/5721458-M.jpg','NO',0),('9788447301867','Jesus Miguel','El maestro de esgrima','Arturo Pérez-Reverte','282','https://covers.openlibrary.org/b/id/10886560-M.jpg','NO',0),('9788466320382','Jesus Miguel','El pintor de batallas','Arturo Pérez-Reverte','279','https://covers.openlibrary.org/b/id/12344289-M.jpg','SI',4),('9788466320535','Ana','El capitán Alatriste','Arturo Pérez-Reverte','240','https://covers.openlibrary.org/b/id/10087995-M.jpg','NO',0),('9788466320535','Jesus Miguel','El capitán Alatriste','Arturo Pérez-Reverte','240','https://covers.openlibrary.org/b/id/10087995-M.jpg','SI',4),('9788466320610','Jesus Miguel','Cabo Trafalgar','Arturo Pérez-Reverte','272','https://covers.openlibrary.org/b/id/10736714-M.jpg','NO',0),('9788466328494','Jesus Miguel','Corsarios de Levante','Arturo Pérez-Reverte','348','https://covers.openlibrary.org/b/id/12843106-M.jpg','SI',4),('9788466350006','Jesus Miguel','Hombres buenos','Arturo Pérez-Reverte','584','https://covers.openlibrary.org/b/id/12325559-M.jpg','NO',0),('9788466356732','Jesus Miguel','El capitán Alatriste : (edición pack con','Arturo Pérez-Reverte','2032','https://covers.openlibrary.org/b/id/14060679-M.jpg','SI',5),('9788466367349','Mario','El italiano','Arturo Pérez-Reverte','400','https://covers.openlibrary.org/b/id/14060611-M.jpg','NO',0),('9788466640824','Jesus Miguel','La traición de Roma','Santiago Posteguillo Gomez','866','https://covers.openlibrary.org/b/id/8185466-M.jpg','SI',3),('9788467047752','Ana','El espartano','Javier Negrete','1008','https://covers.openlibrary.org/b/id/8100980-M.jpg','NO',0),('9788476600207','Jesus Miguel','The Gold-Bug','Edgar Allan Poe','79','https://covers.openlibrary.org/b/id/10470229-M.jpg','SI',1),('9788492819171','Mario','Tatuaje','Ana Alonso','427','https://covers.openlibrary.org/b/id/9034999-M.jpg','SI',4),('9788492966806','Ana','Los Juegos del Hambre 1 - Los Juegos del Hambre','Suzanne Collins','400','https://covers.openlibrary.org/b/id/13941003-M.jpg','SI',5),('9789505117888','Jesus Miguel','La Reina Del Sur','Arturo Perez-Reverte','542','https://covers.openlibrary.org/b/id/13523280-M.jpg','SI',3),('9789506441746','Ana','El nombre del viento','ROTHFUSS','880','https://covers.openlibrary.org/b/id/12339516-M.jpg','SI',4),('9879423194','Jesus Miguel','20.000 Leguas de Viaje Submarino','Jules Verne','448','https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg','SI',3);
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
  `COD_HOBBIE` varchar(2) NOT NULL,
  `logo` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`COD_TIENDA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tiendas`
--

LOCK TABLES `tiendas` WRITE;
/*!40000 ALTER TABLE `tiendas` DISABLE KEYS */;
INSERT INTO `tiendas` VALUES ('CU0001','Cuenca','Cuenca','Librería Toro Ibérico','C. de Colón, 32, 16002 Cuenca','636 23 51 63','1','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDg-gdGfR2ctW4oSj5Kie-LfnuJdCVKbxNVw&usqp=CAU'),('CU0002','Cuenca','Cuenca','El Principito','C. Cristóbal Halffter, 12, 16004 Cuenca','969 69 39 39','1','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHln1MJ0ezeTd_4uD-g-NxaNEZjrjHIbzZ8kkZm21s9JjLdDBFbFPuFdTVD1uc_zn7fPg&usqp=CAU'),('CU0003','Cuenca','Cuenca','Evangelio','Pl. la Hispanidad, 1, 16001 Cuenca','969 21 21 81','1','https://lh3.googleusercontent.com/p/AF1QipNIOXsZ5slxc0ddufvV9pRAL-X7Ah-sNB9jw-xE=w1080-h608-p-no-v0'),('CU0004','Cuenca','Cuenca','Juan Evangelio','C. Carretería, 19, 16002 Cuenca','969 70 05 35','1','https://www.papeleriascercademi.com/wp-content/uploads/2023/01/AF1QipOuif51_8yR7CPceFsDGM5eb6hrqOUiAVOEGW07w408-h544-k-no.jpeg'),('CU0005','Cuenca','Cuenca','Librería Lorca','C. de Colón, 76, 16002 Cuenca','969 69 24 69','1','https://www.librerialorcacuenca.com/es/images/288/288-logo-mejorado-20.png'),('CU0006','Cuenca','Cuenca','Librería Papelería Iremar','Av del Mediterráneo, 17, 16004 Cuenca','969 23 42 55','1','https://3.bp.blogspot.com/-tMRu9jyuL-4/T5g7Pca3izI/AAAAAAAAAAw/xcPUlAivk_E/s400/libreria%2Biremar%2Btarjeta%2B1.png');
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
  `ESTADO` enum('OK','Pendiente','Banneado') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'Pendiente',
  `F_REGISTRO` date DEFAULT NULL,
  PRIMARY KEY (`ALIAS`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES ('Administrador','1989-11-09','Cuenca','jes11989@hotmail.com','$2y$10$5AjvviebbxqFoeiZ3WHNMOLkAhXvT8Cv4sm5/KakcJ9N0BvLUYoH6',NULL,'OK','9999-03-26'),('Ana','1994-09-27','Cuenca','jes11989@hotmail.com','$2y$10$5AjvviebbxqFoeiZ3WHNMOLkAhXvT8Cv4sm5/KakcJ9N0BvLUYoH6','./fotoPerfiles/Ana.png','OK','9999-03-26'),('Jesus Miguel','1989-11-09','Toledo','jes11989@hotmail.com','$2y$10$5AjvviebbxqFoeiZ3WHNMOLkAhXvT8Cv4sm5/KakcJ9N0BvLUYoH6','./fotoPerfiles/Jesus Miguel.jpeg','OK','9999-03-26'),('Mario','1999-10-17','Guadalajara','jes11989@hotmail.com','$2y$10$PsrUcVwuG9OXNVQqdrFxmOd1cUL5UgAUYWkcLI2AkCpIcPaxwaYOO','./fotoPerfiles/Mario.jpeg','OK','9999-03-26');
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

-- Dump completed on 2023-04-26  9:08:28
