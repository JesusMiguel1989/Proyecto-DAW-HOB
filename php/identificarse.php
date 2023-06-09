<?php
    session_start();
    include "./greenhob.php";
    
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

    //creo la conexion
    $conexion=new mysqli($host,$usuario,$password,$bbdd);
    //recojo los datos de la url
    $nombre=$_POST['nombre'];
    $key=$_POST['contraseña'];

    if(!$conexion){
        echo "No se ha podido establecer la conexion";
    }else{
        if(mysqli_query($conexion,"use ".$bbdd)){
            //busco por nombre
            $resultado=mysqli_query($conexion,"SELECT CONTRASEÑA FROM USUARIOS WHERE ALIAS='".$nombre."'");

            //compruebo la cantidad de resultados que me da
            if(mysqli_num_rows($resultado)!=0){
                //asigno a la variable fila el resultado de la consulta
                $fila=mysqli_fetch_row($resultado);
                //compruebo la contraseña recibida con la actual de la bbdd
                if(password_verify($key,$fila[0])){
                    //asigno a la sesion de php los valores
                    $_SESSION['nombre']=$nombre;
                    $_SESSION['key']=$key;
                    //lo devuelvo por la cabecera
                    header("Refresh:0; url=../index.html");
                }else{
                    echo "llega por el else";
                    //en caso de no coincidir vuelve a la principal sin pasar datos
                    header("Refresh:10; url=../identificarse.html");
                }
            }else{
                header("Refresh:0; url=../identificarse.html");
            }
        }
    }
    

    
?>