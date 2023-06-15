<?php
    //dejo preparado la opcion de sesiones en PHP para una posible migracion
    //session_start();
    include "../../greenhob.php";

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

    $arrayAlias=[];
    $aux=0;
    $conexion=new mysqli($host,$usuario,$password,$bbdd);

    if(!$conexion){
        echo "No se ha podido establecer la conexion";
    }else{
        if(mysqli_query($conexion,"use ".$bbdd)){
            $resultado=mysqli_query($conexion,"SELECT ALIAS FROM usuarios");
        
            while($fila=mysqli_fetch_row($resultado)){
                $arrayAlias[$aux]=$fila[0];
                $aux++;
            }//whle que lo recorre
        }//uso de la BBDD
    }//else

    //indico que sera un JSON con UTF-8
            header("Content-type: application/json; charset=utf-8");
            //muestro por pantalla
            echo json_encode($arrayAlias);
?>