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
        
        /* echo $_GET['opcion']."<br>"; */
        
        //opcion que devuelve los datos del usuario que le indiquemos
        if($opcion=="usuario"){
            
            //recojo las condiciones de busqueda (alias y contraseña)
            $condicion=$_GET['condicion'];
            $condicion2=$_GET['condicion2'];
            
            //hago la consulta
            $resultado=mysqli_query($conexion,"SELECT * FROM USUARIOS WHERE ALIAS='".$condicion."'");

            //recorro las posibles salidas (al ser alias clave primaria es imposible que de mas de uno)
            while($fila=mysqli_fetch_row($resultado)){
                //compruebo la contraseña que me dio el usuario
                if(password_verify($condicion2,$fila[4])){
                    //guardo los resultados en un array que depues devolvere como JSON
                    $array[$aux]=[$fila[0],$fila[1],$fila[2],$fila[3],$fila[4],$fila[5]];
                }//verificacion de la contraseña
            }//while que lo recorre

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
                $resultado=mysqli_query($conexion,"DELETE FROM USUARIOS WHERE ALIAS='".$condicion."'");

                //hago una busqueda para comprobar
                $resultado=mysqli_query($conexion,"SELECT * FROM USUARIOS WHERE ALIAS='".$condicion."'");

                //recorro los resultados
                while($fila=mysqli_fetch_row($resultado)){
                    $array[$aux]=[$fila[0],$fila[1],$fila[2],$fila[3],$fila[4],$fila[5]];
                }//while que lo recorre
            }

            //indico en la cabecera que sera un json
            header("Content-type: application/json; charset=utf-8");
            //muestro el JSON por pantalla
            echo json_encode($array);
        }//borrado

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
                $mensaje='Hola, he modificado tu clave como me pedistes. Tu clave temporal es '.$array[0][5];
                $cabeceras = 'From: jes11989@hotmail.com';

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
    }
}
?>