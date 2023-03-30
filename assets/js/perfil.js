let arrayAlias = [];
//comprobador de nombres
async function nombre() {
    let response = await fetch("http://localhost/proyecto/php/comprobacionAlias.php", {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();
    return Promise.resolve(response);
    //let texto = await response.json();

    //arrayAlias=texto;
    /* for (i = 0; i < texto.length; i++) {
        arrayAlias[i]=texto[i];
    } */
}

//funcion asincrona para la modificacion de datos
async function modificacion(opcion, condicion1, condicion2, condicion3, condicion4, condicion5, condicion6) {

    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion=" + condicion1 +
        "&condicion2=" + condicion2 + "&condicion3=" + condicion3 + "&condicion4=" + condicion4 + "&condicion5=" + condicion5 + "&condicion6=" + condicion6, {
        method: "PUT",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();
    return Promise.resolve(response);
}

//funcion asincrona para la eliminacion de datos
async function borrar(opcion, condicion1, condicion2) {

    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion=" + condicion1 +
        "&condicion2=" + condicion2, {
        method: "DELETE",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();
    return Promise.resolve(response);
}


//campos
let alias = document.getElementById("palias");//campo alias
let fecha = document.getElementById("pnacimiento");//campo Fecha nacimiento
let mail = document.getElementById("pemail");//campo email
let localidad = document.getElementById("plocalidad");//campo localidad
let key = document.getElementById("pkey");//campo contraseña
let foto =document.getElementById("foto");//elemento foto del perfil
//let check=document.getElementsByName("RS");//checbox Redes sociales

//div validaciones
let validacion = document.getElementById("validacion");
let validacion1=document.getElementById("validacion1");
let validacion2 = document.getElementById("validacion2");
let validacion4 = document.getElementById("validacion4");

alias.value = sessionStorage.getItem('alias');
fecha.value = sessionStorage.getItem('fecha');
mail.value = sessionStorage.getItem('mail');
localidad.value = sessionStorage.getItem('localidad');

window.addEventListener("load", () => {
    let botones = document.getElementsByName("cambiar");

    let oculto =document.getElementById("oculto");
    oculto.value=sessionStorage.getItem('alias');

    let imagenes= document.getElementById("imagenes");

    if(sessionStorage.getItem('foto')!="null"){
        foto.setAttribute("src",sessionStorage.getItem('foto'));
    }else{
        foto.setAttribute("src","./assets/imagenes/casco.jpg");
    }
    

    botones[0].addEventListener("click", () => {
        //Cambiar
        let fecha1 = new Date();
        //console.log("opcion Cambiar");
        let expresionmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let expresion_key = /^\w{8,}$/;
        let expresion_nom = /[a-zA-ZñÑáéíóú0-9]{2,}$/;

        let milisegundos = 1000 * 60 * 60 * 24 * 365 * 18;
        let mili_fecha = fecha.value;
        let fecha_dada = new Date(mili_fecha);
        let mili = fecha1.getTime() - fecha_dada.getTime();

        let antiguo = sessionStorage.getItem('alias');

        nombre().then(data => {
            if (!data.includes(alias.value) || alias.value==antiguo) {
                validacion.style.display = "none";
                validacion1.style.display="none";
                validacion2.style.display="none";
                validacion4.style.display="none";

                alias.style.border = "1px solid black";
                key.style.border="1px solid black";
                mail.style.border="1px solid black";
                fecha.style.border="1px solid black";

                if (expresion_key.test(key.value) && expresionmail.test(mail.value) && expresion_nom.test(alias.value) && mili > milisegundos) {

                    modificacion("cambiar_usuario", alias.value, fecha.value, localidad.value, mail.value, key.value, antiguo).then(data => {
                        console.log(data);

                        sessionStorage.setItem('alias', data[0][0]);
                        sessionStorage.setItem('mail', data[0][3]);
                        sessionStorage.setItem('key', data[0][4]);
                        sessionStorage.setItem('fecha', data[0][1]);
                        sessionStorage.setItem('localidad', data[0][2]);
                        sessionStorage.setItem('foto', data[0][5]);
                    });
                } else {
                    //no cumple las condiciones
                    if (!expresion_key.test(key.value)) {
                        key.style.border="2px solid red";
                        validacion2.style.display="block";
                    }else{
                        key.style.border="1px solid black";
                        validacion2.style.display="none";
                    }

                    if (!expresionmail.test(mail.value)) {
                        mail.style.border="2px solid red";
                        validacion1.style.display="block";
                    }else{
                        mail.style.border="1px solid black";
                        validacion1.style.display="none";
                    }

                    if (!mili > milisegundos) {
                        fecha.style.border="2px solid red";
                        validacion4.style.display="block";
                    }else{
                        fecha.style.border="1px solid black";
                        validacion4.style.display="none";
                    }
                }
            } else {
                alias.style.border = "2px solid red";
                validacion.style.display = "block";
                validacion.style.fontWeight = "bold";
            }
        });//funcion que comprueba los nombres existentes


    })

    botones[1].addEventListener("click", () => {
        //Cambiar Imagen
        console.log("opcion Cambiar Imagen");
        foto.setAttribute("src",sessionStorage.getItem('foto'));
    })

    botones[2].addEventListener("click", () => {
        //borrar
        console.log("opcion Borrar");
        borrar("borrar", alias.value, key.value);
        sessionStorage.removeItem('alias');
        sessionStorage.removeItem('fecha');
        sessionStorage.removeItem('mail');
        sessionStorage.removeItem('localidad');
        sessionStorage.removeItem('key');
        sessionStorage.removeItem('foto');
        location.replace("http://localhost/proyecto/index.html");
    });//boton borrar perfil

    botones[3].addEventListener("click", () => {
        //Cerrar Session
        //console.log("opcion Cerrar Session");
        sessionStorage.removeItem('alias');
        sessionStorage.removeItem('fecha');
        sessionStorage.removeItem('mail');
        sessionStorage.removeItem('localidad');
        sessionStorage.removeItem('key');
        sessionStorage.removeItem('foto');
        location.replace("http://localhost/proyecto/index.html");
    });//boton cerrar sesion

    imagenes.addEventListener("submit",(e)=>{
        let archivo=document.getElementById("archivo");

        let exp=/.+\.png$|.+\.jpg$|.+\.jpeg$/;
        let resultado=exp.test(archivo.value);
        if(!resultado){
           e.preventDefault(); 
        }
    })
})