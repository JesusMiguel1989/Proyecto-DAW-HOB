<?
    session_start();
    include "./LoginMySql.php";

    //creo la conexion
    $conexion=new mysqli($host,$usuario,$password);
    //recojo los datos de la url
    $nombre=$_POST['nombre'];
    $key=$_POST['contraseña'];

    if(!$conexion){
        echo "No se ha podido establecer la conexion";
    }else{
        if(mysqli_query($conexion,"use HOBBIES")){
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
                    header("Refresh:0; url=../index.html?nombre=".$_SESSION['nombre']."&key=".$_SESSION['key']);
                }else{
                    //en caso de no coincidir vuelve a la principal sin pasar datos
                    header("Refresh:0; url=index.html");
                }
            }
        }
    }
    

    
?>