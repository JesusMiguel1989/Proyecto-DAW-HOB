<?php
    //uso de forma temporal el acceso que teniamos previo
    include "./LoginMySql.php";
//la siguien"te intruccion "bloquea" los avisos de warning, notice y deprecated,
    ini_set('error_reporting', E_ALL & ~E_NOTICE & ~E_WARNING & ~E_DEPRECATED);

    $verificador=false;

    //intento establecer la conexion
    $conexion=new mysqli($host,$usuario,$password);
    
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

        if(mysqli_query($conexion,"use HOBBIES")){
            //borrado preliminar
            mysqli_query($conexion,"Drop table USUARIOS");
            mysqli_query($conexion,"Drop table SUGERENCIAS");
            mysqli_query($conexion,"Drop table HOBBIE");
            mysqli_query($conexion,"Drop table PRACTICA");
            mysqli_query($conexion,"Drop table PAGINAS_WEB");
            mysqli_query($conexion,"Drop table RELACION");
            mysqli_query($conexion,"Drop table TIENDAS");
            mysqli_query($conexion,"Drop table RELACIONADAS");
            mysqli_query($conexion,"Drop table RUTAS");
            mysqli_query($conexion,"Drop table PROYECTOS");
            mysqli_query($conexion,"Drop table ESTADOS");
            mysqli_query($conexion,"Drop table LIBROS");
            mysqli_query($conexion,"Drop table CONSOLAS");
            mysqli_query($conexion,"Drop table JUEGOS");

            //creaccion tablas
            //USUARIOS
            $tusuarios=mysqli_query($conexion,"CREATE TABLE USUARIOS (
                ALIAS varchar(40) Primary Key,
                /* NOMBRE varchar(40) not null, */
                F_NACIMIENTO date not null,
                LOCALIDAD varchar(30),
                EMAIL varchar(40) not null,
                CONTRASEÑA varchar(100) not null
            )");
            //comprobaciones
            if($tusuarios){
                echo "tabla USUARIOS creada<br>";
            }else{
                echo $tusuarios;
            }

            //Sugerencias
            $tsugerencias=mysqli_query($conexion,"CREATE TABLE SUGERENCIAS (
                COD_Sugerencia varchar(2) Primary key,
                ALIAS varchar(40) not null,
                APARTADO varchar(40) not null,
                TEXTO varchar(200) not null,
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

            //Practica
            $tpractica=mysqli_query($conexion,"CREATE TABLE PRACTICA(
                ALIAS varchar(40) not null,
                ID_HOBBIE varchar(3) not null
            )");

            //comprobaciones
            if($tpractica){
                echo "tabla Practica creada<br>";
            }else{
                echo mysqli_error($conexion);
            }

            //Paginas web
            $tpaginas=mysqli_query($conexion,"CREATE TABLE PAGINAS_WEB(
                ID_PAGINA varchar(6) not null,
                URL varchar(200) not null,
                Nombre varchar(40) not null
            )");

            //comprobaciones
            if($tpaginas){
                echo "tabla Paginas web creada<br>";
            }else{
                echo mysqli_error($conexion);
            }

            //relacion
            $trelacion=mysqli_query($conexion,"CREATE TABLE RELACION(
                ID_PAGINA varchar(6) not null,
                ID_HOBBIE varchar(3) not null
            )");

            //comprobaciones
            if(($trelacion)){
                echo "tabla RELACION creada<br>";
            }else{
                echo mysqli_error($conexion);
            }

            //Tiendas
            $trelacion=mysqli_query($conexion,"CREATE TABLE TIENDAS (
                COD_TIENDA varchar(4) Primary Key,
                LOCALIDAD varchar(30) not null,
                PROVINCIA varchar(30) not null,
                NOMBRE varchar(40) not null,
                DIRECCION varchar(80) not null,
                TELEFONO varchar(14)
            )");

            //comprobaciones
            if(($trelacion)){
                echo "tabla TIENDAS creada<br>";
            }else{
                echo mysqli_error($conexion);
            }

            //relacionadas
            $trelacion=mysqli_query($conexion,"CREATE TABLE RELACIONADAS (
                ID_HOBBIE varchar(3) not null,
                COD_TIENDA varchar(4) not null
            )");

            //comprobaciones
            if(($trelacion)){
                echo "tabla RELACIONADAS creada<br>";
            }else{
                echo mysqli_error($conexion);
            }

            $trelacion=mysqli_query($conexion,"CREATE TABLE RUTAS (
                ID_RUTA varchar(3) not null,
                ALIAS varchar(40) not null,
                NOMBRE varchar(60) not null,
                Duracion varchar(10) not null,
                DIFICULTAD varchar(10) not null,
                VALORACION varchar(2) ,
                PROVINCIA varchar(30) not null,
                LOCALIDAD varchar(30) not null,
                REALIZADA ENUM('SI','NO') not null,
                Primary Key (ID_RUTA, ALIAS)
            )");

            //comprobacion
            if(($trelacion)){
                echo "tabla RUTAS creada<br>";
            }else{
                echo mysqli_error($conexion);
            }

            //PROYECTOS
            $trelacion=mysqli_query($conexion,"CREATE TABLE PROYECTOS (
                COD_PROYECTO varchar(4) not null,
                ALIAS varchar(40) not null,
                ORIGINAL ENUM('Si','NO') not null,
                FOTO varchar(40),
                F_INICIO date not null,
                F_FIN date not null,
                BOCETO varchar(40),
                Primary KEY (COD_PROYECTO,ALIAS)
            )");

            //comprobacion
            if(($trelacion)){
                echo "tabla PROyECTOS creada<br>";
            }else{
                echo mysqli_error($conexion);
            }

            //ESTADOS
            $trelacion=mysqli_query($conexion,"CREATE TABLE ESTADOS (
                COD_PROYECTO varchar(4) not null,
                VERSION varchar(2) not null,
                DESCRIPCION varchar(200) not null,
                FECHA date not null,
                PARTE_REALIZADA varchar(40) not null,
                ESTADO varchar(15) not null,
                Primary Key (COD_PROYECTO, VERSION)
            )");

            //comprobacion
            if(($trelacion)){
                echo "tabla ESTADOS creada<br>";
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
                PORTADA varchar(40) not null,
                LEIDO ENUM('SI','NO') not null,
                VALORACION varchar(2),
                Primary Key (COD_LIBRO,ALIAS)
            )");

            //comprobacion
            if(($trelacion)){
                echo "tabla LIBROS creada<br>";
            }else{
                echo mysqli_error($conexion);
            }

            //CONSOLAS
            $trelacion=mysqli_query($conexion,"CREATE TABLE CONSOLAS (
                ID_CONSOLA varchar(2) not null,
                ALIAS varchar(40) not null,
                NOMBRE varchar(20) not null,
                Primary Key (ID_CONSOLA, ALIAS)
            )");

            //comprobacion
            if(($trelacion)){
                echo "tabla CONSOLAS creada<br>";
            }else{
                echo mysqli_error($conexion);
            }

            //JUEGOS
            $trelacion=mysqli_query($conexion,"CREATE TABLE JUEGOS (
                ID_JUEGO varchar(6) not null,
                ID_CONSOLA varchar(2) not null,
                NOMBRE varchar(30) not null,
                PUBLICACION date not null,
                ESTADO varchar(8),
                ORIGINAL ENUM('SI','NO'),
                VALORACION varchar(2),
                Primary Key (ID_JUEGO, ID_CONSOLA)
            )");

            //comprobacion
            if(($trelacion)){
                echo "tabla JUEGOS creada<br>";
            }else{
                echo mysqli_error($conexion);
            }
        }
    }//else
?>