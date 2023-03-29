<?php
    include "./LoginMySql.php";
    
    $conexion=new mysqli($host,$usuario,$password);

    if(!$conexion){
        echo "No se ha podido establecer la conexion";
    }else{
        $mail=$_POST['mail'];
        $key=$_POST['contraseña'];
        $nombre=str_replace(" ","+",$_POST['nombre']);
        $fecha=$_POST['fecha'];
        $localidad=$_POST['localidad'];
        

        //echo $mail."<br>".$key."<br>".$nombre."<br>".$fecha."<br>".$localidad."<br>";
        if(mysqli_query($conexion,"use HOBBIES")){

            $correo=$_GET['correo'];
            if(isset($correo)){
                $mail=$_GET['mail'];
                $key=$_GET['contraseña'];
                $nombre=str_replace("+"," ",$_GET['nombre']);
                $fecha=$_GET['fecha'];
                $localidad=$_GET['localidad'];

                $fechaNac=date("Y-m-d");
                $fecha=new DateTime($fecha);
                $fechaNaci=$fecha->format("Y-m-d");
                $password=password_hash($key,  PASSWORD_DEFAULT);

                /* echo "INSERT INTO USUARIOS 
                VALUES('".$nombre."','".$fechaNaci."','".$localidad."','".$mail."','".$password."')"; */
                $insercion=mysqli_query($conexion,"INSERT INTO USUARIOS 
                            VALUES('".$nombre."','".$fechaNaci."','".$localidad."','".$mail."','".$password."')");
                if($insercion){
                    echo "Usuario guardado<br>";
                }else{
                    echo mysqli_error($conexion);
                }
                header("Refresh: 10; url=../index.html");
            }else{
                $to=$mail;
                $titulo='Registro de HOB';
                $mensaje='Para terminar con el registro, debes acceder al siguiente enlace:\r\n
                http://localhost/proyecto/php/Registro.php?correo=true&nombre='.$nombre.'&key='.$key.'&mail='.$mail.'&fecha='.$fecha.'&localidad='.$localidad;
                $cabeceras = 'From: jes11989@hotmail.com' . '\r\n';
                mail($to,$titulo,$mensaje,$cabeceras);

                header("Refresh: 5; url=../index.html");
            }
            
        }
    }
?>