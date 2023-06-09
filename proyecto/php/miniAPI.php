<?php
    session_start();
    include "../../greenhob.php";
    $root="https://www.hoby.es";
    $from="adminHOB@hoby.es";
    
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
    header("Access-Control-Allow-Credentials: true");
    header('Content-Type: application/json');
    $method = $_SERVER['REQUEST_METHOD'];
    if ($method == "OPTIONS") {
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
        header("HTTP/1.1 200 OK");
        die();
    }

    $conexion=new mysqli($host,$usuario,$password,$bbdd);

$array=[];
$aux=0;
$conexion=new mysqli($host,$usuario,$password,$bbdd);

if(!$conexion){
    echo "No se ha podido establecer la conexion";
}else{
    if(true){
        //mysqli_query($conexion,"use ".$bbdd)
        $opcion=$_GET['opcion'];
        $op=$_POST['opcion'];
        
        //hago limpia de usuarios que no han hecho el ultimo paso del registro (correo)
        $fecha=date("Y-m-d");

        $resultado=mysqli_query($conexion,"SELECT ALIAS FROM usuarios WHERE F_REGISTRO<'".$fecha."'");
        
        $aux=0;
        while($fila=mysqli_fetch_row($resultado)){
            $eliminacion=mysqli_query($conexion,"DELETE FROM usuarios WHERE ALIAS='".$fila[0]."'");
        }

        //opcion que devuelve los datos del usuario que le indiquemos
        if($opcion=="usuario"){
            //recojo las condiciones de busqueda (alias y contraseña)
            $alias=str_replace("_"," ",$_GET['condicion']);//alias introducido por el usuario
            $pass=$_GET['condicion2'];//contraseña introducida por el usuario
            
            //hago la consulta
            $resultado=mysqli_query($conexion,"SELECT * FROM usuarios WHERE ALIAS='".$alias."' AND ESTADO='OK'");

            //recorro las posibles salidas (al ser alias clave primaria es imposible que de mas de uno)
            while($fila=mysqli_fetch_row($resultado)){
                $fecha = date("d/m/Y", strtotime($fila[1]));
                //compruebo la contraseña que me dio el usuario
                if(password_verify($pass,$fila[4])){
                    //guardo los resultados en un array que depues devolvere como JSON
                    $array[$aux]=[$fila[0],$fecha,$fila[2],$fila[3],$fila[4],$fila[5],$fila[6],$_SESSIO['alias']];
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
            $alias=str_replace("_"," ",$_GET['condicion']);
            $pass=$_GET['condicion2'];
            
            //hago la consulta
            $resultado=mysqli_query($conexion,"SELECT * FROM usuarios WHERE ALIAS='".$alias."'");

            //recorro las posibles salidas (al ser alias clave primaria es imposible que de mas de uno)
            while($fila=mysqli_fetch_row($resultado)){
                //compruebo la contraseña que me dio el usuario
                if($pass==$fila[4]){
                    $fecha_convertida = date("d/m/Y", strtotime($fila[1]));
                    //guardo los resultados en un array que depues devolvere como JSON
                    $array[$aux]=[$fila[0],$fecha_convertida,$fila[2],$fila[3],$fila[4],$fila[5]];
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
            $alias=str_replace("_"," ",$_GET['condicion']);
            $fecha=$_GET['condicion2'];
            $fecha = date("Y/d/m", strtotime($fecha));

            $localidad=$_GET['condicion3'];
            $email=$_GET['condicion4'];
            $condicion5=$_GET['condicion5'];
            $alias2=str_replace("_"," ",$_GET['condicion6']);//viejo alias
            //hasheo la clave dada por el usuario
            $pass=password_hash($condicion5,PASSWORD_DEFAULT);
            
                
            //realizo el cambio en blacklist
            /*$resultado=mysqli_query($conexion,"UPDATE blacklist 
                SET ALIAS='".$alias."'
                WHERE ALIAS='".$alias2."'");

            //realizo la update en Libros
            $resultado=mysqli_query($conexion,"UPDATE libros 
                SET ALIAS='".$alias."'
                WHERE ALIAS='".$alias2."'");
            
            $resultado=mysqli_query($conexion,"UPDATE practica 
                SET ALIAS='".$alias."'
                WHERE ALIAS='".$alias2."'");*/

            //realizo el update en usuarios
            $resultado=mysqli_query($conexion,"UPDATE usuarios 
                SET ALIAS='".$alias."', F_NACIMIENTO='".$fecha."', 
                    LOCALIDAD='".$localidad."', EMAIL='".$email."', CONTRASEÑA='".$pass."'
                WHERE ALIAS='".$alias."'");
                
            //tras la modificacion le pido a la bbdd que me devuelva la situacion de dicho usuario
            $resultado=mysqli_query($conexion,"SELECT * FROM usuarios WHERE ALIAS='".$alias."'");

            //recorro los resultados
            while($fila=mysqli_fetch_row($resultado)){
                $fecha_convertida = date("d/m/Y", strtotime($fila[1]));
                $array[$aux]=[$fila[0],$fecha_convertida,$fila[2],$fila[3],$fila[4],$fila[5]];
            }//while que lo recorre

            //indico en la cabecera que sera un json
            header("Content-type: application/json; charset=utf-8");
            //muestro el JSON por pantalla
            echo json_encode($array);
        }//modificacion de usuario

        //opcion de borrado de usuario
        if($opcion=="borrar"){
            //cojo la condicion que sera la clave primaria
            $alias=str_replace("_"," ",$_GET['condicion']);
            $pass=$_GET['condicion2'];

            if($alias!="Administrador"){
                //primero hago la comprobacion de la contraseña
                $previa=mysqli_query($conexion,"SELECT CONTRASEÑA FROM usuarios WHERE ALIAS='".$alias."'");
                $fila=mysqli_fetch_row($previa);
                //comprobamos la clave dada con la de la BBDD
                if(password_verify($pass,$fila[0])){
                    //realizo el borrado en funcion del alias dado
                    $resultado=mysqli_query($conexion,"DELETE FROM blacklist WHERE ALIAS='".$alias."'");
                    $resultado=mysqli_query($conexion,"DELETE FROM usuarios WHERE ALIAS='".$alias."'");
                }
            }            
        }//borrado

        //opcion para regenerar la contraseña
        if($opcion=="correo"){
            
            //recojo las condiciones de busqueda (alias y contraseña)
            $alias=str_replace("_"," ",$_GET['condicion']);
            $email=$_GET['condicion2'];

            //variables
            $aux=0;

            //hago la consulta
            $resultado=mysqli_query($conexion,"SELECT * FROM usuarios WHERE ALIAS='".$alias."' AND EMAIL='".$email."'");
            
            //1 saco la cantidad de filas de la consulta, si es 1 existe
            if(mysqli_num_rows($resultado)==1){
                //generamos una clave aleatoria
                $clave="";
                for($i=0;$i<8;$i++){
                    $rango1=rand(65,90);
                    $char=chr($rango1);
                    $clave.=$char;
                }//for que genera las letras

                //establezco los valores de la sesion
                $_SESSION['alias'] = $alias;
                //$_SESSION['keynueva'] = $clave;
                $_SESSION['mail'] = $email;

                while($fila=mysqli_fetch_row($resultado)){
                    $array[$aux]=[$fila[0],$fila[1],$fila[2],$fila[3],$fila[4],$clave,$_SESSION['alias']];
                }

                /* echo print_r($array); */
                $password=password_hash($clave,PASSWORD_DEFAULT);

                //modifico la tabla
                $resultado=mysqli_query($conexion,"UPDATE usuarios 
                SET CONTRASEÑA='".$password."'
                WHERE ALIAS='".$alias."'");               

                //envio del correo

                $to=$email;
                $titulo=utf8_decode('Recuperación de la contraseña HOB');
                $texto='Hola, he modificado tu clave como me pedistes. Tu clave temporal es <b>'.$array[0][5].'</b>';

                //creo el mensaje con estilos html y css
                
                $mensaje="<html><head><style> .contenedor { background-color: rgb(152, 226, 202); color: black; border: 5px double rgb(255, 217, 107); text-align: center; padding: 1rem 3rem; margin: 3rem auto; border-radius: 0.375rem; box-shadow: 0 1rem 3rem rgba(0, 0, 0, .5); } .hb{ font-size: 35px; color: rgb(255, 217, 107); font-weight:bold; } .o{ font-size: 35px; color: rgb(112, 173, 71); font-weight:bold;} .titulo { font-weight: bold; } .amarillo { height: .5rem; background-color: rgb(255, 217, 107); margin: 2rem 0; border: 0px solid; border-radius: 0.375rem; } .parrafo { font-size: 1.5rem; margin-bottom: 2rem; text-align: center; } </style></head><body><div class='contenedor'><span class='hb'>H</span><span class='o'>O</span><span class='hb '>B</span><hr class='amarillo'><center><p class='parrafo'>".$texto."</p></center></div></body></html>";
                
                $unsalto="\r\n";
                
                $cabeceras = 'From:'.$from.$unsalto;
                $cabeceras .= "MIME-Version: 1.0".$unsalto;
	            $cabeceras .= "Content-Type: text/html;";
	            $cabeceras .= " boundary=Separador_de_partes";

                //envio
                mail($to,$titulo,$mensaje,$cabeceras);

            }
            //indico que sera un JSON con UTF-8
            header("Content-type: application/json; charset=utf-8");
            //muestro por pantalla
            echo json_encode($array);
        }//opcion correo

        //opcion para la modificacion de la imagen
        $opcionfoto=$_POST['condicion'];

        if($opcionfoto=="imagen"){
            //recojo las variables            
            $condicion=$_FILES['archivo'];
            $condicion2=str_replace("_"," ",$_POST['condicion3']);

            $extension=substr(strstr($condicion['type'],"/"),1);
            
            $destino="../fotoPerfiles/".$condicion['name'];

            if(file_exists("../fotoPerfiles/".$condicion2.".png")){
                $ext="png";
            }
            if(file_exists("../fotoPerfiles/".$condicion2.".jpg")){
                $ext="jpg";
            }
            if(file_exists("../fotoPerfiles/".$condicion2.".jpeg")){
                $ext="jpeg";
            }

            echo "../fotoPerfiles/".$condicion2.".".$ext."<br>";

            //borrado de la foto si estuviera
            if(unlink("../fotoPerfiles/".$condicion2.".".$ext)){
                echo "correcto";
            }else{
                echo "lastima, continuar?";
            }

            //copio el fichero en la carpeta del servidor
            if(copy($condicion['tmp_name'],$destino)){
                rename("../fotoPerfiles/".$condicion['name'],"../fotoPerfiles/".$condicion2.".".$extension);
                $resultado=mysqli_query($conexion,"UPDATE usuarios 
                        SET FOTO='./fotoPerfiles/".$condicion2.".".$extension."'
                        WHERE ALIAS='".$condicion2."'");
            }

            //hago una busqueda para comprobar
            $resultado=mysqli_query($conexion,"SELECT * FROM usuarios WHERE ALIAS='".$condicion."'");

            //recorro los resultados
            while($fila=mysqli_fetch_row($resultado)){
                $array[$aux]=[$fila[0],$fila[1],$fila[2],$fila[3],$fila[4],$fila[5]];
            }//while que lo recorre

            //"http://".$_SERVER['DOCUMENT_ROOT']."/proyecto/perfil.html";
            
            header("Refresh:0; url=".$root."/perfil.html");
        }//if cambio foto

        ///////////////////////////Libros/////////////////////////////////////

        //opcion para agregar libro LEIDO
        if($opcion=="agregarleido"){
            //guardo los datos
            $cod=$_GET['condicion1'];
            $alias=str_replace("_"," ",$_GET['condicion2']);
            //le quito las barras bajas del titulo
            $titulo=str_replace("_"," ",$_GET['condicion3']);
            //le quito los espacios al autor
            $autor=str_replace("_"," ",$_GET['condicion4']);
            $pag=$_GET['condicion5'];
            $portada=$_GET['condicion6'];
            $leido=$_GET['condicion7'];//si o no
            $valoracion=$_GET['condicion8'];
            $editorial=str_replace("_"," ",$_GET['condicion9']);
            $comentario=str_replace("_"," ",$_GET['condicion10']);
            
            //echo $cod."\n".$alias."\n".$titulo."\n".$autor."\n".$pag."\n".$portada."\n".$leido."\n".$valoracion."\n".$editorial."\n".$comentario."\nprueba";

            //1 compruebo que el usuario este en la base de datos
            $comprobadorUsuario=mysqli_query($conexion,"SELECT * FROM usuarios WHERE ALIAS='".$alias."'");
           
            //si devuelve 1 o mas datos es que eexiste el usuario
            if(mysqli_num_rows($comprobadorUsuario)==1){

                $comprobarUsuISBN=mysqli_query($conexion,"SELECT * FROM libros 
                        WHERE ALIAS='".$alias."' AND COD_LIBRO='".$cod."'");


                if(mysqli_num_rows($comprobarUsuISBN)==0){
                    //si no existe, inserto el libro
                    $insercion=mysqli_query($conexion,"INSERT INTO libros (COD_LIBRO, ALIAS, TITULO, AUTOR, PAGINAS, PORTADA, LEIDO, VALORACION, EDITORIAL, COMENTARIO)
                    VALUES('".$cod."','".$alias."','".$titulo."','".$autor."','".$pag."','".$portada
                    ."','".$leido."',".$valoracion.",'".$editorial."','".$comentario."')");
                    echo mysqli_error($conexion);
                }else{
                    //si ya lo tienes comprobamos si te lo has terminado
                    if(mysqli_num_rows($comprobarUsuISBN)==1){
                        
                        $modificacion=mysqli_query($conexion,"UPDATE libros SET COD_LIBRO='".$cod."', ALIAS='".$alias."'
                        , TITULO='".$titulo."', AUTOR='".$autor."', PAGINAS='".$pag."', PORTADA='".$portada."'
                        , LEIDO='".$leido."', VALORACION='".$valoracion."'
                        WHERE ALIAS='".$alias."' AND COD_LIBRO='".$cod."'");
                        /* mysqli_error($conexion); */
                    }
                }//comprobacion de si el usuario tiene ese libro ya registrado
            }else{
                //echo "Lo siento ese usuario no existe";
            }//comprobacion de usuario

            try {
                //compruebo que tengo registrado que el usuario practica este hobbie, y si no lo agrego a la tabla de "practica"
                $resultado=mysqli_query($conexion,"SELECT * FROM practica WHERE ALIAS='".$alias."' AND COD_HOBBIE='1'");
                if(mysqli_num_rows($resultado)==0){
                    $resultado=mysqli_query($conexion,"INSERT INTO practica (ALIAS,COD_HOBBIE) VALUES('".$alias."','1')");
                }
            
            } catch (\Throwable $th) {
                $array= [mysqli_error($conexion)];
            }
            
        }

        //opcion para mostrar libros que no estan terminados
        if($opcion=="mostrarLeyendo"){
            $alias=str_replace("_"," ",$_GET['condicion1']);
            $limite=intval($_GET['condicion2']);

            $resultado=mysqli_query($conexion,"SELECT * FROM libros WHERE ALIAS='".$alias."' AND LEIDO='NO'
            LIMIT ".$limite.",20");
                        /* LIMIT ".$limite.",20 */

            $resultado2=mysqli_query($conexion,"SELECT * FROM libros WHERE ALIAS='".$alias."' AND LEIDO='NO'");
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
        if($opcion=="modificarLibroUsu"){
            $alias=str_replace("_"," ",$_GET['condicion2']);
            $cod=$_GET['condicion1'];
            $nota=$_GET['condicion3'];
            $comentario=str_replace("_"," ",$_GET['condicion4']);
            $titulo=str_replace("_"," ",$_GET['condicion5']);
            $autor=str_replace("_"," ",$_GET['condicion6']);
            $editorial=str_replace("_"," ",$_GET['condicion7']);
            $portada=$_GET['condicion8'];
            $pag=$_GET['condicion9'];

            $resultados=mysqli_query($conexion,"SELECT * FROM libros WHERE ALIAS='".$alias."' AND COD_LIBRO='".$cod."'");
            $resultado=mysqli_num_rows($resultados);

            if($resultado>0){
                $modificacion=mysqli_query($conexion,"UPDATE libros SET LEIDO='SI', VALORACION='".$nota."', COMENTARIO='".$comentario."'
                        WHERE ALIAS='".$alias."' AND COD_LIBRO='".$cod."'"); 
            }else{
                //hago la comprobacion de si este usuario esta o no modificando el comentario
                $resultado=mysqli_query($conexion,"SELECT COMENTARIO FROM libros
                    WHERE ALIAS='".$alias."' AND COD_LIBRO='".$isbn."'");

                $fila=mysqli_fetch_row($resultado);//lo meto todo en la variable

                if($fila[0]==null){
                    //no tiene comentario, se agrega
                    $insercion=mysqli_query($conexion,"INSERT INTO libros (COD_LIBRO,ALIAS,TITULO,AUTOR,PAGINAS,PORTADA,LEIDO,VALORACION,EDITORIAL,COMENTARIO) 
                        VALUES('".$cod."','".$alias."','".$titulo."','".$autor."','".$pag."','".$portada."','SI','".$nota."','".$editorial."','".$comentario."')");
                }else{
                    //tiene un comentario previo
                    $edicion=mysqli_query($conexion,"UPDATE libros SET LEIDO='SI', COMENTARIO='".$comentario."', VALORACION='".$nota."'
                        WHERE ALIAS='".$alias."' AND COD_LIBRO='".$cod."'");
                }
            }
        }

        //eliminacion del libro por abandono
        if($opcion=="eliminarLibro"){
            $alias=str_replace("_"," ",$_GET['condicion1']);
            $cod=$_GET['condicion2'];
            
            echo $alias."\n".$cod."\n";
            echo "DELETE FROM libros WHERE ALIAS='".$alias."' AND COD_LIBRO='".$cod."' AND ALIAS NOT IN (SELECT ALIAS FROM blacklist)";

            $borrado=mysqli_query($conexion,"DELETE FROM libros WHERE ALIAS='".$alias."' AND COD_LIBRO='".$cod."' AND ALIAS NOT IN (SELECT ALIAS FROM usuarios WHERE ESTADO = 'Baneado' OR ESTADO = 'Pendiente')");
        }
        
        //para mostrar ibros leidos de usuario indicado
        if($opcion=="mostrarLeidos"){
            $alias=str_replace("_"," ",$_GET['condicion1']);
            $limite=intval($_GET['condicion2']);

            $resultado=mysqli_query($conexion,"SELECT * FROM libros WHERE ALIAS='".$alias."' AND LEIDO='SI'
            LIMIT ".$limite.",20");

            $resultado2=mysqli_query($conexion,"SELECT * FROM libros WHERE ALIAS='".$alias."' AND LEIDO='SI'");
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
            $resultado=exec('mysqldump --opt -h localhost -u u720382761_administrador --password="Legolas_89" u720382761_hobbie > ../restore/'.$nombreArchivo);
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
                    echo "sigue siendo no";
                    break;
                default:
                    break;
            }
            //echo "url=".$_SERVER['DOCUMENT_ROOT']."/proyecto/admin.html";
            header("Refresh:0 ; url=".$root."/admin.html");
        }//copia de seguridad

        if($opcion=="restore"){
            //recojo el nombre del fichero elegido
            $fichero=$_GET['condicion1'];
            $extension=substr($fichero,strrpos($fichero, ".")+1);


            if($extension=="sql"){
                echo 'C:/Apache24/htdocs/proyecto/restore/'.$fichero."<br>";
                    ////////////////////////////////////////////CUIDADO RUTA
                    $resultado=exec('mysql -h localhost -u u720382761_administrador --password="Legolas_89" u720382761_hobbie < ../restore/'.$fichero);
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
            }else{
                echo "se siente";
            }
            header("Refresh:0 ; url=".$root."/admin.html");

        }//opcion restore

        //eliminacion de usuarios por castigo
        if($opcion=="eliminacion"){
            $alias=str_replace("_"," ",$_GET['condicion1']);

            //hago el borrado del usuario
            $resultado=mysqli_query($conexion,"DELETE FROM usuarios WHERE ALIAS='".$alias."'");
            $resultado=mysqli_query($conexion,"DELETE FROM blacklist WHERE ALIAS='".$condicion."'");
            $opcion="actualizar";
        }

        //actualizar la bbdd (eliminacion de registros de usuarios eliminados)
        if($opcion=="actualizar"){
            
            $resultado=mysqli_query($conexion,"DELETE FROM libros WHERE ALIAS NOT IN (SELECT ALIAS FROM usuarios)");
            $resultado=mysqli_query($conexion,"DELETE FROM blacklist WHERE ALIAS NOT IN (SELECT ALIAS FROM usuarios)");
            
            //saco un array con los nombres de los usuarios en activo
            $resultados=mysqli_query($conexion,"SELECT ALIAS FROM usuarios");
            while($fila=mysqli_fetch_row($resultados)){
                $array[$aux]=[$fila[0]];
                $aux++;
            }//while que lo recorre 
            
            //saco un array de las fotos del perfil de los usuarios
            $archivos=scandir("../fotoPerfiles");
            array_shift($archivos);
            array_shift($archivos);

            //recorro ambos array para eliminar los que no estan activo ya
            foreach($archivos as $value){
                $nombre=substr($value,0,strpos($value,"."));
                
                $centinela=false;
                for($i=0;$i<$aux;$i++){
                    if($array[$i][0]==$nombre){
                        $centinela=true;
                    }
                }
                if(!$centinela){
                    unlink("../fotoPerfiles/".$value);
                }
            }
            
            /* //indico que sera un JSON con UTF-8
            header("Content-type: application/json; charset=utf-8");
            //muestro por pantalla
            echo json_encode($array); */
        }

        //agregar una tienda a la BBDD
        if($opcion=="agregartienda"){
            $cod=$_GET['condicion1'];
            $nombre=str_replace("_"," ",$_GET['condicion2']);
            $telefono=str_replace("_"," ",$_GET['condicion3']);
            $direccion=str_replace("_"," ",$_GET['condicion4']);
            $localidad=str_replace("_"," ",$_GET['condicion5']);
            $provincia=$_GET['condicion6'];
            $cod_hob=$_GET['condicion7'];
            $logo=$_GET['condicion8'];
            $web=$_GET['condicion9'];
            $resultado=mysqli_query($conexion,"INSERT INTO tiendas (COD_TIENDA,LOCALIDAD,PROVINCIA,NOMBRE,DIRECCION,TELEFONO,COD_HOBBIE,LOGO,WEB)
                VALUES('".$cod."','".$localidad."','".$provincia."','".$nombre."','".$direccion."','".$telefono."','".$cod_hob."','".$logo."','".$web."')");
            //agrego la tienda a la tabla de la relacion muchos a muchos    
            $resultado=mysqli_query($conexion,"INSERT INTO tiene (COD_TIENDA,COD_HOBBIE) VALUES ('".$cod."','".$cod_hob."')");
            
            /* echo mysqli_error($conexion);
            //indico que sera un JSON con UTF-8
            header("Content-type: application/json; charset=utf-8");
            //muestro por pantalla
            echo json_encode($array); */
            header("Refresh:0 ; url=".$root."/admin.html");
        }


        //modificar una tienda a la BBDD
        if($opcion=="modificartienda"){
            $cod=$_GET['condicion1'];
            $nombre=str_replace("_"," ",$_GET['condicion2']);
            $telefono=str_replace("_"," ",$_GET['condicion3']);
            $direccion=str_replace("_"," ",$_GET['condicion4']);
            $localidad=$_GET['condicion5'];
            $provincia=$_GET['condicion6'];
            $cod_hob=$_GET['condicion7'];
            $logo=$_GET['condicion8'];
            $web=$_GET['condicion9'];

            $resultado=mysqli_query($conexion,"UPDATE  tiendas SET LOCALIDAD='".$localidad."' 
                    ,PROVINCIA='".$provincia."', NOMBRE='".$nombre."' , DIRECCION='".$direccion."' 
                    ,TELEFONO='".$telefono."' ,COD_HOBBIE='".$cod_hob."' ,LOGO='".$logo."' , WEB='".$web."'
                    WHERE COD_TIENDA='".$cod."'");
            //header("Refresh:0 ; url=http://".$root."/proyecto/admin.html");
        }

        //saco un listado de los hobbies que estan en la BBDD
        if($opcion=="cod_hobbie"){
            $resultado=mysqli_query($conexion,"SELECT COD_HOBBIE FROM hobbie");

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
            $resultado=mysqli_query($conexion,"SELECT COD_TIENDA FROM tiendas");

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
            $resultado=mysqli_query($conexion,"DELETE FROM tiendas WHERE COD_TIENDA='".$cod."'");
        }//borrar tienda

        //buscar tienda
        if($opcion=="buscartienda"){
            $cod=$_GET['condicion1'];
            //hago la consulta
            $resultado=mysqli_query($conexion,"SELECT * FROM tiendas WHERE COD_TIENDA='".$cod."'");

            //recorro las posibles salidas (al ser alias clave primaria es imposible que de mas de uno)
            while($fila=mysqli_fetch_row($resultado)){
                $array[$aux]=[$fila[0],$fila[1],$fila[2],$fila[3],$fila[4],$fila[5],$fila[6],$fila[7],$fila[8]];
                $aux++;
            }//while que lo recorre

            //indico que sera un JSON con UTF-8
            header("Content-type: application/json; charset=utf-8");
            //muestro por pantalla
            echo json_encode($array);
        }//buscar tienda

        //buscar usuario
        if($opcion=="buscarusuario"){
            
            $alias=str_replace("_"," ",$_GET['condicion1']);
            //hago la consulta
            $resultado=mysqli_query($conexion,"SELECT EMAIL, ESTADO FROM usuarios WHERE ALIAS='".$alias."'");

            $vecesBaneado=mysqli_num_rows(mysqli_query($conexion,"SELECT * FROM blacklist WHERE ALIAS='".$alias."'"));

            $fila=mysqli_fetch_row($resultado);
            if($fila[1]=="Banneado"){
                $array[$aux]=[$fila[0],$fila[1],$vecesBaneado,mysqli_fetch_row(mysqli_query($conexion,"SELECT MOTIVO FROM blacklist WHERE ALIAS='".$alias."' 
                AND FEC_TOPE !='9999-01-01'"))];
                /* $array[$aux]=[mysqli_fetch_row(mysqli_query($conexion,"SELECT MOTIVO FROM blacklist WHERE ALIAS='".$alias."' 
                    AND FEC_TOPE !='9999-01-01'")),$vecesBaneado]; */
            }else{
                $array[$aux]=[$fila[0],$fila[1],$vecesBaneado,""];
                //$array[$aux]=[$fila[0],$vecesBaneado];
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
            $alias=str_replace("_"," ",$_GET['condicion1']);
            $motivo=$_GET['condicion2'];

            //calculo la fecha del banneo, seran 30 dias
            $fechaActual=date("Y-m-d");
            $fecha=new DateTime($fechaActual);
            $fecha->add(new DateInterval('P30D'));
            $dia=$fecha->format("N");

            $fechaCaducidad=$fecha->format("Y-m-d");

            $motivo=str_replace("_"," ",$motivo);
            $comprobacion=mysqli_fetch_row(mysqli_query($conexion,"SELECT ESTADO FROM usuarios WHERE ALIAS='".$alias."'"));

            if($comprobacion[0]!="Banneado"){
                $resultado=mysqli_query($conexion,"UPDATE usuarios SET ESTADO='Banneado' WHERE ALIAS='".$alias."'");
                $resultado=mysqli_query($conexion,"INSERT INTO blacklist (ALIAS, FEC_TOPE, MOTIVO)
                        VALUES ('".$alias."','".$fechaCaducidad."','".$motivo."')");
                
                //mail de aviso al usuario
                $correo=mysqli_fetch_row(mysqli_query($conexion,"SELECT EMAIL FROM usuarios WHERE ALIAS='".$alias."'"));
                $to=$correo[0];
                $titulo=utf8_decode('Aviso de Banneo en HOB');
                $texto=utf8_decode('Estimado usuario <b>'.$alias.'</b>,<br> Su cuenta ha sido bloqueada durante 30 días. El motivo es:<br><u>'.utf8_decode($motivo).'.</u>');

                //creo el mensaje con estilos html y css
                $mensaje="<html><head><style> .contenedor { background-color: rgb(152, 226, 202); color: black;  border-spacing: 2px; border: 5px double rgb(255, 217, 107); text-align: center; padding: 1rem 3rem; margin: 3rem auto; border-radius: 0.375rem; box-shadow: 0 1rem 3rem rgba(0, 0, 0, .5); } .hb{ font-size: 35px; color: rgb(255, 217, 107); font-weight:bold; } .o{ font-size: 35px; color: rgb(112, 173, 71); font-weight:bold;} .titulo { font-weight: bold; } .amarillo { height: .5rem; background-color: rgb(255, 217, 107); margin: 2rem 0; border: 0px solid; border-radius: 0.375rem; } .parrafo { font-size: 1.5rem; margin-bottom: 2rem; text-align: center; } </style></head><body><div class='contenedor'><span class='hb'>H</span><span class='o'>O</span><span class='hb '>B</span><hr class='amarillo'><center><p class='parrafo'>".$texto."</p></center></div></body></html>";
                                
                $unsalto="\r\n";
                $encabezados = "";
                
                $cabeceras = 'From: <'.$from.'>'.$unsalto;
                $cabeceras .= "MIME-Version: 1.0".$unsalto;
	            $cabeceras .= "Content-Type: text/html;";
	            $cabeceras .= " boundary=Separador_de_partes";  

                //envio
                mail($to,$titulo,$mensaje,$cabeceras);
            }else{
                echo "no torturemos al usuario";
            }
        }//banear usuario

        //perdonar usuario
        if($opcion=="perdonarusuario"){
            $alias=str_replace("_"," ",$_GET['condicion1']);
            $resultado=mysqli_query($conexion,"UPDATE usuarios SET ESTADO='OK' WHERE ALIAS='".$alias."'");
            $resultado=mysqli_query($conexion,"UPDATE blacklist SET FEC_TOPE='9999-01-01' WHERE ALIAS='".$alias."' AND FEC_TOPE !='9999-01-01'");
        }//perdonar usuario

        //actualizacion de los usuarios baneados
        if($opcion=="redencion"){
            $fechaActual=date("Y-m-d");
            //busco los usuarios que han cumplido con su castigo
            $resultado=mysqli_query($conexion,"SELECT * FROM blacklist WHERE FEC_TOPE<='".$fechaActual."'");

            //recorro la tabla de los usuarios baneados para eliminar los registros
            while($fila=mysqli_fetch_row($resultado)){
                //se borran
                $resultado=mysqli_query($conexion,"UPDATE usuarios SET ESTADO='OK' WHERE ALIAS='".$fila[2]."'");
                $resultado=mysqli_query($conexion,"UPDATE blacklist SET FEC_TOPE='9999-01-01' WHERE ALIAS='".$fila[2]."'");
            }//while que recorreo los resultaods de la select
            //indico que sera un JSON con UTF-8
            
        }//opcion redencion

        //opcion para buscar libro
        if($opcion=="buscarLibro"){
            $cod=$_GET['condicion1'];

            $resultados=mysqli_query($conexion,"SELECT * FROM libros WHERE COD_LIBRO='".$cod."'");

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
            $alias=str_replace("_"," ",$_GET['condicion2']);
            $titulo=str_replace("_"," ",$_GET['condicion3']);
            //$titulo=str_replace("_"," ",$titulo);
            $autor=str_replace("_"," ",$_GET['condicion4']);
            //$autor=str_replace("_"," ",$autor);
            $pag=$_GET['condicion5'];
            $portada=$_GET['condicion6'];
            $leido=$_GET['condicion7'];//si o no
            $valoracion=$_GET['condicion8'];

            //modificamos el registro que tenga los datos indicados
            $resultado=mysqli_query($conexion,"UPDATE libros SET TITULO='".$titulo."', AUTOR='".$autor."',
                     PAGINAS='".$pag."', PORTADA='".$portada."', LEIDO='".$leido."', VALORACION='".$valoracion."'
                     WHERE Alias='".$alias."' AND COD_LIBRO='".$cod."'");
        }

        //opcion para agregar un libro al usuario que elijamos
        if($opcion=="insertarLibro"){
            echo $opcion;
            $cod=$_GET['condicion1'];
            $alias=str_replace("_"," ",$_GET['condicion2']);
            $titulo=str_replace("_"," ",$_GET['condicion3']);
            $autor=str_replace("_"," ",$_GET['condicion4']);
            $pag=$_GET['condicion5'];
            $portada=$_GET['condicion6'];
            $leido=$_GET['condicion7'];//si o no
            $valoracion=$_GET['condicion8'];

            //agregamos el libro
            $resultado=mysqli_query($conexion,"INSERT INTO libros (COD_LIBRO, ALIAS, TITULO, AUTOR, PAGINAS, PORTADA, LEIDO, VALORACION)
            VALUES('".$cod."','".$alias."','".$titulo."','".$autor."','".$pag."','".$portada."','".$leido."','".$valoracion."')");
        }//opcion de agregar libro

        //opcion de borrar libro
        if($opcion=="borrarLibro"){
            $cod=$_GET['condicion1'];
            $alias=str_replace("_"," ",$_GET['condicion2']);

            //Borramos el libro
            $resultado=mysqli_query($conexion,"DELETE FROM libros WHERE ALIAS='".$alias."' AND COD_LIBRO='".$cod."'");
        }

        ////////////PAG tiendas
        if($opcion=="buscadorTiendaLocalidad"){
            $hobbie=$_GET['condicion1'];
            $localidad=$_GET['condicion2'];
            
            //saco las tiendas que concuerden con ambos resultados
            $resultado=mysqli_query($conexion,"SELECT * FROM tiendas WHERE PROVINCIA='".$localidad."' 
                    AND COD_HOBBIE=(SELECT COD_HOBBIE FROM hobbie WHERE COD_TIENDA IN (
                                SELECT COD_TIENDA FROM tiene WHERE COD_HOBBIE = (
                                        SELECT COD_HOBBIE FROM hobbie WHERE NOMBRE='".$hobbie."')
                                        ))");
            
            while($fila=mysqli_fetch_row($resultado)){
                $array[$aux]=[$fila[0],$fila[1],$fila[2],$fila[3],$fila[4],$fila[5],$fila[6],$fila[7],$fila[8]];
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
            $comprobacion=mysqli_query($conexion,"SELECT ALIAS FROM usuarios WHERE ALIAS='".$alias."'");
            

            //compruebo que el usuario esta en la BBDD
            if(mysqli_num_rows($comprobacion)==1 && strlen($mensaje)<500){

                //inserto la sugerencia en la BBDD
                $insercion=mysqli_query($conexion,"INSERT INTO sugerencias (ALIAS,APARTADO,TEXTO)
                    VALUES('".$alias."','".$asunto."','".utf8_encode($mensaje)."')");

                echo mysqli_error($conexion);
                $to=$from;
                $mensaje=utf8_decode("El mensaje es de ".$alias." cuyo Correo electronico es: ".$mail.". 
                Y su Mensaje es:
                ".$mensaje);

                $mensaje="<html><head><meta charset='UTF-8'><style>
                 .contenedor { background-color: rgb(152, 226, 202); color: black;  border-spacing: 2px; border: 5px double rgb(255, 217, 107); text-align: center; padding: 1rem 3rem; margin: 3rem auto; box-shadow: 0 1rem 3rem rgba(0, 0, 0, .5); } 
                 .hb{ font-size: 35px; color: rgb(255, 217, 107); font-weight:bold; } 
                 .o{ font-size: 35px; color: rgb(112, 173, 71); font-weight:bold;} 
                 .titulo { font-weight: bold; } 
                 .amarillo { height: .5rem; background-color: rgb(255, 217, 107); margin: 2rem 0; border: 0px solid; border-radius: 0.375rem; } 
                 .parrafo { font-size: 1.5rem; margin-bottom: 2rem; text-align: center; } 
                 </style>
                 </head><body><div class='contenedor'><span class='hb'>H</span><span class='o'>O</span><span class='hb '>B</span><hr class='amarillo'><center><p class='parrafo'>".$mensaje."</p></center></div></body></html>";
                                
                $unsalto="\r\n";
                $encabezados = "";
                
                $cabeceras = 'From:'.$mail.$unsalto;
                $cabeceras .= "MIME-Version: 1.0".$unsalto;
	            $cabeceras .= "Content-Type: text/html;";
	            $cabeceras .= " boundary=Separador_de_partes";

                //$cabeceras = 'From: '. $mail;

                
                //funcion para enviar el mensaje
                if(mail($to,$asunto,$mensaje,$cabeceras)){
                    $array=1;
                }else{
                    $array=0;
                }
                
                //indico que sera un JSON con UTF-8
                header("Content-type: application/json; charset=utf-8");
                //muestro por pantalla
                echo json_encode($array);
            }
        }

        //Comentarios
        if($opcion=="comentario"){
            $isbn=$_GET['condicion1'];
            $limite=intval($_GET['condicion2']);

            $resultado=mysqli_query($conexion,"SELECT ALIAS, VALORACION, COMENTARIO FROM libros WHERE COD_LIBRO='".$isbn."' AND COMENTARIO IS NOT NULL AND COMENTARIO <>''
            LIMIT ".$limite.",1");
            $registros=mysqli_num_rows($resultado);

            while($fila=mysqli_fetch_row($resultado)){
                $resultado2=mysqli_query($conexion,"SELECT FOTO FROM usuarios WHERE ALIAS='".$fila[0]."'");
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
                        FROM libros 
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
            $resultado=mysqli_query($conexion,"SELECT COD_TIENDA, NOMBRE FROM tiendas");

            while(($fila=mysqli_fetch_row($resultado))){
                $array[$aux]=[$fila[0],$fila[1]];
                $aux++;
            }//while que recorre los resultados y los mete en el array

            //indico que sera un JSON con UTF-8
            header("Content-type: application/json; charset=utf-8");
            //muestro por pantalla
            echo json_encode($array);
        }

        if($opcion=="comentarioPrevio"){
            $isbn=$_GET['condicion1'];//isbn del libro que en mi tabla es COD_LIBRO
            $alias=str_replace("_"," ",$_GET['condicion2']);//Usuario que lo pide

            //busqueda del comentario con los parametros indicados
            $resultado=mysqli_query($conexion,"SELECT COMENTARIO FROM libros
                    WHERE ALIAS='".$alias."' AND COD_LIBRO='".$isbn."'");

            $fila=mysqli_fetch_row($resultado);//lo meto todo en la variable

            //compruebo que tenga algo el comentario
            if($fila[0]==null || $fila[0]==""){
                $array[0]="No tienes comentario previo";
            }else{
                $array[0]=$fila[0];
            }

            //indico que sera un JSON con UTF-8
            header("Content-type: application/json; charset=utf-8");
            //muestro por pantalla
            echo json_encode($array);
        }

        if($opcion=="restauracion"){
            $restores=scandir("../restore/");
            $retorno=[];
            $aux=0;
            for($i=2;$i<count($restores);$i++){
                $retorno[$aux]=$restores[$i];
                $aux++;
            }

            //indico que sera un JSON con UTF-8
            header("Content-type: application/json; charset=utf-8");
            //muestro por pantalla
            echo json_encode($retorno);
        }
        if($opcion=="comprobarAlias"){
            $resultado=mysqli_query($conexion,"SELECT ALIAS FROM usuarios");
            
            while($fila=mysqli_fetch_row($resultado)){
                $array[$aux]=[$fila[0]];
                $aux++;
            }//while que lo recorre

            //indico que sera un JSON con UTF-8
            header("Content-type: application/json; charset=utf-8");
            //muestro por pantalla
            echo json_encode($array);
        }//funcion para comprobar el alias
        
        if($opcion=="email"){
            $resultado=mysqli_query($conexion,"SELECT EMAIL FROM usuarios");
            
            while($fila=mysqli_fetch_row($resultado)){
                $array[$aux]=$fila[0];
                $aux++;
            }//while que lo recorre

            //indico que sera un JSON con UTF-8
            header("Content-type: application/json; charset=utf-8");
            //muestro por pantalla
            echo json_encode($array);
        }
        
        $opcionKey=$_POST['opcionKey'];
        if($opcionKey!=""){
            $aliasSesion=$_SESSION['alias'];
            $aliasFormulario=$_POST['aliasFormulario'];
            $keyMail=$_POST['contraseñaTemporal'];
            $keyNueva=$_POST['contraseñaNueva'];
            echo $aliasSesion."\n ".$aliasFormulario."\n".$keyMail."\n".$keyNueva."\n";
            if($aliasSesion==$aliasFormulario ){
                $key=mysqli_query($conexion,"SELECT CONTRASEÑA FROM usuarios WHERE ALIAS='".$aliasFormulario."'");
                $fila=mysqli_fetch_row($key);
                echo print_r($fila);
                if(password_verify($keyMail,$fila[0])){
                    echo "entra";
                    $pass=password_hash($keyNueva,PASSWORD_DEFAULT);
                    mysqli_query($conexion,"UPDATE usuarios 
                                    SET CONTRASEÑA='".$pass."'
                                    WHERE ALIAS='".$aliasSesion."'");
                    //destruyo los datos de la sesion
                    session_destroy();
                    header("Refresh:10; url=".$root."/index.html");
                }
            }
        }

    }//uso de la bbdd hobbies
}
?>