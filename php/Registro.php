<?php
    include "./LoginMySql.php";
    
    $conexion=new mysqli($host,$usuario,$password);

    if(!$conexion){
        echo "No se ha podido establecer la conexion";
    }else{
        $mail=$_POST['mail'];
        $key=$_POST['key'];
        $nombre=str_replace(" ","+",$_POST['nombre']);
        $fecha=$_POST['fecha'];
        $localidad=$_POST['localidad'];
        
        //echo $key;
        //echo $mail."<br>".$key."<br>".$nombre."<br>".$fecha."<br>".$localidad."<br>";
        if(mysqli_query($conexion,"use HOBBIES")){

            $correo=$_GET['correo'];
            if(isset($correo)){
                $nombre=$_GET['nombre'];
                $mail=$_GET['mail'];
                //se modifica el campo estado del usuario y la fecha de registro pasa a OK y fecha a 9999-01-01
                $update=mysqli_query($conexion,"UPDATE USUARIOS SET ESTADO='OK', F_REGISTRO='9999-01-01' WHERE ALIAS='".$nombre."' AND EMAIL='".$mail."'");
                header("Refresh: 0; url=../index.html");
            }else{
                $mail=$_POST['mail'];
                $key=$_POST['key'];
                $nombre=str_replace("+"," ",$_POST['nombre']);
                $fecha=$_POST['fecha'];
                $localidad=$_POST['localidad'];

                echo "valores:<br>".$mail."<br>".$key."<br>".$nombre."<br>".$fecha."<br>".$localidad."<br>";
                $fechaReg=date("Y-m-d");
                $fecha=new DateTime($fecha);
                $fechaNaci=$fecha->format("Y-m-d");
                $password=password_hash($key,  PASSWORD_DEFAULT);

                echo "INSERT INTO USUARIOS  (ALIAS, F_NACIMIENTO, LOCALIDAD, EMAIL, CONTRASEÑA, ESTADO, F_REGISTRO)
                VALUES('".$nombre."','".$fechaNaci."','".$localidad."','".$mail."','".$password."','Pendiente',".$fechaReg.")"."<br>";

                /* echo "INSERT INTO USUARIOS (ALIAS, F_NACIMIENTO, LOCALIDAD, EMAIL, CONTRASEÑA)
                VALUES('".$nombre."','".$fechaNaci."','".$localidad."','".$mail."','".$password."')"; */
                $insercion=mysqli_query($conexion,"INSERT INTO USUARIOS  (ALIAS, F_NACIMIENTO, LOCALIDAD, EMAIL, CONTRASEÑA, ESTADO, F_REGISTRO)
                            VALUES('".$nombre."','".$fechaNaci."','".$localidad."','".$mail."','".$password."','Pendiente','".$fechaReg."')");
                if($insercion){
                    echo "Usuario guardado<br>";
                }else{
                    echo mysqli_error($conexion);
                }

                //mandamos el correo de verificacion

                $to=$mail;
                $titulo='Registro de HOB';
                $mensaje='Para terminar con el registro, debes acceder al siguiente enlace:\r\n
                http://localhost/proyecto/php/Registro.php?correo=true&nombre='.$nombre.'&mail='.$mail;
                $cabeceras = 'From: jes11989@hotmail.com' . '\r\n';
                mail($to,$titulo,$mensaje,$cabeceras);

                header("Refresh: 0; url=../index.html");
                //header("Refresh: 0; url=../index.html");
            }//comprobacion de si vien desde el correo o desde la pagina
            
            //hago limpia de usuarios que no han hecho el ultimo paso del registro (correo)
            $fecha=date("Y-m-d");

            $resultado=mysqli_query($conexion,"SELECT ALIAS FROM USUARIOS WHERE F_REGISTRO<'".$fecha."'");

            $aux=0;
            while($fila=mysqli_fetch_row($resultado)){
                $eliminacion=mysqli_query($conexion,"DELETE FROM USUARIOS WHERE ALIAS='".$fila[0]."'");
            }
        }
    }
?>