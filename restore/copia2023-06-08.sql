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
INSERT INTO `blacklist` VALUES (82,'Jesus Miguel','9999-01-01','Prueba'),(62,'Mario','9999-01-01','por metalero'),(79,'Mario','9999-01-01','Por metalero'),(83,'Mario','9999-01-01','Por metalero');
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
INSERT INTO `hobbie` VALUES ('1','Lectura');
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
INSERT INTO `libros` VALUES ('0345313585','Yolanda','1984 Spring',',Arthur C. Clarke','264','https://covers.openlibrary.org/b/id/11300223-M.jpg','SI',1,'Ballantine Books',''),('034549816X','Jesus Miguel','Mass Effect: Revelation','undefined','0','https://covers.openlibrary.org/b/id/212568-M.jpg','SI',3,'Del Rey','Precuela del capitán Anderson, no llega al nivel de la historia principal, pero no esta mal'),('0425287947','Yolanda','The Gruffalo',',Julia Donaldson','32','https://covers.openlibrary.org/b/id/13746123-M.jpg','SI',3,'Puffin/Penguin Books, New York',''),('060630424X','Jesus Miguel','Viaje Al Centro de La Tierra','Jules Verne','194','https://covers.openlibrary.org/b/id/1315270-M.jpg','SI',4,'Turtleback Books Distributed by Demco Media',NULL),('0833589342','Jesus Miguel','Jurassic Park','Michael Crichton','450','https://covers.openlibrary.org/b/id/1578750-M.jpg','SI',3,'Longman',NULL),('0972028730','Mario','Alamut','Vladimir Bartol','477','https://covers.openlibrary.org/b/id/737566-M.jpg','NO',0,'Scala House Publishers',NULL),('1421589613','Jesus Miguel','The Legend of Zelda','Akira Himekawa','386','https://covers.openlibrary.org/b/id/13010840-M.jpg','SI',3,'VIZ Media','No esta mal, pero mejor los juegos'),('1595824812','Jesus Miguel','Mass effect - redemption',',Mac Walters,John Jackson Miller,Omar Francia,Michael Atiyeh','588','https://covers.openlibrary.org/b/id/6455386-M.jpg','NO',0,'Dark Horse Comics','undefined'),('1647220823','Yolanda','Harry Potter',',Insight Editions','64','https://covers.openlibrary.org/b/id/13165191-M.jpg','SI',4,'Insight Editions',''),('1841499854','Jesus Miguel','Mass Effect',',William C. Dietz','336','https://covers.openlibrary.org/b/id/10720342-M.jpg','NO',0,'Little, Brown Young Readers',''),('2080701975','Yolanda','El ingenioso hidalgo Don Quijote de la Mancha',',Miguel de Cervantes Saavedra','533','https://covers.openlibrary.org/b/id/2140454-M.jpg','NO',0,'GF Flammarion','undefined'),('6257966485','Yolanda','Moby Dick',',Herman Melville','128','https://covers.openlibrary.org/b/id/12259489-M.jpg','SI',3,'Zeplin Kitap',''),('8401354455','Jesus Miguel','El invierno del mundo',',Ken Follett','64','https://covers.openlibrary.org/b/id/12334470-M.jpg','SI',4,'PLAZA & JANES','Un libro muy inmersivo, parece que estas viviendo la situación en cada página '),('8408117114','Jesus Miguel','Circo Máximo','Santiago Posteguillo Gomez','1200','https://covers.openlibrary.org/b/id/7263754-M.jpg','SI',4,'Ediciones B, S.A.',NULL),('8408240110','Yolanda','Furia',',Tracy Wolff,Vicky Charques','800','https://covers.openlibrary.org/b/id/10737640-M.jpg','SI',4,'Editorial Planeta',''),('8408252968','Yolanda','Hasta que nos quedemos sin estrellas',',Inma Rubiales','576','https://covers.openlibrary.org/b/id/12638372-M.jpg','NO',0,'Planeta','undefined'),('8413141451','Jesus Miguel','Las legiones malditas','Santiago Posteguillo','864','https://covers.openlibrary.org/b/id/13712850-M.jpg','SI',4,'Ediciones B, Grupo Zeta',NULL),('8413141451','Yolanda','Las legiones malditas','Santiago Posteguillo','864','https://covers.openlibrary.org/b/id/13712850-M.jpg','SI',3,'Ediciones B, Grupo Zeta',''),('8417305777','Yolanda','Bruja Negra',',Laurie Forest','608','https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg','SI',5,'Roca Editorial',''),('8418173149','Ana Isabel','Harry Potter y la Orden del Fénix','J.K. Rowling, Jim Kay, Gemma Rovira Ortega','928','https://covers.openlibrary.org/b/id/14171971-M.jpg','NO',0,'Salamandra Bolsillo',''),('8419283533','Yolanda','Prisionera de Oro. una Jaula Dorada Sigue Siendo u...',',Raven Kennedy','400','https://covers.openlibrary.org/b/id/13447239-M.jpg','NO',0,'Penguin Random House Grupo Editorial',''),('8420460494','Jesus Miguel','El italiano','Arturo Pérez-Reverte','396','https://covers.openlibrary.org/b/id/11981448-M.jpg','SI',3,'Alfaguara',NULL),('8437604389','Yolanda','Fortunata y Jacinta',',Benito Pérez Galdós','818','https://covers.openlibrary.org/b/id/4909738-S.jpg','SI',3,'Ediciones Catedra S.A.','Menuda obra maestra'),('8445011049','Jesus Miguel','Crónicas de la Dragonlance nº 01/03 El retorno de los dragones','Margaret Weis','504','https://covers.openlibrary.org/b/id/14119374-M.jpg','SI',3,'Minotauro','Una historia muy ligerita'),('8466356894','Jesus Miguel','Fuego y sangre',',George R.R. Martin,Doug Wheatley','888','https://covers.openlibrary.org/b/id/14060676-M.jpg','NO',0,'DEBOLSILLO',''),('8466615601','Jesus Miguel','El vigía',',James L. Nelson','372','https://covers.openlibrary.org/b/id/7885059-M.jpg','SI',3,'Ediciones B, S.A.','libro ligerito sobre la piratería y la sociedad de la Virginia colonial'),('8466615601','Mario','El vigía',',James L. Nelson','372','https://covers.openlibrary.org/b/id/7885059-M.jpg','SI',3,'Ediciones B, S.A.','Marlowe, salvador o villano?'),('8466637680','Jesus Miguel','Las legiones malditas','Santiago Posteguillo Gomez','855','https://covers.openlibrary.org/b/id/6593993-M.jpg','SI',5,'Ediciones B, Grupo Zeta',NULL),('8466639322','Yolanda','Africanus',',Santiago Posteguillo Gomez','712','https://covers.openlibrary.org/b/id/12657202-M.jpg','NO',0,'Ediciones B, S.A.',''),('8466640150','Jesus Miguel','africanus el hijo del consul','SANTIAGO POSTEGUILLO','720','https://covers.openlibrary.org/b/id/13887606-M.jpg','SI',4,'Ediciones B, S.A.',''),('8466669418','Jesus Miguel','La dama púrpura','Javier Torras de Ugarte','752','https://covers.openlibrary.org/b/id/11290941-M.jpg','NO',0,'B (Ediciones B)',''),('8467871318','Yolanda','La celestina',',Mariona Mas Bassas,Fernando de Rojas,Dani Soms Bach','272','https://covers.openlibrary.org/b/id/13573502-M.jpg','SI',3,'ANAYA INFANTIL Y JUVENIL','0/10'),('8478888624','Yolanda','Harry Potter and the Chamber of Secrets',',J. K. Rowling,J. K. Rowling','341','https://covers.openlibrary.org/b/id/1048187-M.jpg','SI',3,'Salamandra',''),('8481302066','Jesus Miguel','El Señor de las moscas  ','William Golding','260','https://covers.openlibrary.org/b/id/12726817-M.jpg','SI',4,'Unidad Editorial','Buen libro , me trae buenos recuerdos de cuando lo lei de niño'),('8483008165','Jesus Miguel','Aléxandros','Valerio Manfredi','0','https://covers.openlibrary.org/b/id/11876876-M.jpg','NO',0,'Columna',''),('8491296530','Yolanda','El juego del alma',',Javier Castillo','532','https://covers.openlibrary.org/b/id/13530234-M.jpg','SI',5,'SUMA',''),('8496173151','Jesus Miguel','BAUTISMO DE FUEGO -F.30/BIBLIOPOLIS-UDL',',Andrzej Sapkowski,José María Faraldo Jarillo','0','https://covers.openlibrary.org/b/id/8772065-M.jpg','SI',4,'','Una saga bastante buena, lastima que el autor no siguiera con ella'),('8496208605','Jesus Miguel','Festín de cuervos','undefined','0','https://covers.openlibrary.org/b/id/10584233-M.jpg','SI',4,'Gigamesh',''),('8498386330','Ana Isabel','Harry Potter y el prisionero de Azkaban',',J.K. Rowling,Jim Kay,Adolfo Muñoz García,Nieves Martín Azofra','360','https://covers.openlibrary.org/b/id/14171619-M.jpg','NO',0,'Salamandra Infantil y Juvenil',''),('8498890373','Jesus Miguel','El ultimo deseo / La saga de Geralt de Rivia 1',',Andrzej Sapkowski','0','https://covers.openlibrary.org/b/id/8745351-M.jpg','SI',4,'Alamut',''),('8499892418','Yolanda','SENTIDO Y SENSIBILIDAD',',Núria Pradas,Marta Ponce,Jane Austen','376','https://covers.openlibrary.org/b/id/10530555-M.jpg','SI',3,'Debolsillo',''),('9500725185','Yolanda','Legado de James Potter, El - Harry Potter',',Potter Harry,Grijalbo','0','https://covers.openlibrary.org/b/id/5230378-M.jpg','SI',5,'Sudamericana',''),('9506442541','Jesus Miguel','DANZA DE DRAGONES',',MARTIN','0','https://covers.openlibrary.org/b/id/12340662-M.jpg','NO',0,'PLAZA & JANES EDITORES','undefined'),('9758240579','Jesus Miguel','Dune',',Brian Herbert','0','https://covers.openlibrary.org/b/id/12352461-M.jpg','NO',0,'Kabalci Yayinevi','undefined'),('9780345520722','Jesus Miguel','Mass Effect Retribution',',Drew Karpyshyn','336','https://covers.openlibrary.org/b/id/12394459-M.jpg','SI',4,'Del Rey/Ballantine Books',''),('9780753822944','Ana Isabel','El sol de Breda','Arturo Pérez-Reverte','257','https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg','SI',5,'Alfaguara','Lo lei por insistencia, y termine leyendo la saga entera'),('9780753822944','Jesus Miguel','El sol de Breda','Arturo Pérez-Reverte','257','https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg','SI',5,'Alfaguara','Probablemente el mejor de los libros de Alatriste'),('9780753822944','Mario','El sol de Breda','Arturo Pérez-Reverte','257','https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg','SI',4,'Alfaguara','O capitán mi capitán'),('9780757914607','Ana Isabel','Harry Potter and The Chamber of Secrets','John Williams','22','https://covers.openlibrary.org/b/id/1416124-M.jpg','SI',4,'Warner Bros. Publications','Fotos de la pelicula'),('9781338218398','Ana Isabel','Harry Potter (series) 1-7','J. K. Rowling','3433','https://covers.openlibrary.org/b/id/8565476-M.jpg','SI',4,'',''),('9781338218398','Yolanda','Harry Potter (series) 1-7','J. K. Rowling','3433','https://covers.openlibrary.org/b/id/8565476-M.jpg','SI',5,'',''),('9781436240611','Jesus Miguel','El oro del rey','Arturo Pérez-Reverte','267','https://covers.openlibrary.org/b/id/6393734-M.jpg','SI',3,'DEBOLSILLO',NULL),('9781519298119','Yolanda','Moby Dick',',Herman Melville','388','https://covers.openlibrary.org/b/id/13337042-M.jpg','NO',0,'CreateSpace Independent Publishing Platform','undefined'),('9781784042158','Mario','Tales of Mystery and Imagination ',',Edgar Allan Poe','382','https://covers.openlibrary.org/b/id/8416614-M.jpg','NO',0,'Arcturus Publishing Limited',''),('9781860462849','Jesus Miguel','La piel del tambor','Arturo Pérez-Reverte','515','https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg','NO',0,'Harvill Press',''),('9783899408201','Ana Isabel','Harry Potter and the Deathly Hallows','J. K. Rowling','695','https://covers.openlibrary.org/b/id/8183633-M.jpg','NO',0,'Der Hörverlag',''),('9786073108324','Jesus Miguel','VIEJO Y EL MAR, EL',',ERNEST HEMINGWAY','208','https://covers.openlibrary.org/b/id/13179108-M.jpg','SI',4,'DEBOLSILLO',''),('9788408127857','Jesus Miguel','Pacto de lealtad',',Gonzalo Giner','640','https://covers.openlibrary.org/b/id/7334957-M.jpg','NO',0,'Planeta',''),('9788408141907','Yolanda','Hola, ¿te acuerdas de mí?',',Megan Maxwell','452','https://covers.openlibrary.org/b/id/7351344-M.jpg','SI',5,'',''),('9788408151081','Jesus Miguel','La legión perdida',',Santiago Posteguillo','1152','https://covers.openlibrary.org/b/id/7398805-M.jpg','SI',4,'',NULL),('9788408176527','Jesus Miguel','Los asesinos del emperador',',Santiago Posteguillo','1240','https://covers.openlibrary.org/b/id/12341260-M.jpg','SI',4,'Booket',''),('9788408186823','Yolanda','El laberinto de los espíritus',',Carlos Ruiz Zafón','818','https://covers.openlibrary.org/b/id/10516546-M.jpg','SI',3,'Editorial Planeta',''),('9788408232995','Yolanda','Anhelo',',Tracy Wolff,Vicky Charques','672','https://covers.openlibrary.org/b/id/11298487-M.jpg','SI',3,'Planeta',''),('9788417649265','Jesus Miguel','Life Is Strange',',Vieceli Emma','0','https://covers.openlibrary.org/b/id/12598206-M.jpg','SI',4,'Heroes De Papel',''),('9788417649272','Jesus Miguel','Legado del lobo blanco el universo de geralt de ri...','undefined','0','https://covers.openlibrary.org/b/id/13619041-M.jpg','SI',4,'Héroes de Papel',''),('9788419283832','Yolanda','Brillo',',Raven Kennedy,María Angulo Fernández','684','https://covers.openlibrary.org/b/id/13449717-M.jpg','NO',0,'Roca Editorial',''),('9788420454665','Administrador','Línea de fuego',',Arturo Pérez-Reverte','672','https://covers.openlibrary.org/b/id/10473632-M.jpg','NO',5,'Alfaguara',''),('9788420454665','Jesus Miguel','Línea de fuego',',Arturo Pérez-Reverte','672','https://covers.openlibrary.org/b/id/10473632-M.jpg','SI',4,'Alfaguara',''),('9788420454665','Yolanda','Línea de fuego',',Arturo Pérez-Reverte','672','https://covers.openlibrary.org/b/id/10473632-M.jpg','NO',0,'',''),('9788445005088','Mario','Las Hijas de Tara','Laura Gallego','320','https://covers.openlibrary.org/b/id/10485525-M.jpg','SI',3,'Minotauro',''),('9788445073124','Jesus Miguel','La Caida de Numenor','Christopher John Reuel Tolkien','368','https://covers.openlibrary.org/b/id/1047650-M.jpg','NO',0,'Minotauro',''),('9788447127917','Jesus Miguel','Silencio',',Jeph Loeb','0','https://covers.openlibrary.org/b/id/12728788-M.jpg','SI',4,'Salvat',''),('9788466320535','Jesus Miguel','El capitán Alatriste','Arturo Pérez-Reverte','240','https://covers.openlibrary.org/b/id/10087995-M.jpg','SI',4,'Alfaguara',NULL),('9788466320535','Yolanda','El capitán Alatriste','Arturo Pérez-Reverte','240','https://covers.openlibrary.org/b/id/10087995-M.jpg','NO',4,'',''),('9788466341783','Jesus Miguel','Los pilares de la tierra',',Ken Follett','0','https://covers.openlibrary.org/b/id/12569089-M.jpg','NO',0,'Random House Mondadori',''),('9788466350174','Yolanda','El Ruiseñor',',Kristin Hannah,Laura Vidal','592','https://covers.openlibrary.org/b/id/14061168-M.jpg','SI',2,'Debolsillo',''),('9788466640824','Jesus Miguel','La traición de Roma',',Santiago Posteguillo Gomez','866','https://covers.openlibrary.org/b/id/8185466-M.jpg','SI',5,'Penguin',''),('9788466671781','Jesus Miguel','Roma soy yo : La verdadera historia de Julio César...',',Santiago Posteguillo','752','https://covers.openlibrary.org/b/id/12937757-M.jpg','NO',0,'Ediciones B','undefined'),('9788467213560','Jesus Miguel','La saga de Geralt de Rivia','undefined','0','https://covers.openlibrary.org/b/id/7891168-M.jpg','SI',4,'Circulo de lectores',''),('9788484413059','Jesus Miguel','Vampiratas / Vampirates',',Justin Somper','285','https://covers.openlibrary.org/b/id/4914966-M.jpg','SI',3,'Montena S a Ediciones',''),('9788492819171','Mario','Tatuaje','Ana Alonso','427','https://covers.openlibrary.org/b/id/9034999-M.jpg','SI',4,'',NULL),('9788496208490','Jesus Miguel','Juego de tronos',',George R.R. Martin,Enrique Jiménez Corominas,Cristina Macía','0','https://covers.openlibrary.org/b/id/10584235-M.jpg','SI',5,'Gigamesh',''),('9788498389395','Yolanda','Harry Potter y la piedra filosofal',',J.K. Rowling,Jim Kay,Alicia Dellepiane Rawson','256','https://covers.openlibrary.org/b/id/14171595-M.jpg','SI',5,'Salamandra Infantil y Juvenil','Libro de 10, hacemos relectura? '),('9788877548948','Yolanda','La vida de Lazarillo de Tormes, y de sus fortunas ...','undefined','136','https://covers.openlibrary.org/b/id/3337179-M.jpg','SI',3,'Cideb Editrice',''),('9789584275097','Yolanda','Yo, Julia',',Santiago Posteguillo','0','https://covers.openlibrary.org/b/id/12820046-M.jpg','NO',0,'Planeta / Minotauro','undefined'),('9879423194','Jesus Miguel','20.000 Leguas de Viaje Submarino','Jules Verne','448','https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg','SI',3,'',NULL),('9955080876','Yolanda','Harry Potter and the Prisoner of Azkaban',',J. K. Rowling','416','https://covers.openlibrary.org/b/id/1056062-M.jpg','SI',4,'Alma Littera','');
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
INSERT INTO `practica` VALUES ('Administrador','1'),('Ana Isabel','1'),('Jesus Miguel','1'),('Mario','1'),('Yolanda','1');
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
INSERT INTO `sugerencias` VALUES (2,'Jesus Miguel','libros','cual será el siguiente hobie en entrar en la web?'),(3,'Jesus Miguel','libros','cual será el siguiente hobie en entrar en la web?');
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
INSERT INTO `tiendas` VALUES ('AL0001','ALBACETE','Albacete','Librería Herso','C. Dionisio Guardiola, 18','967 50 71 57','1','https://www.feda.es/media/k2/items/cache/5b0bbbe1ce92c3688a24a1ee0aa4143e_L.jpg','www.google.es'),('AL0002','ALBACETE','Albacete','Popular Libros','C. Octavio Cuartero, 12 y 17','967 22 58 63','1','https://www.feda.es/media/k2/items/cache/07e2c198d30cfdd337738c532b11aa76_L.jpg','www.popularlibros.com'),('AL0003','ALBACETE','Albacete','Libreria Circus','C. San Antonio, 11, 02001 Albacete','967 61 59 82','1','https://pbs.twimg.com/profile_images/465871217233104897/UUq4vLSX_400x400.jpeg','www.libreriacircus.com'),('AL0004','ALBACETE','Albacete','Librería Herso','C. Dionisio Guardiola, 18','967 50 71 57','1','https://www.feda.es/media/k2/items/cache/5b0bbbe1ce92c3688a24a1ee0aa4143e_L.jpg','www.google.es'),('AL0005','ALBACETE','Albacete','Librería Nemo','C. Dr. Collado Piña, 10','967 03 37 58','1','https://albacetecapital.com/wp-content/uploads/2020/09/unnamed.jpg','www.google.es'),('AL0006','ALBACETE','Albacete','Libreria El Maestro','C. Gaona, 1, 02002 Albacete','967 21 61 97','1','https://www.feda.es/media/k2/items/cache/0a877828533e893a5b9769db5c51c805_XL.jpg',''),('CR0001','Ciudad Real','C.Real','Librería Seendipia','C. de Calatrava, 24, 13003 Ciudad Real','926 92 16 20','1','https://www.libreriaserendipia.com/images/logo.png',NULL),('CR0002','Ciudad Real','C.Real','Librería Litec','Av. Alfonso X el Sabio, 11, LOCAL, 13001 Ciudad Real','926 21 47 83','1','https://www.librerialitec.es/es/images/235/235-logo.jpg',NULL),('CR0003','Ciudad Real','C.Real','Librería Espacio ZZ','C. Paz, 1, 13003 Ciudad Real','651 56 76 31','1','https://www.miciudadreal.es/wp-content/uploads/2014/12/Espacio-zz-01.jpg',NULL),('CR0004','Ciudad Real','C.Real','Librería LEYPE','Rda. de Calatrava, 16','926 22 34 14','1','https://www.leype.es/media/logo/default/material-oficina-leype.jpg',NULL),('CR0005','Ciudad Real','C.Real','Casa Ruiz Morote','C. Libertad, 3, 13003 Ciudad Real','926 22 35 52','1','https://www.todostuslibros.com/storage/img/133/LOGO%20RUIZ%20MOROTE.png',NULL),('CR0006','Ciudad Real','C.Real','Librería Kairos','C. Huertos, 1, 13001 Ciudad Real','926 22 06 32','1','https://www.papeleriascercademi.com/wp-content/uploads/2023/01/AF1QipOd2zW06CywALYNPfoHrZsahWQ2EeQ7-XkKJgz3w408-h306-k-no.jpeg',NULL),('CU0001','Cuenca','Cuenca','Librería Toro Ibérico','C. de Colón, 32, 16002 Cuenca','636 23 51 63','1','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDg-gdGfR2ctW4oSj5Kie-LfnuJdCVKbxNVw&usqp=CAU',NULL),('CU0002','Cuenca','Cuenca','El Principito','C. Cristóbal Halffter, 12, 16004 Cuenca','969 69 39 39','1','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHln1MJ0ezeTd_4uD-g-NxaNEZjrjHIbzZ8kkZm21s9JjLdDBFbFPuFdTVD1uc_zn7fPg&usqp=CAU',NULL),('CU0003','Cuenca','Cuenca','Evangelio','Pl. la Hispanidad, 1, 16001 Cuenca','969 21 21 81','1','https://cuencaescomercio.es/sites/cuencaComercio/files/libreria_evangelio_1.jpg',NULL),('CU0004','Cuenca','Cuenca','Juan Evangelio','C. Carretería, 19, 16002 Cuenca','969 70 05 35','1','https://www.papeleriascercademi.com/wp-content/uploads/2023/01/AF1QipOuif51_8yR7CPceFsDGM5eb6hrqOUiAVOEGW07w408-h544-k-no.jpeg',NULL),('CU0005','Cuenca','Cuenca','Librería Lorca','C. de Colón, 76, 16002 Cuenca','969 69 24 69','1','https://www.librerialorcacuenca.com/es/images/288/288-logo-mejorado-20.png',NULL),('CU0006','Cuenca','Cuenca','Librería Papelería Iremar','Av del Mediterráneo, 17, 16004 Cuenca','969 23 42 55','1','https://3.bp.blogspot.com/-tMRu9jyuL-4/T5g7Pca3izI/AAAAAAAAAAw/xcPUlAivk_E/s400/libreria%2Biremar%2Btarjeta%2B1.png',NULL),('CU1111','Cuenca','C.Real','Librería Lorca','Rda. de Calatrava, 16','969 69 24 69','1','https://www.feda.es/media/k2/items/cache/5b0bbbe1ce92c3688a24a1ee0aa4143e_L.jpg','www.google.es'),('CU1112','Cuenca','Cuenca','Librería LEYPE','C. Dionisio Guardiola, 18','926 22 34 20','1','https://www.leype.es/media/logo/default/material-oficina-leype.jpg','www.google.es'),('GU0001','Guadalajara','Guadalajara','Librería LUA','C. de la Virgen de la Soledad, 14, 19003 Guadalajara','949 21 06 88','1','https://multimedia.paginasamarillas.es/adsContentSrv/13602370-1-AeT6zlujWe/5b9529eb-7c27-4803-91ca-95235c34beb3/13602370-1-AeT6zlujWe1541417860438.png',NULL),('GU0002','Guadalajara','Guadalajara','Librería Emilio Cobos','C. Mayor, 34, 19001 Guadalajara','949 22 67 94','1','https://www.guadalajaradiario.es/images/mini/images/2020/02/2/Cobos-Libreria-610x458.jpg',NULL),('GU0003','Guadalajara','Guadalajara','Librería Papeleria Carma','C. de Julian Besteiro, 11','949 20 36 54','1','https://acepazuqueca.org/wp-content/uploads/2020/08/papeleriaNuria_02.jpg',NULL),('GU0004','Guadalajara','Guadalajara','AACHE Ediciones de Guadalajara','C. Malvarrosa, 2, 19005 Guadalajara','949 22 04 38','1','https://aache.com/wp-content/uploads/2016/09/logo_new.jpg',NULL),('GU0005','Guadalajara','Guadalajara','Librería Papelería Avenida','Av. del Ejército, 21, 19004 Guadalajara','949 22 94 53','1','https://pr0.nicelocal.es/iZgSdSuEd9J_QmMxkeY3CA/1120x700,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2cTqac5prVpBrCgPOzKwSXW5KC-mrYWjY1EBrWAYbJzhNdJ80SnUfTaTKDs3x62c5A',NULL),('GU0006','Guadalajara','Guadalajara','Librería Redondo','C. de Sigüenza, 8, 19003 Guadalajara','949 22 37 72','1','https://www.guadalajara.es/recursos/img/portal/2018/01/04/inauguracion-de-la-feria-del-libro.jpg',NULL),('MA0001','Madrid','Madrid','Casa Joven','C. de Alcalá, 180','917 25 87 38','1','https://www.telemadrid.es/2020/11/12/programas/toc-toc---se-puede/Libreria-Miguel-Miranda_2286081429_9773025_1300x731.jpg','www.casajovenonline.com'),('MA0002','Madrid','Madrid','Librería Menosdiez','C. del Espejo, 5, 28013 Madrid','656 79 31 57','1','https://comercioshistoricosdemadrid.com/wp-content/uploads/2020/12/calle-del-Espejo-cerca-de-la-calle-de-Santiago_-Libros-Menosdiez-IMG_9452-2019.jpg',NULL),('MA0003','Madrid','Madrid','Librería Pérez Galdós','C. de Hortaleza, 5, 28004','915 31 26 40','1','https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2020/03/08101843/libreria-perez-galdos-2.jpg',NULL),('MA0004','Madrid','Madrid','LLibrería Mary Read','C. del Marques de Toca, 3, 28012','683 12 76 38','1','https://maryread.es/wp-content/uploads/2021/04/MARY_READ_IMG_TXT_COLORchico2.png',NULL),('MA0005','Madrid','Madrid','Crazy Mary Librería & Co','C. de Echegaray, 32, 28014','914 38 49 77','1','https://city-confidential.com/img/plans/crazy-mary-libreria-madrid.png',NULL),('MA0006','Madrid','Madrid','Librería Antonio Machado','C. del Marqués de Casa Riera, 2, 28014','915 23 70 66','1','https://www.machadolibros.com/images/bloques_sliders/007-es-photostudio_1668472494953.webp',NULL),('TO0001','Toledo','Toledo','Librería Taiga','Travesia Gregorio Ramirez,2','925 22 90 97','1','https://acalanda.com/wp-content/uploads/2014/09/taiga.jpg',NULL),('TO0002','Toledo','Toledo','Librería HojaBlanca SL','C. Martin Gamero, 6','925 25 57 53','1','https://hojablanca.es/wp-content/uploads/2018/07/logo_phantom_retina.jpg',NULL),('TO0003','Toledo','Toledo','Librería Astrolabio','Av. de Europa, 18, 45003 Toledo','925 57 53','1','https://s3.abcstatics.com/media/espana/2016/01/14/hoja--510x287.JPG',NULL),('TO0004','Toledo','Toledo','librería Taiga','Avenida del Río Boladiez, 1, 45007 Toledo','925 04 05 85','1','https://acalanda.com/wp-content/uploads/2014/09/taiga.jpg',NULL),('TO0005','Toledo','Toledo','Librería Garabato','C. Río Alberche 1, 45007 Toledo','925 24 08 27','1','https://tiendasg.com/wp-content/uploads/2019/10/logo_garabato.jpg',NULL),('TO0006','Toledo','Toledo','Librería El Tintero','C. de Mejico, 10, 45004 Toledo','925 05 56 54','1','https://www.eltinterotoledo.com/es/images/223/223-logo.jpg','');
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
INSERT INTO `tiene` VALUES ('AL0001','1'),('AL0002','1'),('AL0003','1'),('AL0004','1'),('AL0005','1'),('AL0006','1'),('CR0001','1'),('CR0002','1'),('CR0003','1'),('CR0004','1'),('CR0005','1'),('CR0006','1'),('CU0001','1'),('CU0002','1'),('CU0003','1'),('CU0004','1'),('CU0005','1'),('CU0006','1'),('CU1111','1'),('CU1112','1'),('GU0001','1'),('GU0002','1'),('GU0003','1'),('GU0004','1'),('GU0005','1'),('GU0006','1'),('MA0001','1'),('MA0002','1'),('MA0003','1'),('MA0004','1'),('MA0005','1'),('MA0006','1'),('TO0001','1'),('TO0002','1'),('TO0003','1'),('TO0004','1'),('TO0005','1'),('TO0006','1');
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
INSERT INTO `usuarios` VALUES ('Administrador','1989-11-09','Cuenca','jes11989@hotmail.com','$2y$10$5AjvviebbxqFoeiZ3WHNMOLkAhXvT8Cv4sm5/KakcJ9N0BvLUYoH6','./fotoPerfiles/Administrador.png','OK','9999-03-26'),('Ana Isabel','1994-09-27','Cuenca','anaisa_villaperi@hotmail.es','$2y$10$tWWOAWrr3lM/1u1o30TWzu60SnKfi70zvGs62k1nGMbQYSdwXOEpu','./fotoPerfiles/Ana Isabel.png','OK','9999-01-01'),('Jesus Miguel','1989-11-09','Toledo','jmjimenezd08@gmail.com','$2y$10$QGP/pUpsVvjdc9FokdUvm.XqfB/wgjMrfT4gRP57pAyyl//koYugS','./fotoPerfiles/Jesus Miguel.png','OK','9999-03-26'),('Mario','1999-10-17','Guadalajara','molinamario.msc@gmail.com','$2y$10$PsrUcVwuG9OXNVQqdrFxmOd1cUL5UgAUYWkcLI2AkCpIcPaxwaYOO','./fotoPerfiles/Mario.jpeg','OK','9999-03-26'),('Yolanda','1987-09-15','Cuenca','yolanda_j87@hotmail.com','$2y$10$7hN8FGxz.Xfh03BDPXl/8OiCOqssSgjyUAkPK3clRbJ8i/nSzcTQ2','./fotoPerfiles/Yolanda.jpeg','OK','9999-01-01');
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
