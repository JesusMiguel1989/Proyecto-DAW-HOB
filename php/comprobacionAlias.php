<?
    include "./greenhob.php";

    $arrayAlias=[];
    $aux=0;
    $conexion=new mysqli($host,$usuario,$password,$bbdd);

    if(!$conexion){
        echo "No se ha podido establecer la conexion";
    }else{
        if(mysqli_query($conexion,"use ".$bbdd)){
            $resultado=mysqli_query($conexion,"SELECT ALIAS FROM USUARIOS");

            while($fila=mysqli_fetch_row($resultado)){
                $arrayAlias[$aux]=$fila[0];
                $aux++;
            }//whle que lo recorre
        }//uso de la BBDD
    }//else

    header("Content-type: application/json; charset=utf-8");
    echo json_encode($arrayAlias);
?>