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
                    $array[$aux]=[$fila[0],$fila[1],$fila[2],$fila[3],$fila[4]];
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
                $array[$aux]=[$fila[0],$fila[1],$fila[2],$fila[3],$fila[4]];
            }//while que lo recorre

            //indico en la cabecera que sera un json
            header("Content-type: application/json; charset=utf-8");
            //muestro el JSON por pantalla
            echo json_encode($array);
        }

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
                    $array[$aux]=[$fila[0],$fila[1],$fila[2],$fila[3],$fila[4]];
                }//while que lo recorre
            }

            

            //indico en la cabecera que sera un json
            header("Content-type: application/json; charset=utf-8");
            //muestro el JSON por pantalla
            echo json_encode($array);
        }
    }
}
?>