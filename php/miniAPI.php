<?
include "./LoginMySql.php";

$array=[];
$aux=0;
$conexion=new mysqli($host,$usuario,$password);

if(!$conexion){
    echo "No se ha podido establecer la conexion";
    
}else{
    
    if(mysqli_query($conexion,"use HOBBIES")){
        $opcion=$_GET['opcion'];
        $op=$_POST['opcion'];
        
        /* echo $_GET['opcion']."<br>"; */
        
        //hago limpia de usuarios que no han hecho el ultimo paso del registro (correo)
        $fecha=date("Y-m-d");

        $resultado=mysqli_query($conexion,"SELECT ALIAS FROM USUARIOS WHERE F_REGISTRO<'".$fecha."'");

        $aux=0;
        while($fila=mysqli_fetch_row($resultado)){
            $eliminacion=mysqli_query($conexion,"DELETE FROM USUARIOS WHERE ALIAS='".$fila[0]."'");
        }

        //opcion que devuelve los datos del usuario que le indiquemos
        if($opcion=="usuario"){
            
            //recojo las condiciones de busqueda (alias y contraseña)
            $condicion=$_GET['condicion'];
            $condicion2=$_GET['condicion2'];
            
            //hago la consulta
            $resultado=mysqli_query($conexion,"SELECT * FROM USUARIOS WHERE ALIAS='".$condicion."' AND ESTADO='OK'");

            //recorro las posibles salidas (al ser alias clave primaria es imposible que de mas de uno)
            while($fila=mysqli_fetch_row($resultado)){
                //compruebo la contraseña que me dio el usuario
                if(password_verify($condicion2,$fila[4])){
                    //guardo los resultados en un array que depues devolvere como JSON
                    $array[$aux]=[$fila[0],$fila[1],$fila[2],$fila[3],$fila[4],$fila[5],$fila[6]];
                }//verificacion de la contraseña
            }//while que lo recorre

            //cambio el valor de la variable para  que ejecute la instruccion de actualizar tabla (BLACKLIST)
            $opcion="redencion";

            //indico que sera un JSON con UTF-8
            header("Content-type: application/json; charset=utf-8");
            //muestro por pantalla
            echo json_encode($array);
        }//if opcion usuario

        if($opcion=="usuario1"){
            
            //recojo las condiciones de busqueda (alias y contraseña)
            $condicion=$_GET['condicion'];
            $condicion2=$_GET['condicion2'];
            
            //hago la consulta
            $resultado=mysqli_query($conexion,"SELECT * FROM USUARIOS WHERE ALIAS='".$condicion."'");

            //recorro las posibles salidas (al ser alias clave primaria es imposible que de mas de uno)
            while($fila=mysqli_fetch_row($resultado)){
                //compruebo la contraseña que me dio el usuario
                if($condicion2==$fila[4]){
                    //guardo los resultados en un array que depues devolvere como JSON
                    $array[$aux]=[$fila[0],$fila[1],$fila[2],$fila[3],$fila[4],$fila[5]];
                }//verificacion de la contraseña
            }//while que lo recorre

            //indico que sera un JSON con UTF-8
            header("Content-type: application/json; charset=utf-8");
            //muestro por pantalla
            echo json_encode($array);
        }//if opcion usuario

        //opcion que modifica los datos del usuario
        if($opcion=="cambiar_usuario"){
            //recojo las condiciones para la modificacion
            $condicion=$_GET['condicion'];
            $condicion2=$_GET['condicion2'];
            $condicion3=$_GET['condicion3'];
            $condicion4=$_GET['condicion4'];
            $condicion5=$_GET['condicion5'];
            $condicion6=$_GET['condicion6'];
            //hasheo la clave dada por el usuario
            $pass=password_hash($condicion5,PASSWORD_DEFAULT);

            //realizo el update
            $resultado=mysqli_query($conexion,"UPDATE USUARIOS 
                SET ALIAS='".$condicion."', F_NACIMIENTO='".$condicion2."', 
                    LOCALIDAD='".$condicion3."', EMAIL='".$condicion4."', CONTRASEÑA='".$pass."'
                WHERE ALIAS='".$condicion6."'");

            //tras la modificacion le pido a la bbdd que me devuelva la situacion de dicho usuario
            $resultado=mysqli_query($conexion,"SELECT * FROM USUARIOS WHERE ALIAS='".$condicion."'");

            //recorro los resultados
            while($fila=mysqli_fetch_row($resultado)){
                $array[$aux]=[$fila[0],$fila[1],$fila[2],$fila[3],$fila[4],$fila[5]];
            }//while que lo recorre

            //indico en la cabecera que sera un json
            header("Content-type: application/json; charset=utf-8");
            //muestro el JSON por pantalla
            echo json_encode($array);
        }//modificacion de usuario

        //opcion de borrado de usuario
        if($opcion=="borrar"){
            //cojo la condicion que sera la clave primaria
            $condicion=$_GET['condicion'];
            $condicion2=$_GET['condicion2'];

            //primero hago la comprobacion de la contraseña
            $previa=mysqli_query($conexion,"SELECT contraseña FROM USUARIOS WHERE ALIAS='".$condicion."'");
            $fila=mysqli_fetch_row($previa);
            //comprobamos la clave dada con la de la BBDD
            if(password_verify($condicion2,$fila[0])){
                //realizo el borrado en funcion del alias dado
                $resultado=mysqli_query($conexion,"DELETE FROM BLACKLIST WHERE ALIAS='".$condicion."'");
                $resultado=mysqli_query($conexion,"DELETE FROM USUARIOS WHERE ALIAS='".$condicion."'");

                /* //hago una busqueda para comprobar
                $resultado=mysqli_query($conexion,"SELECT * FROM USUARIOS WHERE ALIAS='".$condicion."'");

                //recorro los resultados
                while($fila=mysqli_fetch_row($resultado)){
                    $array[$aux]=[$fila[0],$fila[1],$fila[2],$fila[3],$fila[4],$fila[5]];
                }//while que lo recorre */
            }

            //indico en la cabecera que sera un json
            header("Content-type: application/json; charset=utf-8");
            //muestro el JSON por pantalla
            echo json_encode($array);
        }//borrado

        //opcion para regenerar la contraseña
        if($opcion=="correo"){
            
            //recojo las condiciones de busqueda (alias y contraseña)
            $condicion=$_GET['condicion'];
            $condicion2=$_GET['condicion2'];

            //variables
            $aux=0;

            //hago la consulta
            $resultado=mysqli_query($conexion,"SELECT * FROM USUARIOS WHERE ALIAS='".$condicion."' AND EMAIL='".$condicion2."'");

            
            //1 saco la cantidad de filas de la consulta, si es 1 existe
            if(mysqli_num_rows($resultado)==1){
                //generamos una clave aleatoria
                $clave="";
                for($i=0;$i<8;$i++){
                    $rango1=rand(65,90);
                    $char=chr($rango1);
                    $clave.=$char;
                }//for que genera las letras
               
                while($fila=mysqli_fetch_row($resultado)){
                    $array[$aux]=[$fila[0],$fila[1],$fila[2],$fila[3],$fila[4],$clave];
                }

                /* echo print_r($array); */
                $password=password_hash($clave,PASSWORD_DEFAULT);

                //modifico la tabla
                $resultado=mysqli_query($conexion,"UPDATE USUARIOS 
                SET ALIAS='".$condicion."', F_NACIMIENTO='".$array[0][1]."', 
                    LOCALIDAD='".$array[0][2]."', EMAIL='".$array[0][3]."', CONTRASEÑA='".$password."'
                WHERE ALIAS='".$condicion."'");

                //envio del correo
                /* echo $array[0][5]; */
                $to=$condicion2;
                $titulo=utf8_decode('Recuperación de la contraseña HOB');
                $texto='Hola, he modificado tu clave como me pedistes. Tu clave temporal es <b>'.$array[0][5].'</b>';
                $cabeceras = 'From: jes11989@hotmail.com';

                //creo el mensaje con estilos html y css
                $mensaje="<html><head><meta charset='UTF-8'><style> .contenedor { background-color: rgb(152, 226, 202); color: black;  border-spacing: 2px; border: 5px double rgb(255, 217, 107); text-align: center; padding: 1rem 3rem; margin: 3rem auto; border-radius: 0.375rem; max-width: 500px; box-shadow: 0 1rem 3rem rgba(0, 0, 0, .5); } .hb{ padding-top: 100px; font-size: 35px; color: rgb(255, 217, 107); font-weight:bold; } .o{ padding-top: 100px; font-size: 35px; color: rgb(112, 173, 71); font-weight:bold;} .titulo { padding-top: 100px; font-weight: bold; } .amarillo { height: .5rem; background-color: rgb(255, 217, 107); margin: 2rem 0; border: 0px solid; border-radius: 0.375rem; } .parrafo { font-size: 1.5rem; margin-bottom: 2rem; text-align: center; } </style></head><body><div class='contenedor'><span class='hb'>H</span><span class='o'>O</span><span class='hb '>B</span><hr class='amarillo'><center><p class='parrafo'>".$texto."</p></center></div></body></html>";
                
                $unsalto="\r\n";
                $encabezados = "";
                
                $cabeceras = 'From: <jes11989@hotmail.com>'.$unsalto;
                $cabeceras .= "MIME-Version: 1.0".$unsalto;
	            $cabeceras .= "Content-Type: text/html;";
	            $cabeceras .= " boundary=Separador_de_partes"; 

                //envio
                mail($to,$titulo,$mensaje,$cabeceras);

                //indico en la cabecera que sera un json
                header("Content-type: application/json; charset=utf-8");
                //muestro el JSON por pantalla
                echo json_encode($array);
            }  
        }//opcion correo

        //opcion para la modificacion de la imagen
        $opcionfoto=$_POST['condicion'];

        if($opcionfoto=="imagen"){
            //recojo las variables            
            $condicion=$_FILES['archivo'];
            $condicion2=$_POST['condicion3'];

            $extension=substr(strstr($condicion['type'],"/"),1);
            
            $destino="C:/Apache24/htdocs/proyecto/fotoPerfiles/".$condicion['name'];

            if(file_exists("C:/Apache24/htdocs/proyecto/fotoPerfiles/".$condicion2.".png")){
                $ext="png";
            }
            if(file_exists("C:/Apache24/htdocs/proyecto/fotoPerfiles/".$condicion2.".jpg")){
                $ext="jpg";
            }
            if(file_exists("C:/Apache24/htdocs/proyecto/fotoPerfiles/".$condicion2.".jpeg")){
                $ext="jpeg";
            }

            echo "C:/Apache24/htdocs/proyecto/fotoPerfiles/".$condicion2.".".$ext."<br>";
            //borrado de la foto si estuviera
            if(unlink("C:/Apache24/htdocs/proyecto/fotoPerfiles/".$condicion2.".".$ext)){
                echo "correcto";
            }else{
                echo "lastima, continuar?";
            }

            //copio el fichero en la carpeta del servidor
            if(copy($condicion['tmp_name'],$destino)){
                rename("C:/Apache24/htdocs/proyecto/fotoPerfiles/".$condicion['name'],"C:/Apache24/htdocs/proyecto/fotoPerfiles/".$condicion2.".".$extension);
                $resultado=mysqli_query($conexion,"UPDATE USUARIOS 
                SET FOTO='./fotoPerfiles/".$condicion2.".".$extension."'
                WHERE ALIAS='".$condicion2."'");
            }

            //hago una busqueda para comprobar
            $resultado=mysqli_query($conexion,"SELECT * FROM USUARIOS WHERE ALIAS='".$condicion."'");

            //recorro los resultados
            while($fila=mysqli_fetch_row($resultado)){
                $array[$aux]=[$fila[0],$fila[1],$fila[2],$fila[3],$fila[4],$fila[5]];
            }//while que lo recorre

            /* //indico en la cabecera que sera un json
            header("Content-type: application/json; charset=utf-8");
            //muestro el JSON por pantalla
            echo json_encode($array); */
            header("Refresh:0; url=http://localhost/proyecto/perfil.html");
        }//if cambio foto

        ///////////////////////////Libros/////////////////////////////////////

        //opcion para agregar libro LEIDO
        if($opcion=="agregarleido"){
            //guardo los datos
            $cod=$_GET['condicion1'];
            $alias=$_GET['condicion2'];
            $alias=str_replace("_"," ",$alias);
            $titulo=$_GET['condicion3'];
            //le quito las barras bajas del titulo
            $titulo=str_replace("_"," ",$titulo);
            $autor=$_GET['condicion4'];
            //le quito los espacios al autor
            $autor=str_replace("_"," ",$autor);
            $pag=$_GET['condicion5'];
            $portada=$_GET['condicion6'];
            $leido=$_GET['condicion7'];//si o no
            $valoracion=$_GET['condicion8'];
            $editorial=$_GET['condicion9'];
            $editorial=str_replace("_"," ",$editorial);
            $comentario=str_replace("_"," ",$_GET['condicion10']);

            echo $opcion."<br>".$cod."<br>".$alias."<br>".$titulo."<br>".$autor."<br>".
            $pag."<br>".$portada."<br>".$leido."<br>".$valoracion."<br>";

            //1 compruebo que el usuario este en la base de datos
            $comprobadorUsuario=mysqli_query($conexion,"SELECT * FROM USUARIOS WHERE ALIAS='".$alias."'");
           
            //si devuelve 1 o mas datos es que eexiste el usuario
            if(mysqli_num_rows($comprobadorUsuario)==1){

                $comprobarUsuISBN=mysqli_query($conexion,"SELECT * FROM LIBROS 
                        WHERE ALIAS='".$alias."' AND COD_LIBRO='".$cod."'");
                
                if(mysqli_num_rows($comprobarUsuISBN)==0){
                    
                    //si no existe, inserto el libro
                    $insercion=mysqli_query($conexion,"INSERT INTO LIBROS (COD_LIBRO, ALIAS, TITULO, AUTOR, PAGINAS, PORTADA, LEIDO, VALORACION, EDITORIAL, COMENTARIO)
                    VALUES('".$cod."','".$alias."','".$titulo."','".$autor."','".$pag."','".$portada
                    ."','".$leido."',".$valoracion.",'".$editorial."','".$comentario."')");
                    echo mysqli_error($conexion);
                }else{
                    echo "llega2";
                    //si y alo tienes comprobamos si te lo has terminado
                    if(mysqli_num_rows($comprobarUsuISBN)==1){
                        
                        $modificacion=mysqli_query($conexion,"UPDATE LIBROS SET COD_LIBRO='".$cod."', ALIAS='".$alias."'
                        , TITULO='".$titulo."', AUTOR='".$autor."', PAGINAS='".$pag."', PORTADA='".$portada."'
                        , LEIDO='".$leido."', VALORACION='".$valoracion."'
                        WHERE ALIAS='".$alias."' AND COD_LIBRO='".$cod."'");
                        /* mysqli_error($conexion); */
                    }
                }//comprobacion de si el usuario tiene ese libro ya registrado
            }else{
                //echo "Lo siento ese usuario no existe";
            }//comprobacion de usuario
        }

        //opcion para mostrar libros que no estan terminados
        if($opcion=="mostrarLeyendo"){
            $alias=$_GET['condicion1'];
            $limite=intval($_GET['condicion2']);

            //echo $limite;
            $alias=str_replace("_"," ",$alias);

            $resultado=mysqli_query($conexion,"SELECT * FROM LIBROS WHERE ALIAS='".$alias."' AND LEIDO='NO'
            LIMIT ".$limite.",20");
                        /* LIMIT ".$limite.",20 */

            $resultado2=mysqli_query($conexion,"SELECT * FROM LIBROS WHERE ALIAS='".$alias."' AND LEIDO='NO'");
            $registros2=mysqli_num_rows($resultado2);

            while($fila=mysqli_fetch_row($resultado)){
                //guardo los resultados en un array que depues devolvere como JSON
                $array[$aux]=[$fila[0],$fila[1],$fila[2],$fila[3],$fila[4],$fila[5],$fila[6],$fila[7],$registros2,$fila[8]];
                $aux++;
            }//while que lo recorre 

            //indico que sera un JSON con UTF-8
            header("Content-type: application/json; charset=utf-8");
            //muestro por pantalla
            echo json_encode($array);
        }

        //modificacion de libro
        if($opcion=="modificarLibro"){
            $alias=str_replace("_"," ",$_GET['condicion1']);
            $cod=$_GET['condicion2'];
            $nota=$_GET['condicion3'];
            $comentario=str_replace("_"," ",$_GET['condicion4']);

            $modificacion=mysqli_query($conexion,"UPDATE LIBROS SET LEIDO='SI', VALORACION='".$nota."', COMENTARIO='".$comentario."'
                        WHERE ALIAS='".$alias."' AND COD_LIBRO='".$cod."'"); 
            
        }

        //eliminacion del libro por abandono
        if($opcion=="eliminarLibro"){
            $alias=$_GET['condicion1'];
            $cod=$_GET['condicion2'];

            $borrado=mysqli_query($conexion,"DELETE FROM LIBROS WHERE ALIAS='".$alias."' AND COD_LIBRO='".$cod."' AND ALIAS NOT IN (SELECT ALIAS FROM BLACKLIST)");
        }
        
        //para mostrar ibros leidos de usuario indicado
        if($opcion=="mostrarLeidos"){
            $alias=$_GET['condicion1'];
            $alias=str_replace("_"," ",$alias);
            $limite=intval($_GET['condicion2']);

            $resultado=mysqli_query($conexion,"SELECT * FROM LIBROS WHERE ALIAS='".$alias."' AND LEIDO='SI'
            LIMIT ".$limite.",20");


            $resultado2=mysqli_query($conexion,"SELECT * FROM LIBROS WHERE ALIAS='".$alias."' AND LEIDO='SI'");
            $registros2=mysqli_num_rows($resultado2);


            while($fila=mysqli_fetch_row($resultado)){
                //guardo los resultados en un array que depues devolvere como JSON
                $array[$aux]=[$fila[0],$fila[1],$fila[2],$fila[3],$fila[4],$fila[5],$fila[6],$fila[7],$registros2,$fila[8]];
                $aux++;
            }//while que lo recorre 

            //indico que sera un JSON con UTF-8
            header("Content-type: application/json; charset=utf-8");
            //muestro por pantalla
            echo json_encode($array);
        }//funcion que muestra los libros leidos

        //ranking
        if($opcion=="ranking")  {
            $resultado=mysqli_query($conexion,"SELECT COD_LIBRO , TITULO, AUTOR, PAGINAS, PORTADA, EDITORIAL ,AVG(VALORACION) 
                                    FROM libros
                                    WHERE LEIDO='SI'
                                    GROUP BY COD_LIBRO, TITULO, AUTOR, PAGINAS, PORTADA, EDITORIAL
                                    ORDER BY AVG(VALORACION) DESC");

            while($fila=mysqli_fetch_row($resultado)){
                $array[$aux]=[$fila[0],$fila[1],$fila[2],$fila[3],$fila[4],$fila[5],$fila[6]];
                $aux++;
            }//while que lo recorre 

            //indico que sera un JSON con UTF-8
            header("Content-type: application/json; charset=utf-8");
            //muestro por pantalla
            echo json_encode($array);
        }//ranking 
        
        //copia de seguridad
        if($opcion=="copiaSeguridad"){
            //me quedo con la fecha de hoy para usarla en el nombre
            $fechaActual=date("Y-m-d");
            $nombreArchivo="copia".$fechaActual.".sql";

            //ejecutamos el mysqldump
            $resultado=exec('C:/ServidorLocal/mysql/bin/mysqldump --opt -h localhost -u root --password="1234" hobbies > C:/Apache24/htdocs/proyecto/restore/'.$nombreArchivo);
            //segun el resultado que de informo de este
            switch($resultado){
                case 0:
                    //todo correcto
                    echo "todo corecto";
                    break;
                case 1:
                    //error
                    echo "pues no";
                    break;
                case 2:
                    //error
                    echo "que nooooo";
                    break;
                default:
                    break;
            }

            header("Refresh:5 ; url=http://localhost/proyecto/admin.html");
        }//copia de seguridad

        if($op=="restore"){
            //recojo la ubicacion y la extension para saber si es una copia de seguridad o no
            $fichero=$_FILES['fichero']['tmp_name'];
            $tipo=$_FILES['fichero']['type'];
            if($tipo=="application/octet-stream"){
                //creo una variable que almacenara la ruta donde se guardara
                $destino="C:/Apache24/htdocs/proyecto/restore/backup.sql";
                //copio el fichero dado por el administrador en la carpeta indicada
                if(move_uploaded_file($fichero,$destino)){
                    ////////////////////////////////////////////CUIDADO RUTA
                    $resultado=exec('C:\ServidorLocal\mysql\bin\mysql -h localhost -u root --password="1234" hobbies < C:/Apache24/htdocs/proyecto/restore/backup.sql');
                    switch($resultado){
                        case 0:
                            echo 'La base de datos <b>BibliotecaJimenezJM</b> se ha restaurado correctamente ';
                            break;
                        case 1:
                            echo 'Se ha producido un error al exportar <b>bibliotecajimenezjm</b> a '.getcwd().'/' .$mysqlExportPath .'</b>';
                            break;
                        case 2:
                            echo 'Se ha producido un error de exportación, compruebe la siguiente información';
                            break;
                        default:
                            echo "Nose como has llegado hasta aqui, pero te felicito";
                            break;
                    }
                }
            }else{
                echo "se siente";
            } 
            header("Refresh:0 ; url=http://localhost/proyecto/admin.html");
        }//opcion restore

        //eliminacion de usuarios por castigo
        if($opcion=="eliminacion"){
            $alias=$_GET['condicion1'];

            //hago el borrado del usuario
            $resultado=mysqli_query($conexion,"DELETE FROM USUARIOS WHERE ALIAS='".$alias."'");
            $resultado=mysqli_query($conexion,"DELETE FROM BLACKLIST WHERE ALIAS='".$condicion."'");
            $opcion="actualizar";
        }

        //actualizar la bbdd (eliminacion de registros de usuarios eliminados)
        if($opcion=="actualizar"){
            $resultado=mysqli_query($conexion,"DELETE FROM LIBROS WHERE ALIAS NOT IN (SELECT ALIAS FROM USUARIOS)");
            $resultado=mysqli_query($conexion,"DELETE FROM BLACKLIST WHERE ALIAS NOT IN (SELECT ALIAS FROM USUARIOS)");
        }

        //agregar una tienda a la BBDD
        if($opcion=="agregartienda"){
            $cod=$_GET['condicion1'];
            $nombre=$_GET['condicion2'];
            $telefono=$_GET['condicion3'];
            $direccion=$_GET['condicion4'];
            $localidad=$_GET['condicion5'];
            $provincia=$_GET['condicion6'];
            $cod_hob=$_GET['condicion7'];
            $logo=$_GET['condicion8'];
            $resultado=mysqli_query($conexion,"INSERT INTO TIENDAS (COD_TIENDA,LOCALIDAD,PROVINCIA,NOMBRE,DIRECCION,TELEFONO,COD_HOBBIE,LOGO)
                VALUES('".$cod."','".$localidad."','".$provincia."','".$nombre."','".$direccion."','".$telefono."','".$cod_hob."','".$logo."')");
            
            header("Refresh:0 ; url=http://localhost/proyecto/admin.html");
        }

        //agregar una tienda a la BBDD
        if($opcion=="modificartienda"){
            $cod=$_GET['condicion1'];
            $nombre=$_GET['condicion2'];

            $telefono=str_replace("_"," ",$_GET['condicion3']);
            $direccion=str_replace("_"," ",$_GET['condicion4']);

            $localidad=$_GET['condicion5'];
            $provincia=$_GET['condicion6'];
            $cod_hob=$_GET['condicion7'];
            $logo=$_GET['condicion8'];

            $resultado=mysqli_query($conexion,"UPDATE  TIENDAS SET LOCALIDAD='".$localidad."' 
                    ,PROVINCIA='".$provincia."', NOMBRE='".$nombre."' , DIRECCION='".$direccion."' 
                    ,TELEFONO='".$telefono."' ,COD_HOBBIE='".$cod_hob."' ,LOGO='".$logo."'
                    WHERE COD_TIENDA='".$cod."'");
            
            /* $resultado=mysqli_query($conexion,"INSERT INTO TIENDAS (COD_TIENDA,LOCALIDAD,PROVINCIA,NOMBRE,DIRECCION,TELEFONO,COD_HOBBIE)
                VALUES('".$cod."','".$localidad."','".$provincia."','".$nombre."','".$direccion."','".$telefono."','".$cod_hob."')"); */
              
            header("Refresh:0 ; url=http://localhost/proyecto/admin.html");
        }

        //saco un listado de los hobbies que estan en la BBDD
        if($opcion=="cod_hobbie"){
            $resultado=mysqli_query($conexion,"SELECT ID_HOBBIE FROM HOBBIE");

            while($fila=mysqli_fetch_row($resultado)){
                $array[$aux]=[$fila[0]];
                $aux++;
            }//while que lo recorre

            //indico que sera un JSON con UTF-8
            header("Content-type: application/json; charset=utf-8");
            //muestro por pantalla
            echo json_encode($array);
        }

        //opcion para ver los codigos insertados
        if($opcion=="cod"){
            $resultado=mysqli_query($conexion,"SELECT COD_TIENDA FROM TIENDAS");

            while($fila=mysqli_fetch_row($resultado)){
                $array[$aux]=[$fila[0]];
                $aux++;
            }//while que lo recorre

            //indico que sera un JSON con UTF-8
            header("Content-type: application/json; charset=utf-8");
            //muestro por pantalla
            echo json_encode($array);
        }//opcion para ver los codigos insertados

        //opcion para borrar tienda
        if($opcion=="borrartienda"){
            $cod=$_GET['condicion1'];
            $resultado=mysqli_query($conexion,"DELETE FROM TIENDAS WHERE COD_TIENDA='".$cod."'");
        }//borrar tienda

        //buscar tienda
        if($opcion=="buscartienda"){
            $cod=$_GET['condicion1'];
            //hago la consulta
            $resultado=mysqli_query($conexion,"SELECT * FROM TIENDAS WHERE COD_TIENDA='".$cod."'");

            //recorro las posibles salidas (al ser alias clave primaria es imposible que de mas de uno)
            while($fila=mysqli_fetch_row($resultado)){
                $array[$aux]=[$fila[0],$fila[1],$fila[2],$fila[3],$fila[4],$fila[5],$fila[6],$fila[7]];
                $aux++;
            }//while que lo recorre

            //indico que sera un JSON con UTF-8
            header("Content-type: application/json; charset=utf-8");
            //muestro por pantalla
            echo json_encode($array);
        }//buscar tienda

        //buscar usuario
        if($opcion=="buscarusuario"){
            $alias=$_GET['condicion1'];
            //hago la consulta
            $resultado=mysqli_query($conexion,"SELECT EMAIL, ESTADO FROM USUARIOS WHERE ALIAS='".$alias."'");

            $vecesBaneado=mysqli_num_rows(mysqli_query($conexion,"SELECT * FROM BLACKLIST WHERE ALIAS='".$alias."'"));

            $fila=mysqli_fetch_row($resultado);
            if($fila[1]=="Banneado"){
                $array[$aux]=[mysqli_fetch_row(mysqli_query($conexion,"SELECT MOTIVO FROM BLACKLIST WHERE ALIAS='".$alias."' 
                    AND FEC_TOPE !='9999-01-01'")),$vecesBaneado];
            }else{
                $array[$aux]=[$fila[0],$vecesBaneado];
                $aux++;
            }

            if(mysqli_num_rows($resultado)==0){
                $array[$aux]=["No esta registrado"];
            }

            //indico que sera un JSON con UTF-8
            header("Content-type: application/json; charset=utf-8");
            //muestro por pantalla
            echo json_encode($array);
        }//buscar usuario

        //banear usuario
        if($opcion=="banearusuario"){
            $alias=$_GET['condicion1'];
            $motivo=$_GET['condicion2'];

            //calculo la fecha del banneo, seran 30 dias
            $fechaActual=date("Y-m-d");
            $fecha=new DateTime($fechaActual);
            $fecha->add(new DateInterval('P30D'));
            $dia=$fecha->format("N");

            $fechaCaducidad=$fecha->format("Y-m-d");

            $motivo=str_replace("_"," ",$motivo);
            $comprobacion=mysqli_fetch_row(mysqli_query($conexion,"SELECT ESTADO FROM USUARIOS WHERE ALIAS='".$alias."'"));

            if($comprobacion[0]!="Banneado"){
                $resultado=mysqli_query($conexion,"UPDATE USUARIOS SET ESTADO='Banneado' WHERE ALIAS='".$alias."'");
                $resultado=mysqli_query($conexion,"INSERT INTO BLACKLIST (ALIAS, FEC_TOPE, MOTIVO)
                        VALUES ('".$alias."','".$fechaCaducidad."','".$motivo."')");
                
                //mail de aviso al usuario
                $correo=mysqli_fetch_row(mysqli_query($conexion,"SELECT EMAIL FROM USUARIOS WHERE ALIAS='".$alias."'"));
                $to=$correo[0];
                $titulo=utf8_decode('Aviso de Banneo en HOB');
                $texto=utf8_encode('Estimado usuario <b>'.$alias.' </b>,<br> Su cuenta ha sido bloqueada por un periado de 30 días. El motivo de esta sanción es:<br>'.$motivo.'.');

                //creo el mensaje con estilos html y css
                $mensaje="<html><head><meta charset='UTF-8'><style> .contenedor { background-color: rgb(152, 226, 202); color: black;  border-spacing: 2px; border: 5px double rgb(255, 217, 107); text-align: center; padding: 1rem 3rem; margin: 3rem auto; border-radius: 0.375rem; max-width: 500px; box-shadow: 0 1rem 3rem rgba(0, 0, 0, .5); } .hb{ padding-top: 100px; font-size: 35px; color: rgb(255, 217, 107); font-weight:bold; } .o{ padding-top: 100px; font-size: 35px; color: rgb(112, 173, 71); font-weight:bold;} .titulo { padding-top: 100px; font-weight: bold; } .amarillo { height: .5rem; background-color: rgb(255, 217, 107); margin: 2rem 0; border: 0px solid; border-radius: 0.375rem; } .parrafo { font-size: 1.5rem; margin-bottom: 2rem; text-align: center; } </style></head><body><div class='contenedor'><span class='hb'>H</span><span class='o'>O</span><span class='hb '>B</span><hr class='amarillo'><center><p class='parrafo'>".$texto."</p></center></div></body></html>";
                                
                $unsalto="\r\n";
                $encabezados = "";
                
                $cabeceras = 'From: <jes11989@hotmail.com>'.$unsalto;
                $cabeceras .= "MIME-Version: 1.0".$unsalto;
	            $cabeceras .= "Content-Type: text/html;";
	            $cabeceras .= " boundary=Separador_de_partes";  

                /* echo $to;
                echo "<br>".$titulo; */
                //envio
                mail($to,$titulo,$mensaje,$cabeceras);
            }else{
                echo "no torturemos al usuario";
            }
            

        }//banear usuario

        //perdonar usuario
        if($opcion=="perdonarusuario"){
            $alias=$_GET['condicion1'];
            $resultado=mysqli_query($conexion,"UPDATE USUARIOS SET ESTADO='OK' WHERE ALIAS='".$alias."'");
            $resultado=mysqli_query($conexion,"UPDATE BLACKLIST SET FEC_TOPE='9999-01-01' WHERE ALIAS='".$alias."' AND FEC_TOPE !='9999-01-01'");
            //$resultado=mysqli_query($conexion,"DELETE FROM BLACKLIST WHERE ALIAS='".$alias."'");
        }//perdonar usuario

        //actualizacion de los usuarios baneados
        if($opcion=="redencion"){
            $fechaActual=date("Y-m-d");
            //busco los usuarios que han cumplido con su castigo
            $resultado=mysqli_query($conexion,"SELECT * FROM BLACKLIST WHERE FEC_TOPE<='".$fechaActual."'");

            /* print_r(mysqli_fetch_row($resultado)); */
            //recorro la tabla de los usuarios baneados para eliminar los registros
            while($fila=mysqli_fetch_row($resultado)){
                //se borran
                $resultado=mysqli_query($conexion,"UPDATE USUARIOS SET ESTADO='OK' WHERE ALIAS='".$fila[2]."'");
                $resultado=mysqli_query($conexion,"UPDATE BLACKLIST SET FEC_TOPE='9999-01-01' WHERE ALIAS='".$fila[2]."'");
                //mysqli_query($conexion,"DELETE FROM BLACKLIST WHERE ALIAS='".$fila[0]."'");
            }//while que recorreo los resultaods de la select
        }//opcion redencion

        //opcion para buscar libro
        if($opcion=="buscarLibro"){
            $cod=$_GET['condicion1'];

            $resultados=mysqli_query($conexion,"SELECT * FROM LIBROS WHERE COD_LIBRO='".$cod."'");

             //recorro las posibles salidas )
            $fila=mysqli_fetch_row($resultados);

            //indico que sera un JSON con UTF-8
            header("Content-type: application/json; charset=utf-8");
            //muestro por pantalla
            echo json_encode($fila);
        }//opcion buscar libro

        //modificador de libro desde Administrador
        if($opcion=="modificarLibro"){
            $cod=$_GET['condicion1'];
            $alias=$_GET['condicion2'];
            $titulo=$_GET['condicion3'];
            $titulo=str_replace("_"," ",$titulo);
            $autor=$_GET['condicion4'];
            //le quito los espacios al autor
            $autor=str_replace("_"," ",$autor);
            $pag=$_GET['condicion5'];
            $portada=$_GET['condicion6'];
            $leido=$_GET['condicion7'];//si o no
            $valoracion=$_GET['condicion8'];

            //modificamos el registro que tenga los datos indicados
            $resultado=mysqli_query($conexion,"UPDATE LIBROS SET TITULO='".$titulo."', AUTOR='".$autor."',
                     PAGINAS='".$pag."', PORTADA='".$portada."', LEIDO='".$leido."', VALORACION='".$valoracion."'
                     WHERE Alias='".$alias."' AND COD_LIBRO='".$cod."'");
        }

        //opcion para agregar un libro al usuario que elijamos
        if($opcion=="insertarLibro"){
            echo $opcion;
            $cod=$_GET['condicion1'];
            $alias=$_GET['condicion2'];
            $titulo=$_GET['condicion3'];
            $autor=$_GET['condicion4'];
            $pag=$_GET['condicion5'];
            $portada=$_GET['condicion6'];
            $leido=$_GET['condicion7'];//si o no
            $valoracion=$_GET['condicion8'];

            //agregamos el libro
            $resultado=mysqli_query($conexion,"INSERT INTO LIBROS (COD_LIBRO, ALIAS, TITULO, AUTOR, PAGINAS, PORTADA, LEIDO, VALORACION)
            VALUES('".$cod."','".$alias."','".$titulo."','".$autor."','".$pag."','".$portada."','".$leido."','".$valoracion."')");
        }//opcion de agregar libro

        //opcion de borrar libro
        if($opcion=="borrarLibro"){
            $cod=$_GET['condicion1'];
            $alias=$_GET['condicion2'];

            //agregamos el libro
            $resultado=mysqli_query($conexion,"DELETE FROM LIBROS WHERE ALIAS='".$alias."' AND COD_LIBRO='".$cod."'");

        }

        ////////////PAG tiendas
        if($opcion=="buscadorTiendaLocalidad"){
            $hobbie=$_GET['condicion1'];
            $localidad=$_GET['condicion2'];

            //saco las tiendas que concuerden con ambos resultados
            $resultado=mysqli_query($conexion,"SELECT * FROM TIENDAS WHERE PROVINCIA='".$localidad."' 
                    AND COD_HOBBIE=(SELECT ID_HOBBIE FROM HOBBIE WHERE NOMBRE='".$hobbie."')");
            
            while($fila=mysqli_fetch_row($resultado)){
                $array[$aux]=[$fila[0],$fila[1],$fila[2],$fila[3],$fila[4],$fila[5],$fila[6],$fila[7]];
                $aux++;
            }//while que lo recorre

            //indico que sera un JSON con UTF-8
            header("Content-type: application/json; charset=utf-8");
            //muestro por pantalla
            echo json_encode($array);
        }

        //envio de sugerencias
        if($opcion=="sugerencia"){
            $alias=(str_replace("_"," ",$_GET['condicion1']));
            $mail=$_GET['condicion2'];
            $asunto=utf8_decode(str_replace("_"," ",$_GET['condicion3']));
            $mensaje=utf8_decode(str_replace("_"," ",$_GET['condicion4']));
            $comprobacion=mysqli_query($conexion,"SELECT ALIAS FROM USUARIOS WHERE ALIAS='".$alias."'");

            //compruebo que el usuario esta en la BBDD
            if(mysqli_num_rows($comprobacion)==1 && strlen($mensaje)<200){

                //inserto la sugerencia en la BBDD
                $insercion=mysqli_query($conexion,"INSERT INTO SUGERENCIAS (ALIAS,APARTADO,TEXTO)
                    VALUES('".$alias."','".$asunto."','".utf8_encode($mensaje)."')");

                echo mysqli_error($conexion);
                $to='jes11989@hotmail.com';
                $cabeceras = 'From: '. $mail;

                $mensaje="El mensaje es de ".$alias." cuyo Correo electronico es: ".$mail.".
                ".$mensaje;
                //funcion para enviar el mensaje
                if(mail($to,$asunto,$mensaje,$cabeceras)){
                    echo "mensaje enviado";
                }else{
                    echo "mensaje no enviado";
                }
            }
            
            
        }

        //Comentarios
        if($opcion=="comentario"){
            $isbn=$_GET['condicion1'];
            $limite=intval($_GET['condicion2']);

            $resultado=mysqli_query($conexion,"SELECT ALIAS, VALORACION, COMENTARIO FROM LIBROS WHERE COD_LIBRO='".$isbn."' AND COMENTARIO IS NOT NULL AND COMENTARIO <>''
            LIMIT ".$limite.",1");
            $registros=mysqli_num_rows($resultado);

            while($fila=mysqli_fetch_row($resultado)){
                $resultado2=mysqli_query($conexion,"SELECT FOTO FROM USUARIOS WHERE ALIAS='".$fila[0]."'");
                $foto=mysqli_fetch_row($resultado2);
                //guardo los resultados en un array que depues devolvere como JSON
                $array[$aux]=[$fila[0],$fila[1],$fila[2],$foto[0],$registros];
                $aux++;
            }//while que lo recorre 

            //indico que sera un JSON con UTF-8
            header("Content-type: application/json; charset=utf-8");
            //muestro por pantalla
            echo json_encode($array);
        }

        //camino para sacar los comentarios
        if($opcion=="resultados"){
            $isbn=$_GET['condicion1'];

            $resultado=mysqli_query($conexion,"SELECT ALIAS, VALORACION, COMENTARIO 
                        FROM LIBROS 
                        WHERE COD_LIBRO='".$isbn."' AND COMENTARIO IS NOT NULL AND COMENTARIO <>''");
            $registros=mysqli_num_rows($resultado);
            $array=[$registros];
            //indico que sera un JSON con UTF-8
            header("Content-type: application/json; charset=utf-8");
            //muestro por pantalla
            echo json_encode($array);
        }

        //sacar los codigos de las tiendas
        if($opcion=="cod_tiendas"){
            $aux=0;
            $resultado=mysqli_query($conexion,"SELECT COD_TIENDA FROM TIENDAS");

            while(($fila=mysqli_fetch_row($resultado))){
                $array[$aux]=[$fila[0]];
                $aux++;
            }//while que recorre los resultados y los mete en el array

            //indico que sera un JSON con UTF-8
            header("Content-type: application/json; charset=utf-8");
            //muestro por pantalla
            echo json_encode($array);
        }

    }//uso de la bbdd hobbies
}
