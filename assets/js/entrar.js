
async function alias(opcion, condicion1, condicion2) {
    console.log("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion=" + condicion1 + "&condicion2=" + condicion2);
    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" +
        opcion + "&condicion=" + condicion1 + "&condicion2=" + condicion2, {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();
    return Promise.resolve(response);
}//funcion asincrona que devuelve los datos del usuario si es correcto

async function olvido(opcion, condicion1, condicion2) {

    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion=" + condicion1 + "&condicion2=" + condicion2, {
        method: "PUT",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();
    return Promise.resolve(response);
}//funcion asincrona que devuelve datos del usuario con el datos y correo indicado

window.addEventListener("load", () => {
    let nombre = document.getElementById("nombre");//campo nombre
    let key = document.getElementById("key");//campo key
    let enviar = document.getElementById("enviar");//boton enviar submit
    let fondo = document.getElementById("rfondoi");//fondo del formulario
    //let olvido = document.getElementById("olvido");//btn olvido
    let entrada = document.getElementById("entrada");//formulario
    let pedir = document.getElementById("pedir");//boton del menu de olvido

    let validacion = document.getElementById("validacion");//div con el error 1
    let validacion1 = document.getElementById("validacion1");//div con el error 1
    let validacion2 = document.getElementById("validacion2");//div con el error 2
    let validacion3 = document.getElementById("validacion3");//div con el error 1

    entrada.addEventListener("submit", (e) => {
        let validador = true;

        if (nombre.value == "") {
            validador = false;
            nombre.style.border = "2px solid red";
            validacion.style.display = "block";
            validacion.style.fontWeight = "bold";
            e.preventDefault();
        } else {
            nombre.style.border = "1px solid black";
            validacion.style.display = "none";
        }

        if (key.value == "") {
            validador = false;
            key.style.border = "2px solid red";
            fondo.style.height = "500px";
            validacion2.style.display = "block";
            validacion2.style.fontWeight = "bold";
            e.preventDefault();
        } else {
            fondo.style.height = "425px";
            key.style.border = "1px solid black";
            validacion2.style.display = "none";
        }
        console.log(nombre.value + "\n" + key.value);

        if (validador) {
            alias("usuario", nombre.value, key.value).then(data => {
                console.log(data);
                if (data == "") {
                    validacion1.style.display = "block";
                    validacion3.style.display = "block";
                } else {
                    validacion1.style.display = "none";
                    validacion3.style.display = "none";
                    sessionStorage.setItem('alias', data[0][0]);
                    sessionStorage.setItem('fecha', data[0][1]);
                    sessionStorage.setItem('localidad', data[0][2]);
                    sessionStorage.setItem('mail', data[0][3]);
                    sessionStorage.setItem('key', data[0][4]);
                    sessionStorage.setItem('foto', data[0][5]);
                    location.replace('http://localhost/proyecto/index.html');
                }

            });
        }
    })//click de enviar

    //olvido de contraseña
    pedir.addEventListener("click", (e) => {
        //variables
        let validador = true;

        //datos
        let usuario = document.getElementById("usuario");
        let mail = document.getElementById("mail");

        //validaciones
        let validacion = document.getElementById("validacion9");
        let validacion1 = document.getElementById("validacion1");

        //boton cerrar
        let cerrar = document.getElementById("cerrar");

        //expresiones
        let expresionmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let expresion_nom = /[a-zA-ZñÑáéíóú0-9]{2,}$/;

        if (!expresionmail.test(mail.value)) {
            validador = false;
            mail.style.border = "2px solid red";
            validacion1.style.display = "block";
            validacion1.style.fontWeight = "bold";
        } else {
            mail.style.border = "1px solid black";
            validacion1.style.display = "none";
        }

        if (!expresion_nom.test(usuario.value)) {
            validador = false;
            usuario.style.border = "2px solid red";
            validacion.style.display = "block";
            validacion.style.fontWeight = "bold";
        } else {
            usuario.style.border = "1px solid black";
            validacion.style.display = "none";
        }

        if (validador == true) {
            olvido("correo", usuario.value, mail.value).then(data => {
                console.log(data);
            });
            usuario.setAttribute("readOnly", true);
            mail.setAttribute("readOnly", true);
            pedir.setAttribute("disabled", true);
        } else {
            e.preventDefault();
        }
    })
})