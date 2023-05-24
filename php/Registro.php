<?php
    include "./greenhob.php";
    
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
                $texto="Para terminar con el registro, debes acceder al siguiente enlace:<br>
                <a  href='http://localhost/proyecto/php/Registro.php?correo=true&nombre=".$nombre."&mail=".$mail."'>pincha aqui</a>";

                $mensaje="<html><head><meta charset='UTF-8'><style> .contenedor { background-color: rgb(152, 226, 202); color: black;  border-spacing: 2px; border: 5px double rgb(255, 217, 107); text-align: center; padding: 1rem 3rem; margin: 3rem auto; border-radius: 0.375rem; max-width: 500px; box-shadow: 0 1rem 3rem rgba(0, 0, 0, .5); } .hb{ padding-top: 100px; font-size: 35px; color: rgb(255, 217, 107); font-weight:bold; } .o{ padding-top: 100px; font-size: 35px; color: rgb(112, 173, 71); font-weight:bold;} .titulo { padding-top: 100px; font-weight: bold; } .amarillo { height: .5rem; background-color: rgb(255, 217, 107); margin: 2rem 0; border: 0px solid; border-radius: 0.375rem; } .parrafo { font-size: 1.5rem; margin-bottom: 2rem; text-align: center; } </style></head><body><div class='contenedor'><span class='hb'>H</span><span class='o'>O</span><span class='hb '>B</span><hr class='amarillo'><center><p class='parrafo'>".$texto."</p></center></div></body></html>";
                 
                $unsalto="\r\n";
                $encabezados = "";
                
                $cabeceras = 'From: <jes11989@hotmail.com>'.$unsalto;
                $cabeceras .= "MIME-Version: 1.0".$unsalto;
	            $cabeceras .= "Content-Type: text/html;";
	            $cabeceras .= " boundary=Separador_de_partes";

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