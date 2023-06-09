<?php
    //uso de forma temporal el acceso que teniamos previo
    include "./greenhob.php";
    //la siguiente intruccion "bloquea" los avisos de warning, notice y deprecated,
    ini_set('error_reporting', E_ALL & ~E_NOTICE & ~E_WARNING & ~E_DEPRECATED);

    $verificador=false;

    //intento establecer la conexion
    $conexion=new mysqli($host,$usuario,$password,$bbdd);
    
    if(!$conexion){
        echo "No se ha podido establecer la conexion";
    }else{
        //compruebo si esta creada la BBDD
        $resultado=mysqli_query($conexion,"show databases");

        //las recorro para buscar coincidencias
        while($fila=mysqli_fetch_row($resultado)){
            if($fila[0]=="HOBBIES"){
                $verificador=true;
            }//if comprobador de nombres
        }//while
        if(!$verificador){
            if(mysqli_query($conexion,"Create database HOBBIES")){
                echo "BBDD creada correctamente<br>";
            }//if creaccion BBDD
        }//verificador false

        if(mysqli_query($conexion,"use ".$bbdd)){
            //borrado preliminar
            mysqli_query($conexion,"Drop table USUARIOS");
            mysqli_query($conexion,"Drop table SUGERENCIAS");
            mysqli_query($conexion,"Drop table HOBBIE");
            mysqli_query($conexion,"Drop table RELACION");
            mysqli_query($conexion,"Drop table TIENDAS");
            mysqli_query($conexion,"Drop table LIBROS");
            mysqli_query($conexion,"Drop table TIENE");
            mysqli_query($conexion,"Drop table PRACTICA");

            //creaccion tablas
            //USUARIOS
            $tusuarios=mysqli_query($conexion,"CREATE TABLE USUARIOS (
                ALIAS varchar(40) Primary Key,
                /* NOMBRE varchar(40) not null, */
                F_NACIMIENTO date not null,
                LOCALIDAD varchar(30),
                EMAIL varchar(40) not null,
                CONTRASEÑA varchar(100) not null,
                FOTO varchar(100),
                ESTADO enum('OK','Pendiente','Banneado') not null DEFAULT 'Pendiente',
                F_REGISTRO date not null
            )");
            //comprobaciones
            if($tusuarios){
                echo "tabla USUARIOS creada<br>";
            }else{
                echo $tusuarios;
            }

            //Sugerencias
            $tsugerencias=mysqli_query($conexion,"CREATE TABLE SUGERENCIAS (
                COD_Sugerencia INT NOT NULL AUTO_INCREMENT Primary key,
                ALIAS varchar(40) not null,
                APARTADO varchar(40) not null,
                TEXTO text not null,
                FOREIGN KEY (ALIAS) references USUARIOS(ALIAS) on delete cascade
            )");

            //comprobaciones
            if($tsugerencias){
                echo "tabla SUGERENCIAS creada<br>";
            }else{
                echo mysqli_error($conexion);
            }

            //hobbie
            $thobbie=mysqli_query($conexion,"CREATE TABLE HOBBIE (
                ID_HOBBIE varchar(3) Primary Key,
                NOMBRE varchar(50) not null
            )");

            //comprobaciones
            if($thobbie){
                echo "tabla Hobbies creada<br>";
            }else{
                echo mysqli_error($conexion);
            }

            //Tiendas
            $trelacion=mysqli_query($conexion,"CREATE TABLE TIENDAS (
                COD_TIENDA varchar(6) Primary Key,
                LOCALIDAD varchar(30) not null,
                PROVINCIA varchar(30) not null,
                NOMBRE varchar(40) not null,
                DIRECCION varchar(80) not null,
                TELEFONO varchar(14),
                COD_HOBBIE VARCHAR(2) not null,
                LOGO VARCHAR(250) not null,
                WEB VARCHAR(100) null
            )");

            //comprobaciones
            if(($trelacion)){
                echo "tabla TIENDAS creada<br>";
            }else{
                echo mysqli_error($conexion);
            }

            //LIBROS
            $trelacion=mysqli_query($conexion,"CREATE TABLE LIBROS (
                COD_LIBRO varchar(16) not null,
                ALIAS varchar(40) not null,
                TITULO varchar(60) not null,
                AUTOR varchar(60) not null,
                PAGINAS varchar(4) not null,
                PORTADA varchar(100) not null,
                LEIDO ENUM('SI','NO') not null,
                VALORACION int(2),
                Editorial VARCHAR(60) not NULL, 
                Primary Key (COD_LIBRO,ALIAS)
            )");

            //comprobacion
            if(($trelacion)){
                echo "tabla LIBROS creada<br>";
            }else{
                echo mysqli_error($conexion);
            }

            //BLACKLIST
            $trelacion=mysqli_query($conexion,"CREATE TABLE BLACKLIST (
                ALIAS varchar(40) not null,
                CASTIGOS int NOT NULL AUTO_INCREMENT,
                FEC_TOPE DATE not null,
                MOTIVO varchar(150) not null,
                Primary Key (ALIAS, CASTIGOS)
            )");

            //PRACTICA
            $trelacion=mysqli_query($conexion,"CREATE TABLE PRACTICA (
                ALIAS VARCHAR(40) NOT NULL ,
                ID_HOBBIE VARCHAR(3) NOT NULL,
                PRIMARY KEY (ALIAS,ID_HOBBIE),
                CONSTRAINT FK_Usuario FOREIGN KEY (ALIAS) REFERENCES USUARIOS(ALIAS) ON DELETE CASCADE,
                CONSTRAINT FK_hobbie FOREIGN KEY (ID_HOBBIE) REFERENCES HOBBIE(ID_HOBBIE) ON DELETE CASCADE)");

            //TIENE
            $trelacion=mysqli_query($conexion,"CREATE TABLE TIENE (
                COD_TIENDA VARCHAR(6) NOT NULL ,
                ID_HOBBIE VARCHAR(3) NOT NULL,
                PRIMARY KEY (COD_TIENDA,ID_HOBBIE),
                CONSTRAINT FK_Tienda FOREIGN KEY (COD_TIENDA) REFERENCES TIENDAS(COD_TIENDA) ON DELETE CASCADE,
                CONSTRAINT FK_hobbieTienda FOREIGN KEY (ID_HOBBIE) REFERENCES HOBBIE(ID_HOBBIE)) ON DELETE CASCADE");
        }
    }//else
?>