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
  `CASTIGOS` int NOT NULL AUTO_INCREMENT,
  `ALIAS` varchar(40) NOT NULL,
  `FEC_TOPE` date NOT NULL,
  `MOTIVO` varchar(150) NOT NULL,
  PRIMARY KEY (`ALIAS`,`CASTIGOS`) USING BTREE,
  KEY `CASTIGOS` (`CASTIGOS`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blacklist`
--

LOCK TABLES `blacklist` WRITE;
/*!40000 ALTER TABLE `blacklist` DISABLE KEYS */;
INSERT INTO `blacklist` VALUES (62,'Mario','9999-01-01','por metalero');
/*!40000 ALTER TABLE `blacklist` ENABLE KEYS */;
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
-- Table structure for table `libros`
--

DROP TABLE IF EXISTS `libros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `libros` (
  `COD_LIBRO` varchar(16) NOT NULL,
  `ALIAS` varchar(40) NOT NULL,
  `TITULO` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `AUTOR` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `PAGINAS` varchar(4) NOT NULL,
  `PORTADA` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `LEIDO` enum('SI','NO') NOT NULL,
  `VALORACION` int DEFAULT NULL,
  `EDITORIAL` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `COMENTARIO` varchar(400) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`COD_LIBRO`,`ALIAS`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `libros`
--

LOCK TABLES `libros` WRITE;
/*!40000 ALTER TABLE `libros` DISABLE KEYS */;
INSERT INTO `libros` VALUES ('060630424X','Jesus Miguel','Viaje Al Centro de La Tierra','Jules Verne','194','https://covers.openlibrary.org/b/id/1315270-M.jpg','SI',4,'Turtleback Books Distributed by Demco Media',NULL),('0833589342','Jesus Miguel','Jurassic Park','Michael Crichton','450','https://covers.openlibrary.org/b/id/1578750-M.jpg','SI',3,'Longman',NULL),('0972028730','Mario','Alamut','Vladimir Bartol','477','https://covers.openlibrary.org/b/id/737566-M.jpg','NO',0,'Scala House Publishers',NULL),('1421589613','Jesus Miguel','The Legend of Zelda','Akira Himekawa','386','https://covers.openlibrary.org/b/id/13010840-M.jpg','SI',3,'VIZ Media','No esta mal, pero mejor los juegos'),('6073163592','Jesus Miguel','Corsarios de Levante',',Arturo Perez Reverte','0','https://covers.openlibrary.org/b/id/13837438-M.jpg','SI',3,'Debolsillo',''),('8408117114','Jesus Miguel','Circo Máximo','Santiago Posteguillo Gomez','1200','https://covers.openlibrary.org/b/id/7263754-M.jpg','SI',4,'Ediciones B, S.A.',NULL),('8413141451','Jesus Miguel','Las legiones malditas','Santiago Posteguillo','864','https://covers.openlibrary.org/b/id/13712850-M.jpg','SI',4,'Ediciones B, Grupo Zeta',NULL),('8418173149','Ana Isabel','Harry Potter y la Orden del Fénix','J.K. Rowling, Jim Kay, Gemma Rovira Ortega','928','https://covers.openlibrary.org/b/id/14171971-M.jpg','NO',0,'Salamandra Bolsillo',''),('8420460494','Jesus Miguel','El italiano','Arturo Pérez-Reverte','396','https://covers.openlibrary.org/b/id/11981448-M.jpg','SI',3,'Alfaguara',NULL),('8426402011','Batman','En Busca del Tiempo Perdido I',',Marcel Proust','457','https://covers.openlibrary.org/b/id/3326012-M.jpg','NO',0,'Lumen Books/Sites Books',''),('8445000683','Arsus','El Señor de los Anillos III. El Retorno del Rey',',J.R.R. Tolkien','606','https://covers.openlibrary.org/b/id/10506398-M.jpg','SI',5,'Booket','El  mejor libro de la saga, POR FRODO'),('8445011049','Jesus Miguel','Crónicas de la Dragonlance nº 01/03 El retorno de los dragones','Margaret Weis','504','https://covers.openlibrary.org/b/id/14119374-M.jpg','SI',3,'Minotauro','Una historia muy ligerita'),('8466615601','Jesus Miguel','El vigía',',James L. Nelson','372','https://covers.openlibrary.org/b/id/7885059-M.jpg','SI',3,'Ediciones B, S.A.','libro ligerito sobre la piratería y la sociedad de la Virginia colonial'),('8466615601','Mario','El vigía',',James L. Nelson','372','https://covers.openlibrary.org/b/id/7885059-M.jpg','SI',3,'Ediciones B, S.A.','Marlowe, salvador o villano?'),('8466637680','Arsus','Las legiones malditas','Santiago Posteguillo Gomez','855','https://covers.openlibrary.org/b/id/6593993-M.jpg','SI',4,'Ediciones B, Grupo Zeta','MAXIMO, MAXIMO'),('8466637680','Jesus Miguel','Las legiones malditas','Santiago Posteguillo Gomez','855','https://covers.openlibrary.org/b/id/6593993-M.jpg','SI',5,'Ediciones B, Grupo Zeta',NULL),('8466639322','Jesus Miguel','Africanus','Santiago Posteguillo Gomez','712','https://covers.openlibrary.org/b/id/12657202-M.jpg','NO',0,'Ediciones B, S.A.',NULL),('8466640150','Jesus Miguel','africanus el hijo del consul','SANTIAGO POSTEGUILLO','720','https://covers.openlibrary.org/b/id/13887606-M.jpg','NO',0,'Ediciones B, S.A.',NULL),('8466669418','Jesus Miguel','La dama púrpura','Javier Torras de Ugarte','752','https://covers.openlibrary.org/b/id/11290941-M.jpg','NO',0,'B (Ediciones B)',''),('8481302066','Jesus Miguel','El Señor de las moscas  ','William Golding','260','https://covers.openlibrary.org/b/id/12726817-M.jpg','SI',4,'Unidad Editorial','Buen libro , me trae buenos recuerdos de cuando lo lei de niño'),('8483008165','Jesus Miguel','Aléxandros','Valerio Manfredi','0','https://covers.openlibrary.org/b/id/11876876-M.jpg','NO',0,'Columna',''),('8498386330','Ana Isabel','Harry Potter y el prisionero de Azkaban',',J.K. Rowling,Jim Kay,Adolfo Muñoz García,Nieves Martín Azofra','360','https://covers.openlibrary.org/b/id/14171619-M.jpg','NO',0,'Salamandra Infantil y Juvenil',''),('9780753822944','Ana Isabel','El sol de Breda','Arturo Pérez-Reverte','257','https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg','SI',5,'Alfaguara','Lo lei por insistencia, y termine leyendo la saga entera'),('9780753822944','Arsus','El sol de Breda','A, r, t, u, r, o,  , P, é, r, e, z, -, R, e, v, e, r, t, e','257','https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg','SI',3,'Alfaguara',''),('9780753822944','Jesus Miguel','El sol de Breda','Arturo Pérez-Reverte','257','https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg','SI',5,'Alfaguara','Probablemente el mejor de los libros de Alatriste'),('9780753822944','Mario','El sol de Breda','Arturo Pérez-Reverte','257','https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg','SI',4,'Alfaguara','O capitán mi capitán'),('9780757914607','Ana Isabel','Harry Potter and The Chamber of Secrets','John Williams','22','https://covers.openlibrary.org/b/id/1416124-M.jpg','SI',4,'Warner Bros. Publications','Fotos de la pelicula'),('9781338218398','Ana Isabel','Harry Potter (series) 1-7','J. K. Rowling','3433','https://covers.openlibrary.org/b/id/8565476-M.jpg','SI',4,'',''),('9781405308236','Jesus Miguel','Batman',',Scott Beatty','128','https://covers.openlibrary.org/b/id/755603-M.jpg','SI',3,'Dorling Kindersley Publishers Ltd',''),('9781436240611','Jesus Miguel','El oro del rey','Arturo Pérez-Reverte','267','https://covers.openlibrary.org/b/id/6393734-M.jpg','SI',3,'DEBOLSILLO',NULL),('9781563899478','Jesus Miguel','Batman',',Greg Rucka,Ed Brubaker,Devin Grayson','224','https://covers.openlibrary.org/b/id/798820-M.jpg','NO',0,'DC Comics',''),('9781784042158','Mario','Tales of Mystery and Imagination ',',Edgar Allan Poe','382','https://covers.openlibrary.org/b/id/8416614-M.jpg','NO',0,'Arcturus Publishing Limited',''),('9781860462849','Jesus Miguel','La piel del tambor','Arturo Pérez-Reverte','515','https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg','NO',0,'Harvill Press',''),('9783899408201','Ana Isabel','Harry Potter and the Deathly Hallows','J. K. Rowling','695','https://covers.openlibrary.org/b/id/8183633-M.jpg','NO',0,'Der Hörverlag',''),('9786073108324','Arsus','VIEJO Y EL MAR, EL',',ERNEST HEMINGWAY','208','https://covers.openlibrary.org/b/id/13179108-M.jpg','NO',0,'DEBOLSILLO',''),('9788408095903','Jesus Miguel','Batman. Silencio',',Jeph Loeb','280','https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg','NO',0,'Booket',''),('9788408127857','Jesus Miguel','Pacto de lealtad',',Gonzalo Giner','640','https://covers.openlibrary.org/b/id/7334957-M.jpg','NO',0,'Planeta',''),('9788420454665','Administrador','Línea de fuego',',Arturo Pérez-Reverte','672','https://covers.openlibrary.org/b/id/10473632-M.jpg','NO',0,'Alfaguara',''),('9788420454665','Arsus','Línea de fuego',',Arturo Pérez-Reverte','672','https://covers.openlibrary.org/b/id/10473632-M.jpg','SI',5,'Alfaguara','Buena inversión en la batalla del Ebro'),('9788420454665','Jesus Miguel','Línea de fuego',',Arturo Pérez-Reverte','672','https://covers.openlibrary.org/b/id/10473632-M.jpg','SI',4,'Alfaguara','Muy buena inmersión en la época, Aturo Pérez Reverte lo vuelve a conseguir'),('9788445005088','Mario','Las Hijas de Tara','Laura Gallego','320','https://covers.openlibrary.org/b/id/10485525-M.jpg','SI',3,'Minotauro',''),('9788445012802','Arsus','El Hobbit',',J.R.R. Tolkien,Manuel Figueroa','364','https://covers.openlibrary.org/b/id/13479295-M.jpg','SI',3,'MINOTAURO','Un bonito viaje señor Bolsón, dele recueros a Balín'),('9788445073124','Jesus Miguel','La Caida de Numenor','Christopher John Reuel Tolkien','368','https://covers.openlibrary.org/b/id/1047650-M.jpg','NO',0,'Minotauro',''),('9788445073728','Arsus','La comunidad del anillo',',J.R.R. Tolkien','488','https://covers.openlibrary.org/b/id/10612017-M.jpg','SI',4,'Minotauro','Una primera parte muy buena, la mejor trilogía que he leído.'),('9788445073735','Arsus','Las dos torres',',J.R.R. Tolkien','0','https://covers.openlibrary.org/b/id/10612041-M.jpg','SI',4,'Minotauro','La batalla del abismo, la llegada de los Rohirrim, el despertar de Gollum... un libro lleno de momentazos.'),('9788447127917','Jesus Miguel','Silencio',',Jeph Loeb','0','https://covers.openlibrary.org/b/id/12728788-M.jpg','SI',4,'Salvat',''),('9788466320535','Jesus Miguel','El capitán Alatriste','Arturo Pérez-Reverte','240','https://covers.openlibrary.org/b/id/10087995-M.jpg','SI',4,'Alfaguara',NULL),('9788466328494','Jesus Miguel','Corsarios de Levante','Arturo Pérez-Reverte','348','https://covers.openlibrary.org/b/id/12843106-M.jpg','SI',4,'DEBOLSILLO',NULL),('9788476600207','Jesus Miguel','The Gold-Bug','Edgar Allan Poe','79','https://covers.openlibrary.org/b/id/10470229-M.jpg','SI',1,'',NULL),('9788492819171','Mario','Tatuaje','Ana Alonso','427','https://covers.openlibrary.org/b/id/9034999-M.jpg','SI',4,'',NULL),('9788499891064','Arsus','El caballero errante - 9. edición','undefined','0','https://covers.openlibrary.org/b/id/8752044-M.jpg','SI',4,'Debolsillo',''),('9788499891064','Batman','El caballero errante - 9. edición','undefined','0','https://covers.openlibrary.org/b/id/8752044-M.jpg','SI',5,'Debolsillo',''),('9789505117888','Jesus Miguel','La Reina Del Sur','Arturo Perez-Reverte','542','https://covers.openlibrary.org/b/id/13523280-M.jpg','SI',3,'',NULL),('9798757635378','Batman','Frankenstein by Mary Shelley',',Mary Wollstonecraft Shelley','0','https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg','SI',4,'Independently Published','Una gran novela, que para ser escrita en una sola noche no esta nada mal'),('9879423194','Jesus Miguel','20.000 Leguas de Viaje Submarino','Jules Verne','448','https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg','SI',3,'',NULL);
/*!40000 ALTER TABLE `libros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `practica`
--

DROP TABLE IF EXISTS `practica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `practica` (
  `ALIAS` varchar(40) NOT NULL,
  `ID_HOBBIE` varchar(3) NOT NULL,
  PRIMARY KEY (`ALIAS`,`ID_HOBBIE`),
  KEY `FK_hobbie` (`ID_HOBBIE`),
  CONSTRAINT `FK_hobbie` FOREIGN KEY (`ID_HOBBIE`) REFERENCES `hobbie` (`ID_HOBBIE`),
  CONSTRAINT `FK_Usuario` FOREIGN KEY (`ALIAS`) REFERENCES `usuarios` (`ALIAS`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `practica`
--

LOCK TABLES `practica` WRITE;
/*!40000 ALTER TABLE `practica` DISABLE KEYS */;
INSERT INTO `practica` VALUES ('Administrador','1'),('Ana Isabel','1'),('Arsus','1'),('Batman','1'),('Jesus Miguel','1'),('Mario','1');
/*!40000 ALTER TABLE `practica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sugerencias`
--

DROP TABLE IF EXISTS `sugerencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sugerencias` (
  `COD_Sugerencia` int NOT NULL AUTO_INCREMENT,
  `ALIAS` varchar(40) NOT NULL,
  `APARTADO` varchar(40) NOT NULL,
  `TEXTO` varchar(200) NOT NULL,
  PRIMARY KEY (`COD_Sugerencia`),
  KEY `ALIAS` (`ALIAS`),
  CONSTRAINT `sugerencias_ibfk_1` FOREIGN KEY (`ALIAS`) REFERENCES `usuarios` (`ALIAS`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sugerencias`
--

LOCK TABLES `sugerencias` WRITE;
/*!40000 ALTER TABLE `sugerencias` DISABLE KEYS */;
INSERT INTO `sugerencias` VALUES (1,'Batman','Lectura','Seguir así, y ¿Cuál será el siguiente hobbie?');
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
  `WEB` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`COD_TIENDA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tiendas`
--

LOCK TABLES `tiendas` WRITE;
/*!40000 ALTER TABLE `tiendas` DISABLE KEYS */;
INSERT INTO `tiendas` VALUES ('AL0001','ALBACETE','Albacete','La Casa del Libro','C. Marqués de Molins, 9, 02001 Albacete','911 79 34 63','1','https://res.cloudinary.com/westfielddg/image/upload/westfield-media/es/retailer/logos/iprlflymktju24s6lvrl.png','www.casadellibro.com'),('AL0002','ALBACETE','Albacete','Popular Libros','C. Octavio Cuartero, 12 y 17','967 22 58 63','1','https://www.feda.es/media/k2/items/cache/07e2c198d30cfdd337738c532b11aa76_L.jpg',''),('AL0003','ALBACETE','Albacete','Libreria Circus','C. San Antonio, 11, 02001 Albacete','967 61 59 82','1','https://pbs.twimg.com/profile_images/465871217233104897/UUq4vLSX_400x400.jpeg',''),('AL0004','ALBACETE','Albacete','Librería Herso','C. Dionisio Guardiola, 18','967 50 71 57','1','https://www.feda.es/media/k2/items/cache/5b0bbbe1ce92c3688a24a1ee0aa4143e_L.jpg',''),('AL0005','ALBACETE','Albacete','Librería Nemo','C. Dr. Collado Piña, 10','967 03 37 58','1','https://albacetecapital.com/wp-content/uploads/2020/09/unnamed.jpg',''),('AL0006','ALBACETE','Albacete','Libreria El Maestro','C. Gaona, 1, 02002 Albacete','967 21 61 97','1','https://www.feda.es/media/k2/items/cache/0a877828533e893a5b9769db5c51c805_XL.jpg',''),('AL0008','ALBACETE','Albacete','Casa del Libro','C. Reino oscuro 9','911 79 34 63','1','https://imagessl.casadellibro.com/t1e/c/63/100ANOS_370X200.jpg',''),('AL3333','ALBACETE','Albacete','La Casa del Libro','C. Marqués de Molins, 9, 02001 Albacete','911 79 34 63','1','https://res.cloudinary.com/westfielddg/image/upload/westfield-media/es/retailer/logos/iprlflymktju24s6lvrl.png','www.casadellibro.com'),('CR0001','Ciudad Real','C.Real','Librería Seendipia','C. de Calatrava, 24','926 92 16 20','1','https://www.libreriaserendipia.com/images/logo.png',NULL),('CR0002','Ciudad Real','C.Real','Librería Litec','Av. Alfonso X el Sabio, 11','926 21 47 83','1','https://www.librerialitec.es/es/images/235/235-logo.jpg',NULL),('CR0003','Ciudad Real','C.Real','Librería Especia ZZ','C. Paz, 1','651 56 76 31','1','https://www.miciudadreal.es/wp-content/uploads/2014/12/Espacio-zz-01.jpg',NULL),('CR0004','Ciudad Real','C.Real','Librería LEYPE','Rda. de Calatrava, 16','926 22 34 14','1','https://www.leype.es/media/logo/default/material-oficina-leype.jpg',NULL),('CR0005','Ciudad Real','C.Real','Casa Ruiz Morote','C. Libertad, 3','926 22 35 52','1','https://www.todostuslibros.com/storage/img/133/LOGO%20RUIZ%20MOROTE.png',NULL),('CR0006','Ciudad Real','C.Real','Librería Kairos','C. Huertos, s/n','926 22 06 32','1','https://www.papeleriascercademi.com/wp-content/uploads/2023/01/AF1QipOd2zW06CywALYNPfoHrZsahWQ2EeQ7-XkKJgz3w408-h306-k-no.jpeg',NULL),('CU0001','Cuenca','Cuenca','Librería Toro Ibérico','C. de Colón, 32, 16002 Cuenca','636 23 51 63','1','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDg-gdGfR2ctW4oSj5Kie-LfnuJdCVKbxNVw&usqp=CAU',NULL),('CU0002','Cuenca','Cuenca','El Principito','C. Cristóbal Halffter, 12, 16004 Cuenca','969 69 39 39','1','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHln1MJ0ezeTd_4uD-g-NxaNEZjrjHIbzZ8kkZm21s9JjLdDBFbFPuFdTVD1uc_zn7fPg&usqp=CAU',NULL),('CU0003','Cuenca','Cuenca','Evangelio','Pl. la Hispanidad, 1, 16001 Cuenca','969 21 21 81','1','https://cuencaescomercio.es/sites/cuencaComercio/files/libreria_evangelio_1.jpg',NULL),('CU0004','Cuenca','Cuenca','Juan Evangelio','C. Carretería, 19, 16002 Cuenca','969 70 05 35','1','https://www.papeleriascercademi.com/wp-content/uploads/2023/01/AF1QipOuif51_8yR7CPceFsDGM5eb6hrqOUiAVOEGW07w408-h544-k-no.jpeg',NULL),('CU0005','Cuenca','Cuenca','Librería Lorca','C. de Colón, 76, 16002 Cuenca','969 69 24 69','1','https://www.librerialorcacuenca.com/es/images/288/288-logo-mejorado-20.png',NULL),('CU0006','Cuenca','Cuenca','Librería Papelería Iremar','Av del Mediterráneo, 17, 16004 Cuenca','969 23 42 55','1','https://3.bp.blogspot.com/-tMRu9jyuL-4/T5g7Pca3izI/AAAAAAAAAAw/xcPUlAivk_E/s400/libreria%2Biremar%2Btarjeta%2B1.png',NULL),('CU0007','Cuenca','Cuenca','Super Mario Brothers','C. Tuberia Oxidada 2','111 22 33 44','1','https://i.blogs.es/94ebe9/super-mario-bros-pelicula-critica-resena-opinion-1-/1366_2000.jpeg',NULL),('CU0008','Cuenca','Cuenca','Librería Peach','C. de Colón, 76, 16002 Cuenca','969 69 24 69','1','https://www.vanguardia.com/binrepository/1200x731/0c52/1200d628/upper-right/12204/NREP/super-mario-bros-movie-el-origen-de-peach-jpg-976912859_8187546_20230411141459.jpg',NULL),('CU0009','Cuenca','Cuenca','Librería Lorca','C. de Colón, 76, 16002 Cuenca','969 69 24 69','1','https://www.leype.es/media/logo/default/material-oficina-leype.jpg',NULL),('CU1111','ALBACETE','Albacete','Libreria Prueba','C. San Antonio, 11, 02001 Albacete','967 61 59 82','1','https://pbs.twimg.com/profile_images/465871217233104897/UUq4vLSX_400x400.jpeg',NULL),('GU0001','Guadalajara','Guadalajara','Librería LUA','C. de la Virgen de la Soledad, 14','949 21 06 88','1','https://multimedia.paginasamarillas.es/adsContentSrv/13602370-1-AeT6zlujWe/5b9529eb-7c27-4803-91ca-95235c34beb3/13602370-1-AeT6zlujWe1541417860438.png',NULL),('GU0002','Guadalajara','Guadalajara','Librería Emilio Cobos','C. Mayor, 34','949 22 67 94','1','https://www.guadalajaradiario.es/images/mini/images/2020/02/2/Cobos-Libreria-610x458.jpg',NULL),('GU0003','Guadalajara','Guadalajara','Librería Papeleria Carma','C. de Julian Besteiro, 11','949 20 36 54','1','https://acepazuqueca.org/wp-content/uploads/2020/08/papeleriaNuria_02.jpg',NULL),('GU0004','Guadalajara','Guadalajara','AACHE Ediciones de Guadalajara','C. Malvarrosa, 2','949 22 04 38','1','https://aache.com/wp-content/uploads/2016/09/logo_new.jpg',NULL),('GU0005','Guadalajara','Guadalajara','Librería Papelería Avenida','Av. del Ejercito, 21','949 22 94 53','1','https://pr0.nicelocal.es/iZgSdSuEd9J_QmMxkeY3CA/1120x700,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2cTqac5prVpBrCgPOzKwSXW5KC-mrYWjY1EBrWAYbJzhNdJ80SnUfTaTKDs3x62c5A',NULL),('GU0006','Guadalajara','Guadalajara','Librería Redondo','C. de Sigüenza, 8','949 22 37 72','1','https://www.guadalajara.es/recursos/img/portal/2018/01/04/inauguracion-de-la-feria-del-libro.jpg',NULL),('MA0001','Madrid','Madrid','Casa Joven','C. de Alcalá, 180','917 25 87 38','1','https://www.telemadrid.es/2020/11/12/programas/toc-toc---se-puede/Libreria-Miguel-Miranda_2286081429_9773025_1300x731.jpg',NULL),('MA0002','Madrid','Madrid','Librería Menosdiez','C. del Espejo, 5, 28013','656 79 31 57','1','https://comercioshistoricosdemadrid.com/wp-content/uploads/2020/12/calle-del-Espejo-cerca-de-la-calle-de-Santiago_-Libros-Menosdiez-IMG_9452-2019.jpg',NULL),('MA0003','Madrid','Madrid','Librería Pérez Galdós','C. de Hortaleza, 5, 28004','915 31 26 40','1','https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2020/03/08101843/libreria-perez-galdos-2.jpg',NULL),('MA0004','Madrid','Madrid','LLibrería Mary Read','C. del Marques de Toca, 3, 28012','683 12 76 38','1','https://maryread.es/wp-content/uploads/2021/04/MARY_READ_IMG_TXT_COLORchico2.png',NULL),('MA0005','Madrid','Madrid','Crazy Mary Librería & Co','C. de Echegaray, 32, 28014','914 38 49 77','1','https://city-confidential.com/img/plans/crazy-mary-libreria-madrid.png',NULL),('MA0006','Madrid','Madrid','Librería Antonio Machado','C. del Marqués de Casa Riera, 2, 28014','915 23 70 66','1','https://www.machadolibros.com/images/bloques_sliders/007-es-photostudio_1668472494953.webp',NULL),('TO0001','Toledo','Toledo','Librería Taiga','Travesia Gregorio Ramirez,2','925 22 90 97','1','https://acalanda.com/wp-content/uploads/2014/09/taiga.jpg',NULL),('TO0002','Toledo','Toledo','Librería HojaBlanca SL','C. Martin Gamero, 6','925 25 57 53','1','https://hojablanca.es/wp-content/uploads/2018/07/logo_phantom_retina.jpg',NULL),('TO0003','Toledo','Toledo','Librería Astrolabio','Av. de Europa, 18','925 57 53','1','https://s3.abcstatics.com/media/espana/2016/01/14/hoja--510x287.JPG',NULL),('TO0004','Toledo','Toledo','librería Taiga','Centro Comercial Luz del Tajo','925 04 05 85','1','https://acalanda.com/wp-content/uploads/2014/09/taiga.jpg',NULL),('TO0005','Toledo','Toledo','Librería Garabato','Alberche s/n Centro Comercial G, 45007','925 24 08 27','1','https://tiendasg.com/wp-content/uploads/2019/10/logo_garabato.jpg',NULL),('TO0006','Toledo','Toledo','Librería El Tintero','C. de Mejico, 10, 450004','925 05 56 54','1','https://www.eltinterotoledo.com/es/images/223/223-logo.jpg',NULL);
/*!40000 ALTER TABLE `tiendas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tiene`
--

DROP TABLE IF EXISTS `tiene`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tiene` (
  `COD_TIENDA` varchar(6) NOT NULL,
  `ID_HOBBIE` varchar(3) NOT NULL,
  PRIMARY KEY (`COD_TIENDA`,`ID_HOBBIE`),
  KEY `FK_hobbieTienda` (`ID_HOBBIE`),
  CONSTRAINT `FK_hobbieTienda` FOREIGN KEY (`ID_HOBBIE`) REFERENCES `hobbie` (`ID_HOBBIE`),
  CONSTRAINT `FK_Tienda` FOREIGN KEY (`COD_TIENDA`) REFERENCES `tiendas` (`COD_TIENDA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tiene`
--

LOCK TABLES `tiene` WRITE;
/*!40000 ALTER TABLE `tiene` DISABLE KEYS */;
INSERT INTO `tiene` VALUES ('AL0001','1'),('AL0002','1'),('AL0003','1'),('AL0004','1'),('AL0005','1'),('AL0006','1'),('AL0008','1'),('AL3333','1'),('CR0001','1'),('CR0002','1'),('CR0003','1'),('CR0004','1'),('CR0005','1'),('CR0006','1'),('CU0001','1'),('CU0002','1'),('CU0003','1'),('CU0004','1'),('CU0005','1'),('CU0006','1'),('CU0007','1'),('CU0008','1'),('CU0009','1'),('CU1111','1'),('GU0001','1'),('GU0002','1'),('GU0003','1'),('GU0004','1'),('GU0005','1'),('GU0006','1'),('MA0001','1'),('MA0002','1'),('MA0003','1'),('MA0004','1'),('MA0005','1'),('MA0006','1'),('TO0001','1'),('TO0002','1'),('TO0003','1'),('TO0004','1'),('TO0005','1'),('TO0006','1');
/*!40000 ALTER TABLE `tiene` ENABLE KEYS */;
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
INSERT INTO `usuarios` VALUES ('Administrador','1989-11-09','Cuenca','jes11989@hotmail.com','$2y$10$5AjvviebbxqFoeiZ3WHNMOLkAhXvT8Cv4sm5/KakcJ9N0BvLUYoH6',NULL,'OK','9999-03-26'),('Ana Isabel','1994-09-27','Cuenca','anaisa_villaperi@hotmail.es','$2y$10$tWWOAWrr3lM/1u1o30TWzu60SnKfi70zvGs62k1nGMbQYSdwXOEpu','./fotoPerfiles/Ana Isabel.png','OK','9999-01-01'),('Arsus','1989-11-09','Cuenca','jmjimenezd08@gmail.com','$2y$10$WMA0GR9wVC.tCESLcub2temlwYFnYuUe18fbvjc37gZb9wmMr5ChC','./fotoPerfiles/Arsus.png','OK','9999-01-01'),('Batman','1980-05-04','C.Real','jes11989@hotmail.com','$2y$10$DYyFCIUXVKw5HZX0cMjZKunRS/CN/5HmfcmwZ7u1zA3QIMmKv6zsG','./fotoPerfiles/Aquaman.png','OK','9999-01-01'),('Jesus Miguel','1989-11-09','Toledo','jes11989@hotmail.com','$2y$10$OmR.k9G5X.cPVpKeHlX91e.z2BKh.as/7svwVc3iQoESCKHnSWgd.','./fotoPerfiles/Jesus Miguel.jpeg','OK','9999-03-26'),('Mario','1999-10-17','Guadalajara','jes11989@hotmail.com','$2y$10$PsrUcVwuG9OXNVQqdrFxmOd1cUL5UgAUYWkcLI2AkCpIcPaxwaYOO','./fotoPerfiles/Mario.jpeg','OK','9999-03-26');
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

-- Dump completed on 2023-05-24  9:24:24
